import React, { useState, useEffect, useRef } from 'react';
import { DOC_ARTICLES, DocSectionId } from '../data/docsData';
import { ComposioWordmark } from './BrandAssets';

interface DocsModalProps {
  isOpen: boolean;
  activeSection: DocSectionId;
  onSelectSection: (section: DocSectionId) => void;
  onClose: () => void;
}

export function DocsModal({
  isOpen,
  activeSection,
  onSelectSection,
  onClose,
}: DocsModalProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredArticles = DOC_ARTICLES.filter((art) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      art.title.toLowerCase().includes(q) ||
      art.subtitle.toLowerCase().includes(q) ||
      art.sections.some(
        (s) =>
          s.heading.toLowerCase().includes(q) ||
          s.body.toLowerCase().includes(q) ||
          (s.codeBlock && s.codeBlock.code.toLowerCase().includes(q))
      )
    );
  });

  const currentArticle =
    filteredArticles.find((a) => a.id === activeSection) ||
    filteredArticles[0] ||
    DOC_ARTICLES[0];

  const handleCopy = (code: string, label: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(code).catch(() => {});
    }
    setCopiedCode(label);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="docs-hub-title"
      className="dark fixed inset-0 z-[110] flex items-center justify-center bg-black/80 backdrop-blur-md p-2 sm:p-4 md:p-6"
    >
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0"
      />

      <div className="relative z-10 flex h-[calc(100svh-1rem)] sm:h-[calc(100svh-2rem)] md:h-[min(860px,calc(100svh-3rem))] w-full max-w-[1180px] flex-col overflow-hidden rounded-xs border border-border bg-background text-foreground shadow-[0_32px_90px_rgba(0,0,0,0.85)]">
        {/* Top Documentation Command Bar */}
        <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-card px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <ComposioWordmark variant="white" className="h-5 w-auto" />
            <span className="h-4 w-px bg-border" aria-hidden="true" />
            <span className="rounded-xs bg-brand/20 border border-brand/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-brand-readable">
              DIÁTAXIS DOCS HUB
            </span>
          </div>

          <div className="flex flex-1 max-w-xs items-center gap-2 rounded-xs border border-border bg-background px-3 py-1.5">
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="text-muted-foreground shrink-0"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search slash cmds, crates, JSON-RPC..."
              aria-label="Search documentation"
              className="w-full bg-transparent font-mono text-xs text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            <a
              href={currentArticle.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-xs border border-border bg-background px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground hover:border-brand hover:text-foreground transition-colors"
            >
              <span>GITHUB DOCS</span>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <button
              ref={closeBtnRef}
              type="button"
              onClick={onClose}
              aria-label="Close documentation hub"
              className="inline-flex items-center gap-1.5 rounded-xs border border-border bg-background px-3 py-1.5 font-mono text-xs text-foreground hover:border-brand cursor-pointer transition-colors"
            >
              <span>ESC</span>
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
                <path d="M2.5 2.5L9.5 9.5M9.5 2.5L2.5 9.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </header>

        {/* Main Split Layout: Sidebar + Content */}
        <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
          {/* Left Navigation Rail */}
          <aside className="w-full md:w-[270px] shrink-0 border-b md:border-b-0 md:border-r border-border bg-card/60 overflow-x-auto md:overflow-y-auto p-3 sm:p-4">
            <nav aria-label="Documentation sections" className="flex md:flex-col gap-1.5">
              {DOC_ARTICLES.map((art) => {
                const isSelected = art.id === currentArticle.id;
                return (
                  <button
                    key={art.id}
                    type="button"
                    onClick={() => onSelectSection(art.id)}
                    className={`flex flex-col items-start gap-1 rounded-xs border px-3 py-2.5 text-left transition-all cursor-pointer shrink-0 md:shrink ${
                      isSelected
                        ? 'border-brand bg-brand/15 text-foreground shadow-sm'
                        : 'border-transparent hover:border-border hover:bg-white/[0.03] text-muted-foreground'
                    }`}
                  >
                    <div className="flex w-full items-center justify-between gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-wider text-brand-readable">
                        {art.category}
                      </span>
                      <span className="font-mono text-[9px] text-[var(--accent-verify)]">
                        {art.badge}
                      </span>
                    </div>
                    <span className="font-sans text-xs sm:text-sm font-medium text-foreground line-clamp-1">
                      {art.title}
                    </span>
                  </button>
                );
              })}
            </nav>

            <div className="mt-6 hidden md:flex flex-col gap-2 rounded-xs border border-border bg-background/70 p-3">
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--accent-verify)]">
                // WORKSPACE STATUS
              </span>
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>Rust Crates</span>
                <span className="text-foreground">17 modular</span>
              </div>
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>Test Suite</span>
                <span className="text-[var(--accent-verify)]">226 passing</span>
              </div>
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>Clippy Gate</span>
                <span className="text-brand-readable">-D warnings</span>
              </div>
            </div>
          </aside>

          {/* Right Documentation Reader */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-8 lg:p-10">
            <div className="mx-auto max-w-[780px]">
              <div className="flex flex-wrap items-center gap-2.5 pb-3">
                <span className="rounded-xs bg-brand px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white">
                  {currentArticle.category}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  · {currentArticle.readTime}
                </span>
              </div>

              <h1 id="docs-hub-title" className="text-h1 text-foreground">
                {currentArticle.title}
              </h1>
              <p className="mt-3 text-body-lg text-muted-foreground">
                {currentArticle.subtitle}
              </p>

              <hr className="my-7 border-border" />

              <div className="flex flex-col gap-8">
                {currentArticle.sections.map((sec) => (
                  <section key={sec.heading} className="flex flex-col gap-3">
                    <h2 className="text-h2 text-foreground">{sec.heading}</h2>
                    <p className="text-body text-muted-foreground leading-relaxed">
                      {sec.body}
                    </p>

                    {sec.bullets && (
                      <ul className="mt-1 flex flex-col gap-2 pl-4 border-l-2 border-brand/60">
                        {sec.bullets.map((b) => (
                          <li key={b} className="text-body-sm text-foreground/90">
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}

                    {sec.codeBlock && (
                      <div className="mt-2 overflow-hidden rounded-xs border border-border bg-[#07070d]">
                        <div className="flex items-center justify-between border-b border-border bg-card/80 px-3.5 py-2">
                          <span className="font-mono text-[11px] text-brand-readable">
                            {sec.codeBlock.label}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              handleCopy(sec.codeBlock!.code, sec.codeBlock!.label)
                            }
                            className="rounded-xs border border-border bg-background px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground hover:border-brand hover:text-foreground cursor-pointer transition-colors"
                          >
                            {copiedCode === sec.codeBlock.label ? 'COPIED ✓' : 'COPY'}
                          </button>
                        </div>
                        <pre className="overflow-x-auto p-4 font-mono text-xs text-foreground/90 leading-relaxed">
                          <code>{sec.codeBlock.code}</code>
                        </pre>
                      </div>
                    )}

                    {sec.table && (
                      <div className="mt-2 overflow-x-auto rounded-xs border border-border">
                        <table className="w-full border-collapse text-left font-mono text-xs">
                          <thead>
                            <tr className="border-b border-border bg-card text-brand-readable">
                              {sec.table.headers.map((h) => (
                                <th key={h} className="px-3.5 py-2.5 font-medium">
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {sec.table.rows.map((row) => (
                              <tr
                                key={row[0]}
                                className="border-b last:border-b-0 border-border bg-background/50"
                              >
                                <td className="px-3.5 py-2.5 font-medium text-foreground whitespace-nowrap">
                                  {row[0]}
                                </td>
                                <td className="px-3.5 py-2.5 text-[var(--accent-verify)] whitespace-nowrap">
                                  {row[1]}
                                </td>
                                <td className="px-3.5 py-2.5 font-sans text-muted-foreground">
                                  {row[2]}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Bottom pagination between Diátaxis articles */}
              <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
                <div className="font-mono text-xs text-muted-foreground">
                  MIT Licensed · RavaniRoshan/prricode
                </div>
                <div className="flex items-center gap-2">
                  {DOC_ARTICLES.map((art, i) => {
                    if (art.id !== currentArticle.id) return null;
                    const nextArt = DOC_ARTICLES[(i + 1) % DOC_ARTICLES.length];
                    return (
                      <button
                        key={nextArt.id}
                        type="button"
                        onClick={() => onSelectSection(nextArt.id)}
                        className="rounded-xs bg-brand px-4 py-2 font-mono text-xs text-white hover:bg-brand-hover cursor-pointer transition-colors"
                      >
                        NEXT: {nextArt.category} →
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
