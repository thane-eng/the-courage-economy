import { defineEventHandler, readBody, createError } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody<{ email?: string; firstName?: string }>(event);
  const email = body?.email?.trim();
  const firstName = body?.firstName?.trim();

  if (!email || !email.includes("@")) {
    throw createError({ statusCode: 400, statusMessage: "Valid email required" });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY?.trim();
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID?.trim();
  const server =
    process.env.MAILCHIMP_SERVER?.trim() || apiKey?.split("-")[1];

  if (!apiKey || !audienceId || !server) {
    const available = Object.keys(process.env)
      .filter((k) => k.includes("MAIL") || k.startsWith("VERCEL") || k === "NODE_ENV")
      .sort();
    console.error("Mailchimp env missing. Available related keys:", available);
    throw createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
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
      email_address: email,
      status: "subscribed",
      merge_fields: firstName ? { FNAME: firstName } : undefined,
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
    throw createError({
      statusCode: 502,
      statusMessage: "Something went wrong",
    });
  }

  return { ok: true };
});
