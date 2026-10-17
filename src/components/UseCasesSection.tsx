import React from 'react';
import { motion } from 'motion/react';
import { USE_CASE_CARDS } from '../data/composioData';
import { getAppIconDataUri } from './BrandAssets';

export function UseCasesSection({ onPrimaryCtaClick }: { onPrimaryCtaClick: () => void }) {
  return (
    <section
      id="use-cases"
      data-section-theme="light"
      className="flex w-full justify-center bg-background py-14 text-foreground lg:py-20"
    >
      <div className="flex w-full max-w-page flex-col gap-10 px-5 lg:gap-14 lg:px-6 xl:px-0">
        {/* Section header (§6.3) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-7 text-center lg:gap-8"
        >
          <div className="flex flex-col items-center gap-4 lg:gap-5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-brand-readable">
              03 // WORKSPACE WORKFLOWS
            </span>
            <h2 className="text-balance text-h1">
              prricode{' '}
              <span className="font-serif-accent text-[1.08em] text-brand-readable font-normal">
                verifies
              </span>{' '}
              every stage across{' '}
              <span className="font-mono tabular-nums">
                226<span className="text-muted-foreground">+</span>
              </span>{' '}
              workspace gates
            </h2>
            <p className="max-w-prose text-balance text-body-lg text-muted-foreground">
              Explore commands and workflows you can drive directly from the TUI composer or over stdio.
            </p>
          </div>
        </motion.div>

        {/* 6-card grid */}
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {USE_CASE_CARDS.map((card, idx) => (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-4 rounded-xs specular-card-light p-5 transition-colors hover:border-brand/50"
              >
                <a
                  className="group flex items-center justify-between gap-3"
                  href={card.href}
                >
                  <h3 className="text-foreground text-h2 group-hover:text-brand-readable transition-colors">
                    {card.title}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-muted-foreground transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-brand-readable"
                  >
                    →
                  </span>
                </a>

                <ul className="flex flex-col gap-2">
                  {card.prompts.map((prompt) => (
                    <li
                      key={prompt}
                      className="rounded-xs border border-border bg-background/70 px-3 py-2 text-body-sm text-foreground"
                    >
                      {prompt}
                    </li>
                  ))}
                </ul>

                <ul className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1.5 pt-1">
                  {card.apps.map((app) => (
                    <li
                      key={app.name}
                      className="flex items-center gap-1.5 whitespace-nowrap text-muted-foreground text-mono-xs"
                    >
                      <img
                        src={getAppIconDataUri(app.slug)}
                        alt={app.name}
                        width={20}
                        height={20}
                        className="size-5 shrink-0 rounded-xs object-contain"
                        referrerPolicy="no-referrer"
                      />
                      <span>{app.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>

          <p className="text-center font-mono text-caption text-muted-foreground">
            TUI slash commands, @file references, and !cmd workspace shell examples.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={onPrimaryCtaClick}
            className="inline-flex min-h-11 w-fit items-center justify-center rounded-xs bg-brand px-6 font-mono text-white text-sm leading-normal tracking-default cursor-pointer hover:bg-brand-hover transition-colors"
          >
            LAUNCH THE TUI
          </button>
          <a
            href="https://ravaniroshan.github.io/prricode/tutorials/first-product/"
            className="inline-flex min-h-11 w-fit items-center justify-center rounded-xs border border-border bg-card px-6 font-mono text-foreground text-sm leading-normal tracking-default hover:border-brand transition-colors"
          >
            20-MIN TUTORIAL
          </a>
        </div>
      </div>
    </section>
  );
}
