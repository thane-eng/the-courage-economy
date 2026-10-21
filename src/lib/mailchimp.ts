import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const SubscribeSchema = z.object({
  email: z.string().email(),
  firstName: z.string().optional(),
});

function env(key: string): string | undefined {
  const v = process.env[key]?.trim();
  return v || undefined;
}

export const subscribeToMailchimp = createServerFn({ method: "POST" })
  .validator(SubscribeSchema)
  .handler(async ({ data }) => {
    const apiKey = env("MAILCHIMP_API_KEY");
    const audienceId = env("MAILCHIMP_AUDIENCE_ID");
    const server = env("MAILCHIMP_SERVER") || apiKey?.split("-")[1];

    if (!apiKey || !audienceId || !server) {
      const available = Object.keys(process.env)
        .filter((k) => k.includes("MAIL") || k.startsWith("VERCEL") || k === "NODE_ENV")
        .sort();
      console.error("Mailchimp env missing. Available related keys:", available);
      throw new Error(
        `Subscription service is not configured. Available keys: ${available.join(", ") || "(none)"}`,
      );
    }

    const auth = Buffer.from(`anystring:${apiKey}`).toString("base64");
    const url = `https://${server}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email_address: data.email,
        status: "subscribed",
        merge_fields: data.firstName ? { FNAME: data.firstName } : undefined,
      }),
    });

    if (!response.ok) {
      const err = (await response.json().catch(() => ({}))) as {
        title?: string;
        detail?: string;
      };
      if (response.status === 400 && err.title === "Member Exists") {
        return { ok: true, already: true };
      }
      console.error("Mailchimp error", err);
      throw new Error(err.detail || "Could not subscribe.");
    }

    return { ok: true };
  });
