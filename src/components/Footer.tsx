import React, { useState } from 'react';
import { FOOTER_COLUMNS } from '../data/composioData';
import { validateNewsletterForm } from '../utils/composioLogic';

const badgeSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <circle cx="24" cy="24" r="22" stroke="rgba(230,230,247,0.18)" stroke-width="1.2"/>
  <circle cx="24" cy="24" r="18" stroke="rgba(164,143,255,0.48)" stroke-width="1" stroke-dasharray="2 2"/>
  <text x="24" y="22" text-anchor="middle" fill="#e6e6f7" font-family="IBM Plex Mono, monospace" font-size="6.5" font-weight="600">226 PASS</text>
  <text x="24" y="30" text-anchor="middle" fill="rgba(230,230,247,0.65)" font-family="IBM Plex Mono, monospace" font-size="5.5">MIT RUST</text>
</svg>`;
const badgeDataUri = `data:image/svg+xml;utf8,${encodeURIComponent(badgeSvg)}`;

export function Footer() {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [statusMessage, setStatusMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = validateNewsletterForm(email, honeypot);
    if (res.isBot) return;
    if (!res.valid) {
      setStatusMessage({ type: 'error', text: res.error || 'Invalid email address.' });
      return;
    }
    setStatusMessage({
      type: 'success',
      text: `Subscribed ${email.trim()} to prricode release & protocol updates.`,
    });
    setEmail('');
  };

  return (
    <footer
      id="footer-newsletter"
      data-section-theme="dark"
      className="dark relative overflow-hidden bg-background text-foreground"
    >
      <div className="relative z-10 mx-auto w-full max-w-page border-border border-x pt-12 pb-12 md:pt-16 md:pb-16 px-5 md:px-10">
        {/* Newsletter band (§6.8) */}
        <div className="mb-12 grid gap-6 md:mb-16 md:grid-cols-2 md:items-start md:gap-10">
          <div>
            <h2 className="font-sans text-2xl text-foreground leading-tight md:text-3xl font-medium">
              Subscribe to release notes
            </h2>
            <p className="mt-2 max-w-md text-body-sm text-muted-foreground">
              Get updates on new Rust crates, JSON-RPC protocol additions, and Diátaxis guides.
            </p>
          </div>

          <div>
            <form onSubmit={handleSubmit} noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              {/* Hidden honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="newsletter-website">Website</label>
                <input
                  id="newsletter-website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="you@domain.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (statusMessage) setStatusMessage(null);
                  }}
                  className="h-11 min-w-0 flex-1 rounded-xs border border-border bg-card px-3 text-foreground outline-none placeholder:text-muted-foreground focus:border-brand"
                />
                <button
                  type="submit"
                  className="h-11 shrink-0 rounded-xs bg-brand px-5 font-mono text-xs uppercase tracking-wider text-white transition-colors hover:bg-brand-hover cursor-pointer"
                >
                  Subscribe
                </button>
              </div>
            </form>

            {statusMessage && (
              <p
                role="status"
                className={`mt-2 font-mono text-xs ${
                  statusMessage.type === 'error' ? 'text-red-400' : 'text-[var(--accent-verify)]'
                }`}
              >
                {statusMessage.text}
              </p>
            )}

            <p className="mt-3 text-caption text-muted-foreground">
              Release notes and architecture updates.{' '}
              <a
                className="underline underline-offset-2 hover:text-foreground"
                href="https://github.com/RavaniRoshan/prricode/blob/main/SECURITY.md"
              >
                Security policy
              </a>
            </p>
          </div>
        </div>

        {/* 6-column link grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 sm:gap-x-8 xl:grid-cols-6 xl:gap-x-6">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading} className="min-w-0 border-border border-t pt-5">
              <div className="flex flex-col gap-4">
                <span className="font-mono text-muted-foreground text-xs uppercase tracking-wider">
                  {col.heading}
                </span>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2.5">
                    {col.links.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        className="flex flex-wrap items-center gap-2 font-mono text-foreground/85 text-sm tracking-default hover:text-brand-readable transition-colors"
                      >
                        <span>{link.label}</span>
                        {link.badge && (
                          <span className="shrink-0 whitespace-nowrap rounded-xs border border-brand/50 bg-brand/15 px-1.5 py-0.5 text-brand-readable text-[10px]">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-stretch gap-6 md:mt-24 md:flex-row md:items-center md:justify-between md:gap-0">
          <div className="flex items-center gap-5 text-muted-foreground">
            <a
              href="https://github.com/RavaniRoshan/prricode"
              className="hover:text-foreground transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
              </svg>
              <span className="sr-only">GitHub Repository</span>
            </a>

            <a
              href="https://ravaniroshan.github.io/prricode/"
              className="hover:text-foreground transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
              </svg>
              <span className="sr-only">Diátaxis Documentation</span>
            </a>

            <a
              href="https://github.com/RavaniRoshan/prricode/releases/latest"
              className="hover:text-foreground transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span className="sr-only">GitHub Releases</span>
            </a>
          </div>

          <div className="flex items-center justify-between md:justify-end gap-4">
            <span className="font-mono text-muted-foreground text-sm">
              © prricode 2026 · MIT License
            </span>
            <img
              src={badgeDataUri}
              alt="226 Tests Passing · MIT Rust"
              width={48}
              height={48}
              className="size-8 md:size-12 object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
