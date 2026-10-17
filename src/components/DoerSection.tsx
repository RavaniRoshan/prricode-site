import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { STORY_SCENARIOS } from '../data/composioData';
import { getNextScenarioIndex } from '../utils/composioLogic';
import { ClientGlyph, getAppIconDataUri } from './BrandAssets';

const TOOL_CHIPS = [
  { label: 'Ollama (Local 3B+)', client: 'Ollama' },
  { label: 'Kilo Code (:free)', client: 'Kilo Code' },
  { label: 'OpenRouter', client: 'OpenRouter' },
  { label: 'OpenAI Codex', client: 'OpenAI' },
  { label: 'Claude Sonnet', client: 'Claude' },
  { label: 'MCP Stdio', client: 'MCP Stdio' },
  { label: 'Rust Workspace', client: 'Rust' },
];

export function DoerSection() {
  const [activeScenarioIdx, setActiveScenarioIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedModel, setSelectedModel] = useState<
    'qwen2.5-coder:3b' | 'lfm-2.5-2.6b:free' | 'claude-sonnet-4.6'
  >('qwen2.5-coder:3b');
  const [modelMenuOpen, setModelMenuOpen] = useState(false);
  const sceneCanvasRef = useRef<HTMLCanvasElement | null>(null);

  const scenario = STORY_SCENARIOS[activeScenarioIdx] || STORY_SCENARIOS[0];

  useEffect(() => {
    if (!isPlaying) return;
    const timer = window.setInterval(() => {
      setActiveScenarioIdx((cur) => getNextScenarioIndex(cur, STORY_SCENARIOS.length));
    }, 6500);
    return () => window.clearInterval(timer);
  }, [isPlaying]);

  useEffect(() => {
    const canvas = sceneCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    ctx.strokeStyle = 'rgba(98, 72, 199, 0.28)';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);

    ctx.beginPath();
    ctx.moveTo(20, h * 0.5);
    ctx.bezierCurveTo(w * 0.25, h * 0.28, w * 0.35, h * 0.72, w * 0.5, h * 0.5);
    ctx.bezierCurveTo(w * 0.65, h * 0.28, w * 0.75, h * 0.72, w - 20, h * 0.5);
    ctx.stroke();

    ctx.setLineDash([]);
    ctx.fillStyle = 'rgba(98, 72, 199, 0.5)';
    [w * 0.18, w * 0.5, w * 0.82].forEach((cx) => {
      ctx.beginPath();
      ctx.arc(cx, h * 0.5, 4, 0, Math.PI * 2);
      ctx.fill();
    });
  }, [activeScenarioIdx]);

  return (
    <section
      id="doer"
      data-section-theme="light"
      className="flex w-full justify-center bg-background pt-16 pb-20 text-foreground lg:pb-24"
    >
      <div className="flex w-full max-w-page flex-col gap-12 px-5 lg:gap-16 lg:px-6 xl:px-0">
        {/* Section header (§6.1) */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-7 text-center lg:gap-8"
        >
          <div className="flex flex-col items-center gap-4 lg:gap-5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-brand-readable">
              01 // END-TO-END GATED PIPELINE
            </span>
            <h2 className="text-balance text-h1">
              prricode turns a rough concept into{' '}
              <span className="font-serif-accent text-[1.08em] text-brand-readable font-normal">
                verified
              </span>{' '}
              software
            </h2>
            <p className="max-w-prose text-balance text-body-lg text-muted-foreground">
              prricode sits in your terminal and carries the whole job end to end — from EARS
              specification to an audited acceptance dossier.
            </p>
          </div>
        </motion.div>

        {/* Body */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {/* Story-outcome scenario player */}
          <figure className="story-outcome_figure">
            <div className="story-outcome_playback">
              <div className="story-outcome_exampleControls">
                <button
                  type="button"
                  aria-label={isPlaying ? 'Pause scenario playback' : 'Play scenario playback'}
                  onClick={() => setIsPlaying((p) => !p)}
                  className="story-outcome_playbackToggle"
                >
                  {isPlaying ? (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                      <rect x="2.5" y="2" width="2.5" height="8" rx="0.5" />
                      <rect x="7" y="2" width="2.5" height="8" rx="0.5" />
                    </svg>
                  ) : (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
                      <path d="M3 2L10 6L3 10V2Z" />
                    </svg>
                  )}
                </button>

                <div className="story-outcome_pillScroller" role="tablist" aria-label="Scenario examples">
                  {STORY_SCENARIOS.map((item, idx) => {
                    const active = idx === activeScenarioIdx;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        role="tab"
                        aria-selected={active}
                        data-active={active ? 'true' : 'false'}
                        onClick={() => {
                          setActiveScenarioIdx(idx);
                          setIsPlaying(false);
                        }}
                        className="story-outcome_pill"
                      >
                        <img
                          src={getAppIconDataUri(item.sourceIcon)}
                          alt={item.sourceApp}
                          width={16}
                          height={16}
                          className="size-4 rounded-xs object-contain"
                          referrerPolicy="no-referrer"
                        />
                        <span>{item.label}</span>
                        <img
                          src={getAppIconDataUri(item.targetIcon)}
                          alt={item.targetApp}
                          width={16}
                          height={16}
                          className="size-4 rounded-xs object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="story-outcome_exampleNote">
                Full autonomy where a machine-checkable oracle exists. Human approval at deploy, spend, and publish.
              </p>

              <div className="story-outcome_exampleTransition">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={scenario.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="story-outcome_scene"
                  >
                    <canvas
                      ref={sceneCanvasRef}
                      width={480}
                      height={352}
                      data-testid="story-canvas"
                      aria-hidden="true"
                      className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:block"
                    />

                    {/* Col 1: Source Input / Stage */}
                    <div className="relative z-10 flex flex-col justify-between specular-card-light p-4 rounded-xs min-h-[340px]">
                      <div>
                        <div className="flex items-center justify-between border-b border-border pb-3">
                          <div className="flex items-center gap-2">
                            <img
                              src={getAppIconDataUri(scenario.sourceIcon)}
                              alt={scenario.sourceApp}
                              width={20}
                              height={20}
                              className="size-5 rounded-xs object-contain"
                              referrerPolicy="no-referrer"
                            />
                            <span className="font-sans text-sm font-medium text-foreground">
                              {scenario.sourceApp}
                            </span>
                          </div>
                          <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                            STAGE IN
                          </span>
                        </div>

                        <p className="mt-2.5 font-mono text-[11px] text-muted-foreground">
                          {scenario.sourceSubtitle}
                        </p>

                        <div className="mt-3 flex flex-col gap-2">
                          {scenario.sourceMetrics.map((m) => (
                            <div
                              key={m.label}
                              className="flex items-center justify-between border border-border bg-background/60 px-3 py-2 rounded-xs"
                            >
                              <div className="min-w-0">
                                <p className="truncate font-sans text-xs font-medium text-foreground">
                                  {m.label}
                                </p>
                                <p className="font-mono text-[11px] text-muted-foreground tabular-nums">
                                  {m.value}
                                </p>
                              </div>
                              <span className="shrink-0 font-mono text-[11px] text-brand-readable font-medium tabular-nums">
                                {m.delta}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-4 border-t border-border pt-3 animate-prompt-send">
                        <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                          TUI COMPOSER INPUT
                        </span>
                        <p className="mt-1 font-mono text-xs text-foreground leading-snug">
                          “{scenario.userPrompt}”
                        </p>
                      </div>
                    </div>

                    {/* Col 2: prricode Agent Loop Panel */}
                    <div className="dark relative z-10 flex flex-col justify-between specular-card-dark text-foreground p-5 rounded-xs min-h-[356px]">
                      <div>
                        <div className="flex items-center justify-between border-b border-border pb-3">
                          <div className="flex items-center gap-2">
                            <span className="size-1.5 rounded-full bg-[var(--accent-verify)] animate-pulse-dot" />
                            <span className="font-mono text-xs text-foreground/90">PRRICODE PIPELINE</span>
                          </div>
                          <div className="relative">
                            <button
                              type="button"
                              onClick={() => setModelMenuOpen((v) => !v)}
                              className="flex items-center gap-1.5 border border-border bg-white/5 px-2.5 py-1 font-mono text-xs text-foreground/85 rounded-xs cursor-pointer hover:border-brand"
                            >
                              <span>{selectedModel}</span>
                              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                                <path d="M2 3.5L5 6.5L8 3.5" />
                              </svg>
                            </button>
                            {modelMenuOpen && (
                              <div className="absolute right-0 top-full mt-1 z-20 border border-border bg-popover py-1 min-w-[165px] rounded-xs shadow-lg">
                                {(['qwen2.5-coder:3b', 'lfm-2.5-2.6b:free', 'claude-sonnet-4.6'] as const).map((m) => (
                                  <button
                                    key={m}
                                    type="button"
                                    onClick={() => {
                                      setSelectedModel(m);
                                      setModelMenuOpen(false);
                                    }}
                                    className="block w-full px-3 py-1.5 text-left font-mono text-xs text-foreground/80 hover:bg-white/10 hover:text-brand-readable cursor-pointer"
                                  >
                                    {m}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        <ol className="mt-4 flex flex-col gap-2.5">
                          {scenario.agentSteps.map((step, i) => (
                            <li
                              key={step.tool}
                              className="flex flex-col gap-1 border border-border bg-white/[0.03] px-3 py-2.5 rounded-xs"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span className="font-sans text-xs text-foreground">
                                  <span className="font-mono text-muted-foreground mr-1.5 tabular-nums">
                                    0{i + 1}
                                  </span>
                                  {step.step}
                                </span>
                                <span className="font-mono text-[10px] text-[var(--accent-verify)] shrink-0 tabular-nums">
                                  {step.status}
                                </span>
                              </div>
                              <span className="font-mono text-[10px] text-brand-readable truncate">
                                {step.tool}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="mt-4 border-t border-border pt-3">
                        <p className="font-sans text-xs text-muted-foreground leading-relaxed">
                          {scenario.agentSummary}
                        </p>
                      </div>
                    </div>

                    {/* Col 3: Verified Verdict / Dossier Output */}
                    <div className="relative z-10 flex flex-col justify-between specular-card-light p-4 rounded-xs min-h-[340px]">
                      <div>
                        <div className="flex items-center justify-between border-b border-border pb-3">
                          <div className="flex items-center gap-2">
                            <img
                              src={getAppIconDataUri(scenario.targetIcon)}
                              alt={scenario.targetApp}
                              width={20}
                              height={20}
                              className="size-5 rounded-xs object-contain"
                              referrerPolicy="no-referrer"
                            />
                            <span className="font-sans text-sm font-medium text-foreground">
                              {scenario.targetApp}
                            </span>
                          </div>
                          <span className="rounded-xs bg-[var(--accent-verify)]/10 border border-[var(--accent-verify)]/30 px-1.5 py-0.5 font-mono text-[10px] text-[var(--accent-verify)]">
                            VERIFIED
                          </span>
                        </div>

                        <p className="mt-2.5 font-mono text-[11px] text-muted-foreground truncate">
                          {scenario.targetHeader}
                        </p>

                        <div className="mt-3 overflow-x-auto border border-border rounded-xs">
                          <table className="w-full border-collapse text-left font-mono text-[11px] tabular-nums">
                            <thead>
                              <tr className="border-b border-border bg-background/80 text-muted-foreground">
                                <th className="py-1.5 px-1.5 font-normal">{scenario.targetRows[0].col1}</th>
                                <th className="py-1.5 px-1.5 font-normal">{scenario.targetRows[0].col2}</th>
                                <th className="py-1.5 px-1.5 font-normal">{scenario.targetRows[0].col3}</th>
                                <th className="py-1.5 px-1.5 font-normal">{scenario.targetRows[0].col4}</th>
                              </tr>
                            </thead>
                            <tbody>
                              {scenario.targetRows.slice(1).map((row) => (
                                <tr key={row.col1} className="border-b last:border-b-0 border-border">
                                  <td className="py-2 px-1.5 text-foreground font-medium truncate max-w-[100px]">
                                    {row.col1}
                                  </td>
                                  <td className="py-2 px-1.5 text-muted-foreground">{row.col2}</td>
                                  <td className="py-2 px-1.5 text-muted-foreground">{row.col3}</td>
                                  <td className="py-2 px-1.5 text-brand-readable font-medium">{row.col4}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-border pt-3 font-mono text-[11px] text-muted-foreground">
                        <span>3 gates verified</span>
                        <span className="tabular-nums text-[var(--accent-verify)]">0 regressions</span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </figure>

          {/* Tool-chip row with real provider logos */}
          <div className="flex flex-col items-center gap-4">
            <p className="text-center font-mono text-muted-foreground text-sm leading-normal tracking-default">
              Switch providers and models live from the TUI (/provider, /model) — no restart
            </p>
            <a
              className="group flex flex-wrap items-center justify-center gap-2"
              href="https://ravaniroshan.github.io/prricode/how-to/tui-guide/"
            >
              {TOOL_CHIPS.map((chip) => (
                <span
                  key={chip.label}
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-xs border border-border bg-card px-3 py-1.5 font-mono text-xs text-foreground leading-normal tracking-default transition-colors group-hover:border-brand/60 shadow-2xs"
                >
                  <span className="text-brand-readable">
                    <ClientGlyph client={chip.client} />
                  </span>
                  <span>{chip.label}</span>
                </span>
              ))}
              <span className="flex items-center gap-1.5 rounded-xs border border-brand bg-brand px-3 py-1.5 font-mono text-white text-xs leading-normal tracking-default">
                + custom --base-url
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
