import { createFileRoute } from "@tanstack/react-router";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";
import { PageHero, PageShell } from "@/components/page-shell";
import { Button } from "@/components/ui/button";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/downloads")({
  component: DownloadsPage,
  head: () =>
    pageHead({
      title: "Downloads",
      description:
        "Free field tools, worksheets, and resources for building a Courage Economy.",
      path: "/downloads",
    }),
});

const RESOURCES = [
  {
    title: "Courage Economy Overview",
    description: "Core ideas of the Courage Economy in a single page.",
    file: "courage-economy.pdf",
    type: "PDF",
  },
  {
    title: "Lie Economy Inventory",
    description: "The individual Lie Economy Inventory worksheet.",
    file: "lie-economy-inventory.pdf",
    type: "PDF",
  },
  {
    title: "Incentive Inventory",
    description: "What you say versus what you actually reward. Reveals the system behind the lies.",
    file: "incentive-inventory.pdf",
    type: "PDF",
  },
  {
    title: "Lie Catalog",
    description: "Sixty comfortable lies that keep the Lie Economy running. Named so they can be seen.",
    file: "lie-catalog.pdf",
    type: "PDF",
  },
  {
    title: "Three Stages",
    description: "Visual of the three stages.",
    file: "3-stages.jpg",
    type: "Image",
  },
  {
    title: "Sine Wave",
    description: "Sine wave diagram.",
    file: "sine-wave.png",
    type: "Image",
  },
  {
    title: "Work Quadrant",
    description: "Light version of the work quadrant.",
    file: "work-quadrant-light.png",
    type: "Image",
  },
] as const;

const COOKIE = "ce_downloads_unlocked=1";

function hasUnlocked(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie.split(";").some((c) => c.trim().startsWith(COOKIE));
}

function setUnlocked() {
  document.cookie = `${COOKIE}; path=/; max-age=${60 * 60 * 24 * 365}; SameSite=Lax`;
}

function trackDownload(file: string) {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", "file_download", {
      file_name: file,
      link_url: `/downloads/${file}`,
    });
  }
}

function DownloadsPage() {
  const [unlocked, setUnlockedState] = useState(false);
  const [pendingFile, setPendingFile] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setUnlockedState(hasUnlocked());
  }, []);

  function startDownload(file: string) {
    trackDownload(file);
    window.open(`/downloads/${file}`, "_blank", "noopener,noreferrer");
  }

  function handleClick(file: string) {
    if (unlocked || hasUnlocked()) {
      startDownload(file);
      return;
    }
    setPendingFile(file);
    setError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!pendingFile) return;
    setBusy(true);
    setError(null);
    try {
      const res = await fetch("/api/mailchimp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName: firstName || undefined }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || `Request failed (${res.status})`);
      }
      setUnlocked();
      setUnlockedState(true);
      const file = pendingFile;
      setPendingFile(null);
      setEmail("");
      setFirstName("");
      startDownload(file);
    } catch (err) {
      console.error(err); setError("Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <PageShell>
      <PageHero eyebrow="Downloads" title="Field tools and resources">
        <p>
          Worksheets, overviews, and visuals you can use with your team.
          Everything here is free.
        </p>
      </PageHero>

      <section className="bg-paper px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-4">
          {RESOURCES.map((item) => (
            <div
              key={item.file}
              className="flex flex-col gap-3 border border-rule bg-cream p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <div className="flex items-baseline gap-3">
                  <h2 className="font-display text-lg text-ink">{item.title}</h2>
                  <span className="text-xs uppercase tracking-wider text-ink-soft">
                    {item.type}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {item.description}
                </p>
              </div>
              <Button
                size="sm"
                className="shrink-0"
                onClick={() => handleClick(item.file)}
              >
                <Download className="size-4" />
                Download
              </Button>
            </div>
          ))}
        </div>
      </section>

      {pendingFile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/60 p-4">
          <div className="w-full max-w-md border border-rule bg-cream p-6 shadow-lg">
            <h3 className="font-display text-xl text-ink">Get the download</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Enter your email once. After that, downloads on this browser stay open.
            </p>
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-ink-soft">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full border border-rule bg-paper px-3 py-2 text-ink"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-ink-soft">
                  First name (optional)
                </label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="mt-1 w-full border border-rule bg-paper px-3 py-2 text-ink"
                />
              </div>
              {error && <p className="text-sm text-red-700">{error}</p>}
              <div className="flex gap-2 pt-2">
                <Button type="submit" disabled={busy} className="flex-1">
                  {busy ? "Adding…" : "Continue to download"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setPendingFile(null)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </PageShell>
  );
}
