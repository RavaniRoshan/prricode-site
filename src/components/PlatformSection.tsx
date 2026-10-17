import React from 'react';
import { motion } from 'motion/react';
import { PLATFORM_AGENT_CARDS, OUT_OF_THE_BOX_ITEMS } from '../data/composioData';
import { getAppIconDataUri } from './BrandAssets';

export function PlatformSection({ onTryForFreeClick }: { onTryForFreeClick: () => void }) {
  return (
    <section
      id="platform"
      data-section-theme="dark"
      className="dark bg-background py-16 md:py-24 px-5 md:px-6 text-foreground"
    >
      <div className="mx-auto w-full max-w-page">
        {/* Section header (§6.4) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-7 text-center lg:gap-8"
        >
          <div className="flex flex-col items-center gap-4 lg:gap-5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-brand-readable">
              04 // MODULAR RUST ARCHITECTURE
            </span>
            <h2 className="text-balance text-h1 text-foreground">
              Drive the agent over a{' '}
              <span className="font-serif-accent text-[1.08em] text-brand-readable font-normal">
                deterministic
              </span>{' '}
              JSON-RPC 2.0 protocol
            </h2>
            <p className="max-w-prose text-balance text-body-lg text-muted-foreground">
              17 modular Rust crates under the hood. Drive prricode from the built-in TUI, CLI, or
              any custom editor over stdio.
            </p>
          </div>
        </motion.div>

        {/* Split panel */}
        <div className="mt-12 md:mt-16 dark flex h-auto w-full flex-col overflow-hidden bg-background lg:h-[360px] lg:flex-row">
          {/* Left column */}
          <div className="flex w-full flex-col justify-between gap-6 pr-0 lg:w-[340px] lg:shrink-0 lg:gap-0 lg:pr-10">
            <h3 className="flex items-center gap-2.5">
              <span className="font-medium text-2xl text-foreground leading-snug">prricode</span>
              <span className="rounded-xs border border-[var(--accent-verify)]/60 bg-[var(--accent-verify)]/10 px-1.5 py-0.5 font-mono text-[var(--accent-verify)] text-xs leading-normal">
                JSON-RPC 2.0
              </span>
            </h3>

            <p className="text-base text-muted-foreground leading-snug">
              Any editor, TUI, or script can drive the same agent. Start a session in three lines:
            </p>

            <pre className="rounded-xs specular-card-dark px-3 py-2.5 font-mono text-[10px] text-foreground/85 leading-relaxed overflow-x-auto">
              <code>{`{"jsonrpc":"2.0","id":1,"method":"initialize",...}
{"jsonrpc":"2.0","id":2,"method":"session/start",...}
{"jsonrpc":"2.0","id":3,"method":"turn/start",
 "params":{"input":[{"type":"text","text":"fix test"}]}}`}</code>
            </pre>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onTryForFreeClick}
                className="inline-flex w-fit items-center justify-center rounded-xs bg-brand px-3 py-1.5 font-mono text-white text-sm leading-normal tracking-default cursor-pointer hover:bg-brand-hover transition-colors"
              >
                INSTALL BINARY
              </button>
              <a
                href="https://ravaniroshan.github.io/prricode/reference/protocol/"
                className="inline-flex w-fit items-center justify-center rounded-xs border border-border bg-card px-3 py-1.5 font-mono text-sm text-foreground leading-normal tracking-default hover:border-brand transition-colors"
              >
                READ THE DOCS
              </a>
            </div>
          </div>

          {/* Right column: 6 Crate cards */}
          <div className="mt-8 grid flex-1 grid-cols-2 gap-3 lg:mt-0 lg:grid-cols-3">
            {PLATFORM_AGENT_CARDS.map((card) => (
              <div
                key={card.name}
                className="relative flex h-full flex-col justify-between rounded-xs specular-card-dark p-3.5 transition-colors duration-200 hover:border-brand/60"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-foreground text-xs tracking-default">
                    {card.name}
                  </span>
                  <span
                    className="size-1.5 animate-pulse-dot rounded-full bg-[var(--accent-verify)]"
                    aria-hidden="true"
                  />
                </div>

                <div className="mt-3 flex items-center gap-2">
                  {card.apps.map((slug) => (
                    <img
                      key={slug}
                      src={getAppIconDataUri(slug)}
                      alt={slug}
                      width={22}
                      height={22}
                      className="size-5.5 rounded-xs object-contain"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>

                <div className="mt-auto pt-3">
                  <p className="truncate font-mono text-[11px] leading-4 text-muted-foreground tracking-default">
                    {card.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* "What you get out of the box" */}
        <h3 className="mt-12 text-center text-h2 text-foreground md:mt-16">
          What you get out of the box
        </h3>

        <div className="mt-6 grid grid-cols-1 border-border border-t border-l md:mt-8 md:grid-cols-2 lg:grid-cols-4">
          {OUT_OF_THE_BOX_ITEMS.map((item) => (
            <div
              key={item.title}
              className="flex flex-col gap-3 border-border border-r border-b bg-card/35 p-5"
            >
              <h4 className="font-medium text-foreground text-xl leading-snug">
                {item.title}
              </h4>
              <p className="text-body-sm text-muted-foreground">
                {item.body}
              </p>
              <div className="mt-auto pt-2">
                <a
                  href={item.href}
                  className="flex w-fit items-center justify-center rounded-xs border border-border bg-white/5 px-2.5 py-1.5 transition-colors duration-200 hover:border-brand hover:text-brand-readable"
                >
                  <span className="font-mono text-xs text-foreground/80 leading-normal tracking-default">
                    READ THE DOCS →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
