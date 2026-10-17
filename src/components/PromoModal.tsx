import React, { useEffect, useRef } from 'react';
import { getAppIconDataUri } from './BrandAssets';
import { calculateWalletTotal } from '../utils/composioLogic';

const DOSSIER_ITEMS = [
  { name: 'EARS Spec & Plan', slug: 'ears', action: 'pipeline/specRead · 3 requirements', cost: 0.00 },
  { name: 'Build & Clippy Gate', slug: 'rust', action: 'cargo test --workspace (226 pass)', cost: 0.00 },
  { name: 'Adversarial Verifier', slug: 'shield', action: 'Context-isolated property tests', cost: 0.00 },
];

export function PromoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const { totalSpent } = calculateWalletTotal(DOSSIER_ITEMS, 0.0);

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-xs motion-safe:animate-fade-in"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-modal-title"
        className="fixed top-1/2 left-1/2 z-[100] max-h-[calc(100svh-2rem)] w-[calc(100%-2rem)] max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-xs border border-border bg-card text-foreground shadow-2xl overflow-y-auto"
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close modal"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 grid size-8 place-items-center rounded-xs bg-black/40 text-white/80 transition-colors hover:bg-black/70 hover:text-white cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true">
            <path d="M2 2l10 10M12 2L2 12" />
          </svg>
        </button>

        {/* Top Acceptance Dossier & Quickstart visual mock */}
        <div className="dark bg-background border-b border-border p-6 pt-8 text-foreground relative overflow-hidden">
          <div className="mx-auto max-w-[380px] rounded-xs specular-card-dark p-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div className="flex items-center gap-2">
                <span className="rounded-xs bg-brand px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white">
                  ACCEPTANCE DOSSIER
                </span>
              </div>
              <div className="font-mono text-xs text-muted-foreground tabular-nums">
                Provider <span className="text-brand-readable font-medium">ollama / kilo :free</span>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-2">
              {DOSSIER_ITEMS.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-xs border border-border bg-white/[0.03] px-3 py-2"
                >
                  <div className="flex items-center gap-2.5">
                    <img
                      src={getAppIconDataUri(item.slug)}
                      alt={item.name}
                      width={20}
                      height={20}
                      className="size-5 rounded-xs object-contain"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <div className="font-sans text-xs font-medium text-foreground">{item.name}</div>
                      <div className="font-mono text-[10px] text-muted-foreground">{item.action}</div>
                    </div>
                  </div>
                  <span className="font-mono text-xs text-[var(--accent-verify)] tabular-nums">
                    VERIFIED
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between border-t border-border pt-2.5 font-mono text-xs">
              <span className="text-muted-foreground">Key cost (local / kilo :free)</span>
              <span className="text-[var(--accent-verify)] font-medium tabular-nums">{totalSpent}</span>
            </div>
          </div>
        </div>

        {/* Copy & CTA area */}
        <div className="p-6 flex flex-col gap-3">
          <h2 id="promo-modal-title" className="text-balance text-h2 text-foreground">
            Concept in. Running product{' '}
            <span className="font-serif-accent text-[1.1em] text-brand-readable font-normal">
              verified
            </span>
            .
          </h2>
          <p className="text-body-sm text-muted-foreground leading-relaxed">
            Run <code className="font-mono text-xs bg-muted px-1.5 py-0.5 text-brand-readable">prricode</code> in your
            terminal — conversation, EARS specification, plan, gated build, adversarial
            verification, and an acceptance dossier rather than a diff you have to trust.
          </p>

          <div className="mt-3 flex items-center gap-3">
            <a
              href="https://github.com/RavaniRoshan/prricode"
              onClick={onClose}
              className="flex min-h-11 flex-1 items-center justify-center rounded-xs bg-brand px-4 font-mono text-sm text-white tracking-default hover:bg-brand-hover transition-colors"
            >
              VIEW ON GITHUB
            </a>
            <button
              type="button"
              onClick={onClose}
              className="flex min-h-11 items-center justify-center rounded-xs border border-border px-4 font-mono text-sm text-foreground/80 tracking-default hover:border-brand hover:text-foreground cursor-pointer transition-colors"
            >
              EXPLORE SITE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
