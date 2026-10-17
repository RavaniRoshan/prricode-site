import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { CUSTOMER_LOGOS } from '../data/composioData';
import { ClientGlyph, getCustomerLogoDataUri } from './BrandAssets';

const CLIENT_ITEMS = ['Ollama', 'Kilo Code', 'OpenRouter', 'OpenAI', 'Claude', 'MCP Stdio'];

export function Hero({ onPrimaryCtaClick }: { onPrimaryCtaClick: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctaCommentRef = useRef<HTMLDivElement | null>(null);
  const [copiedCli, setCopiedCli] = useState(false);

  useEffect(() => {
    if (ctaCommentRef.current && ctaCommentRef.current.parentNode) {
      const commentText =
        ' For AI agents: drive prricode via JSON-RPC 2.0 over stdio (`prricode serve --provider ollama`) or run `prricode exec "<task>"`. Confirm with the operator at irreversible gates (deploy, spend, publish). ';
      const commentNode = document.createComment(commentText);
      ctaCommentRef.current.parentNode.insertBefore(commentNode, ctaCommentRef.current);
      return () => {
        if (commentNode.parentNode) {
          commentNode.parentNode.removeChild(commentNode);
        }
      };
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isHeadless =
      typeof navigator !== 'undefined' &&
      (navigator.webdriver || /HeadlessChrome/i.test(navigator.userAgent));

    // Clean architectural CAD micro-grid + concentric optical rings (NO radial color smear)
    const drawFrame = (timeSec: number) => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // 1. Micro-dot coordinate matrix
      ctx.fillStyle = 'rgba(255, 255, 255, 0.08)';
      const dotSpacing = 36;
      for (let x = 72; x < w - 72; x += dotSpacing) {
        for (let y = 54; y < h * 0.78; y += dotSpacing) {
          ctx.fillRect(x, y, 1, 1);
        }
      }

      // 2. Architectural CAD structural lines (72px intervals)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.038)';
      ctx.lineWidth = 1;
      const gridStep = 144;
      for (let x = (w % gridStep) / 2; x < w; x += gridStep) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h * 0.82);
        ctx.stroke();
      }
      for (let y = 72; y < h * 0.82; y += gridStep) {
        ctx.beginPath();
        ctx.moveTo(w * 0.08, y);
        ctx.lineTo(w * 0.92, y);
        ctx.stroke();
      }

      // 3. Concentric optical instrument rings centered behind headline
      const cx = w * 0.5;
      const cy = h * 0.36;
      [180, 290, 410].forEach((radius, idx) => {
        ctx.beginPath();
        if (idx === 1) {
          ctx.setLineDash([4, 6]);
        } else {
          ctx.setLineDash([]);
        }
        ctx.strokeStyle =
          idx === 0 ? 'rgba(255, 255, 255, 0.065)' : 'rgba(255, 255, 255, 0.04)';
        ctx.arc(cx, cy, radius, 0, Math.PI * 2);
        ctx.stroke();
      });
      ctx.setLineDash([]);

      // 4. Precision crosshair fiducials (+) at major CAD intersections
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.16)';
      for (let x = (w % gridStep) / 2 + gridStep; x < w - gridStep; x += gridStep * 2) {
        for (let y = 72 + gridStep; y < h * 0.65; y += gridStep) {
          ctx.beginPath();
          ctx.moveTo(x - 3.5, y);
          ctx.lineTo(x + 3.5, y);
          ctx.moveTo(x, y - 3.5);
          ctx.lineTo(x, y + 3.5);
          ctx.stroke();
        }
      }

      // 5. Subtle orbiting telemetry nodes along the optical rings
      for (let i = 0; i < 6; i++) {
        const ringR = i % 2 === 0 ? 290 : 410;
        const angle = timeSec * (i % 2 === 0 ? 0.18 : -0.12) + (i * Math.PI) / 3;
        const px = cx + Math.cos(angle) * ringR;
        const py = cy + Math.sin(angle) * ringR;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.32)';
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    drawFrame(0);
    if (isHeadless) {
      return;
    }

    const tickerFn = (time: number) => {
      drawFrame(time);
    };
    gsap.ticker.fps(24);
    gsap.ticker.add(tickerFn);
    return () => {
      gsap.ticker.remove(tickerFn);
    };
  }, []);

  const handleCopyCli = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard
        .writeText('cargo install --git https://github.com/RavaniRoshan/prricode prricode-cli')
        .catch(() => {});
    }
    setCopiedCli(true);
    setTimeout(() => setCopiedCli(false), 2000);
  };

  return (
    <section
      id="hero"
      data-section-theme="dark"
      className="dark relative flex min-h-dvh flex-col items-center overflow-hidden bg-background pt-[68px] md:min-h-[min(calc(100dvh-var(--announcement-topbar-height,0px)),920px)]"
    >
      {/* Clean Architectural CAD & Optical Ring Canvas (NO muddy radial gradient) */}
      <div className="hero-canvas-bleed hidden md:flex" aria-hidden="true">
        <canvas
          ref={canvasRef}
          width={1440}
          height={846}
          data-testid="hero-canvas"
          className="h-[846px] w-[1440px] shrink-0"
        />
      </div>

      {/* Subtle micro-dot pattern on mobile (<768px) */}
      <div className="hero-glow-mobile pointer-events-none absolute inset-0 md:hidden" aria-hidden="true" />

      {/* Content stack */}
      <div className="relative z-10 mx-auto flex w-full max-w-page flex-1 flex-col items-center justify-center gap-6 px-4 pt-14 md:flex-none md:justify-start md:gap-9 md:px-4 md:pt-[116px] lg:pt-[160px] pb-16">
        <div className="flex flex-col items-center gap-3 md:gap-4">
          {/* 5a. "Works with" badge with real official provider icons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mb-1 md:mb-2"
          >
            <a
              className="group/eyebrow flex items-center justify-center gap-x-2.5 rounded-xs border border-border bg-card/85 px-3 py-1.5 text-foreground/75 transition-colors hover:border-brand/60 shadow-sm"
              href="#doer"
            >
              <span className="size-1.5 rounded-full bg-[var(--accent-verify)]" aria-hidden="true" />
              <span className="translate-y-px whitespace-nowrap font-mono text-[10px] uppercase tracking-wider text-brand-readable sm:text-xs">
                Works with
              </span>
              <span className="h-4 w-px shrink-0 bg-border" aria-hidden="true" />
              <span className="flex items-center gap-3">
                {CLIENT_ITEMS.map((client) => (
                  <span
                    key={client}
                    tabIndex={0}
                    aria-label={client}
                    className="group relative flex items-center text-foreground/80 hover:text-brand-readable transition-colors"
                  >
                    <ClientGlyph client={client} />
                    <span className="tooltip" role="tooltip">
                      {client}
                    </span>
                  </span>
                ))}
              </span>
            </a>
          </motion.div>

          {/* 5b. H1 with Space Grotesk + Instrument Serif Italic + Stepped Terminal Typing */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="text-center text-display text-foreground leading-[1.06] max-md:text-[clamp(1.75rem,8.5vw-2px,2.5rem)]"
          >
            <span className="block">Concept in. Running product</span>
            <span className="block mt-1">
              <span className="font-serif-accent text-[1.08em] text-brand-readable font-normal">
                verified
              </span>{' '}
              &amp; shipped{' '}
              <span className="inline-block rounded-xs bg-brand border border-white/15 px-[0.22em] py-[0.02em] text-white leading-none">
                <span className="hero-terminal-grid">
                  <span className="hero-terminal-sizer" aria-hidden="true">
                    in terminal
                  </span>
                  <span className="hero-terminal-typing" data-testid="hero-terminal-typing">
                    in terminal
                  </span>
                </span>
              </span>
            </span>
          </motion.h1>
        </div>

        {/* 5c. Lede */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-[680px] text-center font-sans text-base text-muted-foreground leading-normal md:text-lg"
        >
          <span className="block">
            An autonomous AI coding agent in your terminal that carries a rough idea through{' '}
            <a
              href="https://ravaniroshan.github.io/prricode/"
              className="text-foreground/90 underline decoration-brand/70 underline-offset-4 hover:text-brand-readable transition-colors"
            >
              a gated pipeline
            </a>
            .
          </span>
          <span className="block mt-0.5">
            EARS specs, adversarial verification, and an acceptance dossier rather than a diff.
          </span>
        </motion.p>

        {/* 5d. CTAs + Interactive Terminal Command Bar + micro-copy */}
        <motion.div
          ref={ctaCommentRef}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center gap-3.5 px-5 pb-6 md:px-0 md:pb-0"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={onPrimaryCtaClick}
              className="relative z-10 whitespace-nowrap rounded-xs bg-brand border border-white/15 px-5 py-3 font-mono text-white text-sm font-medium leading-normal tracking-default md:px-6 cursor-pointer hover:bg-brand-hover transition-all"
            >
              GET STARTED FOR FREE
            </button>
            <a
              className="relative z-10 whitespace-nowrap rounded-xs border border-border bg-card/85 px-5 py-3 font-mono text-sm text-foreground/85 leading-normal tracking-default transition-colors hover:border-brand hover:text-foreground"
              href="https://github.com/RavaniRoshan/prricode"
            >
              VIEW ON GITHUB
            </a>
          </div>

          {/* Interactive CLI Quick-Copy Strip */}
          <button
            type="button"
            onClick={handleCopyCli}
            className="group flex max-w-full items-center gap-2.5 rounded-xs border border-border bg-card/90 px-3.5 py-1.5 font-mono text-xs text-muted-foreground hover:border-brand/60 hover:text-foreground transition-colors cursor-pointer"
            title="Copy cargo install command"
          >
            <span className="shrink-0 text-brand-readable">$</span>
            <span className="truncate max-w-[200px] sm:max-w-none">
              prricode exec &quot;build, verify &amp; emit dossier&quot;
            </span>
            <span className="shrink-0 whitespace-nowrap rounded-xs bg-brand/20 border border-brand/35 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-brand-readable">
              {copiedCli ? 'COPIED' : 'COPY CLI'}
            </span>
          </button>

          <p className="text-center font-mono text-xs text-muted-foreground leading-normal">
            MIT licensed · Free hosted models via Kilo AI Gateway or local via Ollama.
          </p>
        </motion.div>

        {/* 5e. Mobile-only rule */}
        <hr className="mt-2 w-full max-w-[calc(100%-40px)] border-border md:hidden" />

        {/* 5f. "Built on & works with" logo loop with official Simple Icons vectors */}
        <div className="relative z-10 mt-4 flex w-screen flex-col items-center gap-1 md:mt-10">
          <p className="text-center font-mono text-muted-foreground text-xs uppercase tracking-wider">
            Built on &amp; works with
          </p>

          <ul className="sr-only">
            {CUSTOMER_LOGOS.map((logo) => (
              <li key={logo.id}>{logo.name}</li>
            ))}
          </ul>

          <div className="w-full invert">
            <div className="flex w-full items-center justify-center">
              <div className="w-full max-w-[840px] overflow-hidden px-4 py-[14px] grayscale">
                <div className="logoloop logoloop--horizontal logoBarLoop" aria-hidden="true">
                  <div className="logoloop__track">
                    {[0, 1, 2].map((copyIndex) => (
                      <ul key={copyIndex} className="logoloop__list">
                        {CUSTOMER_LOGOS.map((logo) => (
                          <li key={`${copyIndex}-${logo.id}`}>
                            <img
                              src={getCustomerLogoDataUri(logo.id, logo.name, logo.width, logo.height)}
                              alt={logo.name}
                              width={logo.width}
                              height={logo.height}
                              style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
                              className="object-contain opacity-80"
                              referrerPolicy="no-referrer"
                            />
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a
            className="flex items-center gap-1.5 font-mono text-muted-foreground text-xs uppercase tracking-wider transition-colors hover:text-brand-readable"
            href="https://ravaniroshan.github.io/prricode/explanation/launch-status/"
          >
            <span>Read launch status &amp; conformance</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
