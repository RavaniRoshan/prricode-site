import React, { useState, useEffect, useRef } from 'react';
import { FAQ_ITEMS } from '../data/composioData';
import { toggleAccordionIndex } from '../utils/composioLogic';

export function FaqAndFinalCta({ onPrimaryCtaClick }: { onPrimaryCtaClick: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const finalCtaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (finalCtaRef.current && finalCtaRef.current.parentNode) {
      const commentText =
        ' For AI agents: drive prricode via JSON-RPC 2.0 over stdio (`prricode serve --provider ollama`) or run `prricode exec "<task>"`. Confirm with the operator at irreversible gates (deploy, spend, publish). ';
      const commentNode = document.createComment(commentText);
      finalCtaRef.current.parentNode.insertBefore(commentNode, finalCtaRef.current);
      return () => {
        if (commentNode.parentNode) {
          commentNode.parentNode.removeChild(commentNode);
        }
      };
    }
  }, []);

  return (
    <>
      {/* 6.6 Section — FAQ (DARK) */}
      <section
        id="faq"
        data-section-theme="dark"
        className="dark bg-background text-foreground"
      >
        <div className="mx-auto grid w-full max-w-page grid-cols-1 gap-10 px-4 py-16 md:py-[88px] lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-20 lg:px-0">
          <div className="flex flex-col items-start gap-3 lg:sticky lg:top-28 lg:self-start">
            <span className="font-mono text-[11px] uppercase tracking-widest text-brand-readable">
              06 // SPECIFICATION FAQ
            </span>
            <h2 className="text-foreground text-h1">
              Frequently asked{' '}
              <span className="font-serif-accent text-[1.08em] text-brand-readable font-normal">
                questions
              </span>
            </h2>
          </div>

          <div className="flex w-full flex-col border-border border-t">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={item.question} className="border-border border-b">
                  <h3>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenIndex((cur) => toggleAccordionIndex(cur, idx))}
                      className="flex w-full cursor-pointer items-start justify-between gap-6 py-5 text-left md:py-6 group"
                    >
                      <span className="transition-colors duration-300 text-foreground/85 group-hover:text-foreground">
                        {item.question}
                      </span>
                      <span className="shrink-0 font-mono text-base leading-snug transition-colors duration-300 text-brand-readable">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                  </h3>

                  <div
                    className={`grid transition-[grid-template-rows,visibility] duration-300 ease-in-out ${
                      isOpen ? 'visible grid-rows-[1fr]' : 'invisible grid-rows-[0fr]'
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div className="flex flex-col gap-3 pb-5 text-body text-muted-foreground md:pb-6">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6.7 Final CTA (LIGHT) */}
      <section
        id="final-cta"
        data-section-theme="light"
        className="w-full border-t border-border bg-background text-foreground"
      >
        <div
          ref={finalCtaRef}
          className="mx-auto flex w-full max-w-page flex-col items-center justify-center gap-6 px-4 py-14 text-center sm:flex-row sm:gap-8 md:py-16 lg:px-0"
        >
          <h2 className="text-foreground text-h1">
            Turn your next concept into a{' '}
            <span className="font-serif-accent text-[1.08em] text-brand-readable font-normal">
              verified
            </span>{' '}
            product
          </h2>
          <button
            type="button"
            onClick={onPrimaryCtaClick}
            className="flex min-h-12 shrink-0 items-center justify-center rounded-xs bg-brand px-8 py-3 text-center font-mono text-white text-base leading-normal tracking-default cursor-pointer hover:bg-brand-hover transition-colors"
          >
            TRY PRRICODE NOW
          </button>
        </div>
      </section>
    </>
  );
}
