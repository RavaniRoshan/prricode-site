import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { GUARANTEE_FEATURES } from '../data/composioData';
import { getFeatureCardBackdropDataUri, getAppIconDataUri } from './BrandAssets';
import { resolveActiveGuaranteeStep } from '../utils/composioLogic';

function FeatureUiMock({ stepNumber }: { stepNumber: string }) {
  switch (stepNumber) {
    case '01':
      return (
        <div className="w-[380px] rounded-xs specular-card-dark p-4 text-foreground">
          <div className="flex items-center justify-between border-b border-border pb-2.5">
            <span className="font-mono text-xs text-muted-foreground">PRRICODE-VERIFY · DOSSIER</span>
            <span className="font-mono text-[11px] text-brand-readable tabular-nums">3 / 3 EARS verified</span>
          </div>
          <div className="mt-3 rounded-xs border border-border bg-white/[0.03] px-3 py-2 font-mono text-xs text-foreground/90">
            Stage: Adversarial Verifier (Context Isolated)
          </div>
          <div className="mt-3 flex flex-col gap-2">
            {[
              { app: 'ears', tool: 'EARS_SPEC_GATE · Ubiquitous & Event', score: 'PASS' },
              { app: 'rust', tool: 'CARGO_CLIPPY_AND_PROPERTY_TESTS', score: 'PASS' },
              { app: 'dossier', tool: 'ACCEPTANCE_DOSSIER_EMITTED', score: '0.8s' },
            ].map((item) => (
              <div
                key={item.tool}
                className="flex items-center justify-between rounded-xs border border-border bg-black/35 px-2.5 py-2"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <img
                    src={getAppIconDataUri(item.app)}
                    alt={item.app}
                    width={18}
                    height={18}
                    className="size-4.5 rounded-xs object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <span className="truncate font-mono text-[11px] text-foreground/85">{item.tool}</span>
                </div>
                <span className="font-mono text-[10px] text-[var(--accent-verify)] tabular-nums">{item.score}</span>
              </div>
            ))}
          </div>
        </div>
      );
    case '02':
      return (
        <div className="w-[380px] rounded-xs specular-card-dark p-4 text-foreground">
          <div className="flex items-center justify-between border-b border-border pb-2.5">
            <span className="font-mono text-xs text-muted-foreground">SMALL-MODEL TOOL LOOP</span>
            <span className="font-mono text-[11px] text-[var(--accent-verify)] tabular-nums">qwen2.5-coder:3b</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xs border border-border bg-white/[0.03] p-2.5">
              <div className="font-mono text-[10px] text-muted-foreground">FENCED JSON</div>
              <div className="mt-1 font-mono text-sm text-foreground tabular-nums">Recovered</div>
            </div>
            <div className="rounded-xs border border-border bg-white/[0.03] p-2.5">
              <div className="font-mono text-[10px] text-muted-foreground">ARG REPAIR</div>
              <div className="mt-1 font-mono text-sm text-[var(--accent-verify)] tabular-nums">Auto-fixed</div>
            </div>
            <div className="rounded-xs border border-border bg-white/[0.03] p-2.5">
              <div className="font-mono text-[10px] text-muted-foreground">CORE TOOLS</div>
              <div className="mt-1 font-mono text-sm text-brand-readable tabular-nums">9 built-in</div>
            </div>
          </div>
          <div className="mt-3 rounded-xs border border-border bg-black/35 p-3 font-mono text-[11px] text-foreground/80 leading-relaxed">
            <div>✓ Repaired trailing comma in edit_file payload</div>
            <div className="mt-1 text-muted-foreground">✓ Deduplicated repeated glob call on crates/</div>
          </div>
        </div>
      );
    case '03':
      return (
        <div className="w-[380px] rounded-xs specular-card-dark p-4 text-foreground">
          <div className="flex items-center justify-between border-b border-border pb-2.5">
            <span className="font-mono text-xs text-muted-foreground">WORKSPACE SURVEY &amp; SQLITE</span>
            <span className="font-mono text-[11px] text-[var(--accent-verify)]">BROWNFIELD OK</span>
          </div>
          <div className="mt-3 flex flex-col gap-2">
            {[
              { app: 'rust', name: 'Workspace Survey', scope: '17 crates · Cargo.toml detected', state: 'Indexed' },
              { app: 'shield', name: 'Anti-Scaffold Gate', scope: 'Reject duplicate project init', state: 'Enforced' },
              { app: 'sqlite', name: 'SQLite Persistence', scope: 'Sessions · forks · compaction', state: 'Synced' },
            ].map((conn) => (
              <div
                key={conn.name}
                className="flex items-center justify-between rounded-xs border border-border bg-white/[0.03] px-3 py-2.5"
              >
                <div className="flex items-center gap-2.5">
                  <img
                    src={getAppIconDataUri(conn.app)}
                    alt={conn.name}
                    width={20}
                    height={20}
                    className="size-5 rounded-xs object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <div className="font-sans text-xs font-medium text-foreground">{conn.name}</div>
                    <div className="font-mono text-[10px] text-muted-foreground">{conn.scope}</div>
                  </div>
                </div>
                <span className="rounded-xs bg-[var(--accent-verify)]/15 border border-[var(--accent-verify)]/35 px-2 py-0.5 font-mono text-[10px] text-[var(--accent-verify)]">
                  {conn.state}
                </span>
              </div>
            ))}
          </div>
        </div>
      );
    case '04':
    default:
      return (
        <div className="w-[380px] rounded-xs specular-card-dark p-4 text-foreground">
          <div className="flex items-center justify-between border-b border-border pb-2.5">
            <span className="font-mono text-xs text-muted-foreground">BUBBLEWRAP &amp; INLINE APPROVAL</span>
            <span className="font-mono text-[11px] text-brand-readable tabular-nums">y / s / a / n</span>
          </div>
          <pre className="mt-3 overflow-x-auto rounded-xs border border-border bg-black/50 p-3 font-mono text-[11px] text-foreground/85 leading-relaxed">
            <code>{`$ prricode
> [sandbox] bubblewrap worktree mounted
> [gate] cargo test --workspace (226 passed)
? Approve /deploy to production? [y/s/a/n]: y
✓ Deployed with redacted 0600 credentials`}</code>
          </pre>
        </div>
      );
  }
}

export function GuaranteesSection() {
  const [activeStep, setActiveStep] = useState(0);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const handleScroll = () => {
      const bounds = cardRefs.current.map((el) => {
        if (!el) return { top: 0, bottom: 0 };
        const rect = el.getBoundingClientRect();
        return {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
        };
      });
      const nextStep = resolveActiveGuaranteeStep(window.scrollY, window.innerHeight, bounds);
      setActiveStep(nextStep);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectStep = (index: number) => {
    setActiveStep(index);
    const target = cardRefs.current[index];
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section id="guarantees" data-section-theme="dark" className="dark bg-background text-foreground">
      <div className="mx-auto w-full max-w-page px-4 pt-10 pb-10 md:px-6 md:pt-[86px] md:pb-[72px] lg:px-6 xl:px-0">
        {/* Section header (§6.2) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-7 py-4 text-center sm:py-0 lg:gap-8"
        >
          <div className="flex flex-col items-center gap-4 lg:gap-5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-brand-readable">
              02 // ARCHITECTURAL GUARANTEES
            </span>
            <h2 className="text-balance text-h1 text-foreground">
              Everything between /concept and a running binary,{' '}
              <span className="font-serif-accent text-[1.08em] text-brand-readable font-normal">
                gated
              </span>
            </h2>
            <p className="max-w-[860px] text-balance text-body-lg text-muted-foreground">
              Bring a rough idea. prricode interviews you for requirements, synthesizes EARS
              specifications, builds in an isolated bubblewrap worktree, and proves every task.
            </p>
          </div>
        </motion.div>

        {/* Body */}
        <div className="mt-8 flex flex-col gap-4 sm:mt-10 md:mt-[79px] lg:flex-row lg:gap-[30px] xl:gap-[58px]">
          {/* Pills, 640–1023px */}
          <div className="hidden gap-2 overflow-x-auto pb-1 sm:flex lg:hidden">
            {GUARANTEE_FEATURES.map((feat, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  key={feat.number}
                  type="button"
                  onClick={() => handleSelectStep(idx)}
                  className={`flex shrink-0 items-center gap-2 border px-3 py-2 cursor-pointer transition-colors rounded-xs ${
                    isActive ? 'border-brand bg-card' : 'border-border bg-background'
                  }`}
                >
                  <span
                    className={`flex size-[20px] items-center justify-center rounded-xs font-mono text-xs tabular-nums ${
                      isActive ? 'bg-brand text-white' : 'bg-background text-muted-foreground'
                    }`}
                  >
                    {feat.number}
                  </span>
                  <span className="font-mono text-foreground text-xs whitespace-nowrap">
                    {feat.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Desktop sticky rail, ≥1024px */}
          <div className="hidden lg:block lg:w-[226px] lg:shrink-0">
            <div className="lg:sticky lg:top-28">
              <div className="relative">
                <div className="absolute inset-0 hidden border border-border lg:block pointer-events-none rounded-xs" />
                <div className="relative flex overflow-x-auto lg:flex-col">
                  {GUARANTEE_FEATURES.map((feat, idx) => {
                    const isActive = activeStep === idx;
                    return (
                      <button
                        key={feat.number}
                        type="button"
                        onClick={() => handleSelectStep(idx)}
                        className={`flex min-w-[160px] shrink-0 items-center gap-[14px] border p-[10px] text-left transition-all duration-300 lg:w-full lg:min-w-0 cursor-pointer ${
                          isActive ? 'border-brand bg-card' : 'border-border bg-transparent hover:bg-white/[0.03]'
                        }`}
                      >
                        <span
                          className={`flex size-[23px] shrink-0 items-center justify-center rounded-xs p-0.5 font-mono text-sm tabular-nums ${
                            isActive ? 'bg-brand text-white' : 'bg-background text-muted-foreground'
                          }`}
                        >
                          {feat.number}
                        </span>
                        <span className="font-mono text-xs text-foreground tracking-default truncate">
                          {feat.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Four feature cards stacked with multi-layered isometric SVG illustrations */}
          <div className="flex-1 flex flex-col gap-6">
            {GUARANTEE_FEATURES.map((feat, idx) => (
              <div
                key={feat.number}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="lg:sticky lg:top-28"
              >
                <div className="dark flex flex-col rounded-xs specular-card-dark lg:min-h-[440px] lg:flex-row lg:items-start lg:gap-[24px] lg:py-0 lg:pr-[30px] lg:pl-0 xl:gap-[30px] overflow-hidden">
                  {/* Visual column (580 × 440 at xl) */}
                  <div className="relative flex h-[240px] w-full items-center justify-center overflow-hidden sm:h-[280px] md:h-[320px] lg:h-[440px] lg:w-[55%] lg:shrink-0 lg:self-stretch xl:w-[580px] border-b lg:border-b-0 lg:border-r border-border">
                    <img
                      src={getFeatureCardBackdropDataUri(feat.number)}
                      alt={feat.title}
                      width={580}
                      height={440}
                      className="absolute inset-0 h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="relative z-10 scale-[0.65] sm:scale-[0.75] md:scale-[0.85] lg:scale-100">
                      <FeatureUiMock stepNumber={feat.number} />
                    </div>
                  </div>

                  {/* Copy column */}
                  <div className="flex w-full min-w-0 flex-1 flex-col px-4 pt-4 pb-5 sm:px-5 lg:px-0 lg:pt-[30px] lg:pb-[30px]">
                    <div className="flex flex-col gap-3">
                      <div className="flex size-7 items-center justify-center rounded-xs bg-brand/20 border border-brand/35 font-mono text-brand-readable text-sm tabular-nums">
                        {feat.number}
                      </div>
                      <h3 className="text-[22px] text-foreground leading-snug sm:text-[26px] lg:text-[28px] font-medium">
                        {feat.title}
                      </h3>
                    </div>

                    <p className="mt-3 text-[13px] text-muted-foreground leading-normal sm:text-sm sm:leading-snug lg:mt-4">
                      {feat.body}
                    </p>

                    <div className="relative mt-5 flex flex-col gap-4 sm:mt-6 lg:mt-10 pl-4">
                      <div
                        className="absolute top-0 bottom-0 left-0 w-[2px] rounded-full bg-brand/60"
                        aria-hidden="true"
                      />
                      {feat.bullets.map((bullet) => (
                        <div key={bullet} className="text-xs sm:text-sm text-foreground/85 leading-snug">
                          {bullet}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
