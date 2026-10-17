import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SECURITY_ACCORDION_ITEMS } from '../data/composioData';
import { getHolographicSecurityDataUri } from './BrandAssets';
import { toggleAccordionIndex } from '../utils/composioLogic';

export function SecuritySection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="security"
      data-section-theme="light"
      className="flex w-full justify-center bg-background pt-16 pb-20 text-foreground lg:pt-[72px] lg:pb-[88px]"
    >
      <div className="flex w-full max-w-page flex-col items-center gap-6 px-5 lg:px-6 xl:px-0">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <span className="font-mono text-[11px] uppercase tracking-widest text-brand-readable">
            05 // DEFENSE-IN-DEPTH ISOLATION
          </span>
          <h2 className="text-balance text-center text-h1">
            Sandboxed by{' '}
            <span className="font-serif-accent text-[1.08em] text-brand-readable font-normal">
              default
            </span>
            , at every stage
          </h2>
        </motion.div>

        <div className="mt-4 flex w-full flex-col items-start gap-8 lg:flex-row lg:justify-between lg:gap-0">
          {/* Left: Multi-Layered Isometric Cryptographic Vault SVG (508 × 420) */}
          <div className="relative flex h-[300px] w-full items-center justify-center overflow-clip border border-border rounded-l-xs md:h-[350px] lg:h-[420px] lg:w-[508px] bg-card">
            <img
              src={getHolographicSecurityDataUri(1)}
              alt="prricode bubblewrap and verification layer 1"
              width={508}
              height={420}
              className="absolute inset-0 h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
            <img
              src={getHolographicSecurityDataUri(2)}
              alt="prricode bubblewrap and verification layer 2"
              width={508}
              height={420}
              className="absolute inset-0 h-full w-full object-cover opacity-75"
              referrerPolicy="no-referrer"
            />

            {/* Centered optical verification beam & specular shield emblem */}
            <div className="relative z-10 flex h-[420px] w-[240px] items-center justify-center pointer-events-none">
              <svg width="120" height="420" viewBox="0 0 120 420" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="secBeam" x1="60" y1="0" x2="60" y2="420" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#a48fff" stopOpacity="0" />
                    <stop offset="50%" stopColor="#6248c7" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#a48fff" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <rect x="0" y="0" width="120" height="420" fill="url(#secBeam)" />
              </svg>

              {/* Central specular hardware emblem */}
              <div className="absolute flex flex-col items-center gap-2 rounded-xs specular-card-light px-5 py-4">
                <svg
                  width="34"
                  height="34"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="text-brand-readable"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span className="font-mono text-[11px] font-medium text-brand-readable tracking-wider uppercase">
                  BUBBLEWRAP &amp; 0600
                </span>
              </div>
            </div>
          </div>

          {/* Right: 3-row Accordion (732 × 420) */}
          <div className="flex min-h-[320px] w-full flex-col justify-between overflow-hidden specular-card-light rounded-r-xs px-4 py-5 md:min-h-[350px] md:px-[32px] md:py-[20px] lg:h-[420px] lg:w-[732px]">
            <div className="flex flex-col">
              {SECURITY_ACCORDION_ITEMS.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={item.title} className="pt-2 first:pt-0">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex((cur) => toggleAccordionIndex(cur, idx, false))}
                      className="flex w-full items-start justify-between text-left cursor-pointer group"
                    >
                      <span className="font-sans text-lg font-medium text-foreground group-hover:text-brand-readable transition-colors">
                        {item.title}
                      </span>
                      <span className="font-mono text-base text-brand-readable ml-4">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
                        isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <div className="min-h-0 overflow-hidden">
                        <p className="mt-2 text-body-sm text-foreground/85 font-medium">
                          {item.subtitle}
                        </p>
                        <ul className="mt-2 flex flex-col gap-1.5 text-caption text-muted-foreground">
                          {item.details.map((d) => (
                            <li key={d}>· {d}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-[20px] h-px w-full bg-border" />
                  </div>
                );
              })}
            </div>

            <div className="pt-3">
              <a
                href="https://github.com/RavaniRoshan/prricode/blob/main/SECURITY.md"
                className="hidden self-start rounded-xs border border-border bg-background px-3 py-1.5 font-mono text-foreground text-xs uppercase tracking-wider lg:inline-block hover:border-brand hover:text-brand-readable transition-colors"
              >
                READ OUR SECURITY POLICY →
              </a>
              <a
                href="https://github.com/RavaniRoshan/prricode/blob/main/SECURITY.md"
                className="block w-full rounded-xs border border-border bg-background py-3 text-center font-mono text-foreground text-xs uppercase tracking-wider lg:hidden hover:border-brand transition-colors"
              >
                READ OUR SECURITY POLICY →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
