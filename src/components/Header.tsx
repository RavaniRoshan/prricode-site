import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ComposioWordmark } from './BrandAssets';
import { toggleAccordionIndex } from '../utils/composioLogic';
import { DocSectionId } from '../data/docsData';

interface HeaderProps {
  isScrolled: boolean;
  isLightHeader: boolean;
  onOpenPromoModal: () => void;
  onOpenDocs: (section?: DocSectionId) => void;
}

type DropdownKey = 'PRODUCTS' | 'SOLUTIONS' | 'RESOURCES' | null;

export function AnnouncementTopbar({
  onExploreClick,
  onOpenDocs,
}: {
  onExploreClick: () => void;
  onOpenDocs: (section?: DocSectionId) => void;
}) {
  return (
    <aside
      className="dark w-full bg-card border-b border-border text-foreground h-[36px] flex items-center justify-center px-3 relative z-50"
      aria-label="Announcement"
    >
      <div className="flex w-full max-w-page items-center justify-between gap-2.5 text-foreground overflow-hidden">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-xs bg-brand/20 border border-brand/40 px-2 py-0.5 font-mono text-[10px] leading-none tracking-wider uppercase text-brand-readable">
            <span className="size-1.5 rounded-full bg-[var(--accent-verify)] animate-pulse-dot" aria-hidden="true" />
            v0.2.2 · STDIO
          </span>
          <p className="truncate text-xs sm:text-sm leading-6 text-foreground/85">
            Concept in. Running product out: autonomous Rust agent across{' '}
            <span className="font-mono tabular-nums text-brand-readable font-medium">17</span> crates &amp;{' '}
            <span className="font-mono tabular-nums text-[var(--accent-verify)] font-medium">226+</span> verified tests.
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenDocs('overview')}
            className="hidden sm:inline-block shrink-0 font-mono text-[11px] text-muted-foreground hover:text-foreground uppercase tracking-wider cursor-pointer transition-colors"
          >
            [DIÁTAXIS DOCS]
          </button>
          <button
            type="button"
            onClick={onExploreClick}
            className="shrink-0 font-mono text-[11px] sm:text-xs text-brand-readable hover:text-foreground uppercase tracking-wider cursor-pointer transition-colors"
          >
            [DOSSIER →]
          </button>
        </div>
      </div>
    </aside>
  );
}

export function Header({
  isScrolled,
  isLightHeader,
  onOpenPromoModal,
  onOpenDocs,
}: HeaderProps) {
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAccordionIndex, setMobileAccordionIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    }
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = (key: Exclude<DropdownKey, null>) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const isLightMode = isScrolled && isLightHeader;
  const islandClass = isLightMode
    ? 'dock-island-light text-foreground'
    : 'dark dock-island-dark text-foreground';
  const navLinkTextClass = 'text-foreground/85 hover:text-foreground';
  const indexBadgeClass = 'text-brand-readable';

  const translateClass = isScrolled
    ? 'translate-y-0'
    : 'translate-y-[var(--announcement-topbar-height,36px)]';

  return (
    <header
      ref={navRef}
      data-testid="split-rail-dock"
      className={`fixed top-0 left-0 z-50 flex w-full flex-col items-center overflow-visible px-3 py-2 transition-transform duration-300 ${translateClass} md:top-3 md:left-1/2 md:w-[calc(100%-2rem)] md:max-w-page md:-translate-x-1/2 md:px-0 md:py-0`}
    >
      {/* Precision Split-Rail Dock: Three Detached Floating Islands */}
      <nav
        aria-label="Primary"
        className="flex w-full items-center justify-between gap-3 lg:grid lg:grid-cols-[1fr_auto_1fr]"
      >
        {/* ISLAND 1 (Left): Brand Wordmark + Live Rust/Stdio Telemetry Beacon */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`flex shrink-0 items-center gap-3 rounded-xs px-3.5 py-2 transition-colors duration-300 lg:justify-self-start ${islandClass}`}
        >
          <a href="/" className="inline-flex items-center shrink-0" aria-label="prricode home">
            {isLightMode ? (
              <ComposioWordmark variant="black" className="h-5 sm:h-6 w-auto" />
            ) : (
              <ComposioWordmark variant="white" className="h-5 sm:h-6 w-auto" />
            )}
          </a>
          <span
            className="hidden sm:inline-block h-3.5 w-px bg-border"
            aria-hidden="true"
          />
          <span className="hidden sm:inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider">
            <span className="size-1.5 rounded-full bg-[var(--accent-verify)] animate-pulse-dot" aria-hidden="true" />
            <span className="text-muted-foreground">RUST · EARS</span>
          </span>
        </motion.div>

        {/* ISLAND 2 (Center): Detached Segmented Command Bar */}
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          onMouseLeave={() => setHoveredItem(null)}
          className={`hidden items-center gap-1 rounded-xs px-2 py-1.5 transition-colors duration-300 lg:flex ${islandClass}`}
        >
          {/* 01 // PIPELINE */}
          <li
            className="relative"
            onMouseEnter={() => {
              setOpenDropdown('PRODUCTS');
              setHoveredItem('PRODUCTS');
            }}
            onMouseLeave={() => setOpenDropdown((prev) => (prev === 'PRODUCTS' ? null : prev))}
          >
            <button
              type="button"
              aria-expanded={openDropdown === 'PRODUCTS'}
              onClick={() => toggleDropdown('PRODUCTS')}
              className={`relative z-10 flex items-center gap-1.5 px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer ${navLinkTextClass}`}
            >
              {hoveredItem === 'PRODUCTS' && (
                <motion.span
                  layoutId="split-rail-hover"
                  className="absolute inset-0 -z-10 rounded-xs bg-brand/15 border border-brand/35"
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              )}
              <span className={`text-[10px] ${indexBadgeClass}`}>01</span>
              <span>PIPELINE</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className={`transition-transform duration-200 ${openDropdown === 'PRODUCTS' ? 'rotate-180 text-brand-readable' : ''}`}
              >
                <path d="M2 3.5L5 6.5L8 3.5" />
              </svg>
            </button>

            <AnimatePresence>
              {openDropdown === 'PRODUCTS' && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.985 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="dark absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2.5"
                >
                  <div className="w-[620px] rounded-xs border border-border bg-card text-foreground shadow-[0_24px_60px_rgba(0,0,0,0.65)] grid grid-cols-2 gap-0 overflow-hidden">
                    <div className="p-4 flex flex-col">
                      <span className="px-3 pb-2 font-mono text-[10px] uppercase tracking-widest text-brand-readable">
                        // Terminal &amp; Product Builder
                      </span>
                      <a
                        href="#doer"
                        onClick={() => setOpenDropdown(null)}
                        className="group flex flex-col gap-1 rounded-xs py-2.5 px-3 text-foreground/75 hover:text-foreground hover:bg-white/[0.04] transition-colors"
                      >
                        <span className="font-mono text-xs text-foreground group-hover:text-brand-readable transition-colors">
                          TUI COMPOSER
                        </span>
                        <span className="text-xs text-muted-foreground">
                          25 themes, /commands, @file completion, !cmd shell, and Ctrl+V image paste.
                        </span>
                      </a>
                      <a
                        href="#guarantees"
                        onClick={() => setOpenDropdown(null)}
                        className="group flex flex-col gap-1 rounded-xs py-2.5 px-3 text-foreground/75 hover:text-foreground hover:bg-white/[0.04] transition-colors"
                      >
                        <span className="font-mono text-xs text-foreground group-hover:text-brand-readable transition-colors">
                          GATED PIPELINE
                        </span>
                        <span className="text-xs text-muted-foreground">
                          /concept → /spec (EARS) → /plan → /build → /dossier → /ship → /operate.
                        </span>
                      </a>
                      <a
                        href="#platform"
                        onClick={() => setOpenDropdown(null)}
                        className="group flex flex-col gap-1 rounded-xs py-2.5 px-3 text-foreground/75 hover:text-foreground hover:bg-white/[0.04] transition-colors"
                      >
                        <span className="font-mono text-xs text-foreground group-hover:text-brand-readable transition-colors">
                          CLI &amp; 18 SUBCOMMANDS
                        </span>
                        <span className="text-xs text-muted-foreground">
                          One-shot prricode exec, auth token store, and headless CI workflows.
                        </span>
                      </a>
                    </div>
                    <div className="p-4 flex flex-col border-l border-border bg-background/60">
                      <span className="px-3 pb-2 font-mono text-[10px] uppercase tracking-widest text-[var(--accent-verify)]">
                        // Verification &amp; Protocol
                      </span>
                      <a
                        href="#security"
                        onClick={() => setOpenDropdown(null)}
                        className="group flex flex-col gap-1 rounded-xs py-2.5 px-3 text-foreground/75 hover:text-foreground hover:bg-white/[0.04] transition-colors"
                      >
                        <span className="font-mono text-xs text-foreground group-hover:text-[var(--accent-verify)] transition-colors">
                          ADVERSARIAL VERIFIER
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Context-isolated verification, EARS property tests, and acceptance dossiers.
                        </span>
                      </a>
                      <a
                        href="#platform"
                        onClick={() => setOpenDropdown(null)}
                        className="group flex flex-col gap-1 rounded-xs py-2.5 px-3 text-foreground/75 hover:text-foreground hover:bg-white/[0.04] transition-colors"
                      >
                        <span className="font-mono text-xs text-foreground group-hover:text-[var(--accent-verify)] transition-colors">
                          JSON-RPC 2.0 STDIO
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Drive sessions, turns, and pipeline stages from any editor or script.
                        </span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* 02 // SOLUTIONS */}
          <li
            className="relative"
            onMouseEnter={() => {
              setOpenDropdown('SOLUTIONS');
              setHoveredItem('SOLUTIONS');
            }}
            onMouseLeave={() => setOpenDropdown((prev) => (prev === 'SOLUTIONS' ? null : prev))}
          >
            <button
              type="button"
              aria-expanded={openDropdown === 'SOLUTIONS'}
              onClick={() => toggleDropdown('SOLUTIONS')}
              className={`relative z-10 flex items-center gap-1.5 px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer ${navLinkTextClass}`}
            >
              {hoveredItem === 'SOLUTIONS' && (
                <motion.span
                  layoutId="split-rail-hover"
                  className="absolute inset-0 -z-10 rounded-xs bg-brand/15 border border-brand/35"
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              )}
              <span className={`text-[10px] ${indexBadgeClass}`}>02</span>
              <span>SOLUTIONS</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className={`transition-transform duration-200 ${openDropdown === 'SOLUTIONS' ? 'rotate-180 text-brand-readable' : ''}`}
              >
                <path d="M2 3.5L5 6.5L8 3.5" />
              </svg>
            </button>

            <AnimatePresence>
              {openDropdown === 'SOLUTIONS' && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.985 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="dark absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2.5"
                >
                  <div className="w-[700px] rounded-xs border border-border bg-card text-foreground shadow-[0_24px_60px_rgba(0,0,0,0.65)] flex overflow-hidden">
                    <div className="w-[240px] p-4 flex flex-col">
                      <span className="px-3 pb-2 font-mono text-[10px] uppercase tracking-widest text-brand-readable">
                        // BY PROVIDER
                      </span>
                      {['OLLAMA (LOCAL)', 'KILO CODE (:FREE)', 'OPENROUTER', 'OPENAI CODEX', 'CLAUDE SONNET'].map((prov) => (
                        <a
                          key={prov}
                          href="#doer"
                          onClick={() => setOpenDropdown(null)}
                          className="rounded-xs py-2 px-3 font-mono text-xs text-foreground/75 hover:text-brand-readable hover:bg-white/[0.04] transition-colors"
                        >
                          {prov}
                        </a>
                      ))}
                    </div>
                    <div className="flex-1 p-4 border-l border-border bg-background/60 flex flex-col justify-between">
                      <div>
                        <span className="px-3 pb-2 block font-mono text-[10px] uppercase tracking-widest text-[var(--accent-verify)]">
                          // BUILT FOR ENGINEERING WORKFLOWS
                        </span>
                        <div className="grid grid-cols-2 gap-1 mt-1">
                          {[
                            'PRODUCT BUILDER',
                            'BROWNFIELD REPOS',
                            'ADVERSARIAL VERIFY',
                            'SHIP & ROLLBACK',
                            'BUSINESS & PRICING',
                            'MCP & SKILL.MD',
                          ].map((uc) => (
                            <a
                              key={uc}
                              href="#use-cases"
                              onClick={() => setOpenDropdown(null)}
                              className="rounded-xs py-2 px-3 font-mono text-xs text-foreground/75 hover:text-brand-readable hover:bg-white/[0.04] transition-colors"
                            >
                              {uc}
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="border-t border-border pt-3 mt-3 px-3">
                        <a
                          href="#use-cases"
                          onClick={() => setOpenDropdown(null)}
                          className="font-mono text-xs text-brand-readable hover:underline"
                        >
                          EXPLORE ALL WORKFLOWS →
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* 03 // RESOURCES */}
          <li
            className="relative"
            onMouseEnter={() => {
              setOpenDropdown('RESOURCES');
              setHoveredItem('RESOURCES');
            }}
            onMouseLeave={() => setOpenDropdown((prev) => (prev === 'RESOURCES' ? null : prev))}
          >
            <button
              type="button"
              aria-expanded={openDropdown === 'RESOURCES'}
              onClick={() => toggleDropdown('RESOURCES')}
              className={`relative z-10 flex items-center gap-1.5 px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer ${navLinkTextClass}`}
            >
              {hoveredItem === 'RESOURCES' && (
                <motion.span
                  layoutId="split-rail-hover"
                  className="absolute inset-0 -z-10 rounded-xs bg-brand/15 border border-brand/35"
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              )}
              <span className={`text-[10px] ${indexBadgeClass}`}>03</span>
              <span>RESOURCES</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className={`transition-transform duration-200 ${openDropdown === 'RESOURCES' ? 'rotate-180 text-brand-readable' : ''}`}
              >
                <path d="M2 3.5L5 6.5L8 3.5" />
              </svg>
            </button>

            <AnimatePresence>
              {openDropdown === 'RESOURCES' && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.985 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.985 }}
                  transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                  className="dark absolute top-full left-1/2 z-50 -translate-x-1/2 pt-2.5"
                >
                  <div className="min-w-[260px] rounded-xs border border-border bg-card text-foreground shadow-[0_24px_60px_rgba(0,0,0,0.65)] p-3 flex flex-col gap-1">
                    {[
                      { label: 'FIRST PRODUCT TUTORIAL', doc: 'tutorial' as DocSectionId },
                      { label: 'HOW-TO: TUI GUIDE', doc: 'tui-guide' as DocSectionId },
                      { label: 'JSON-RPC 2.0 REFERENCE', doc: 'protocol' as DocSectionId },
                      { label: 'EXPLANATION & PRD', doc: 'prd' as DocSectionId },
                      { label: 'SECURITY & CONFORMANCE', doc: 'security' as DocSectionId },
                    ].map((item) => (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => {
                          setOpenDropdown(null);
                          onOpenDocs(item.doc);
                        }}
                        className="rounded-xs py-2 px-3 text-left font-mono text-xs text-foreground/75 hover:text-brand-readable hover:bg-white/[0.04] transition-colors cursor-pointer"
                      >
                        {item.label}
                      </button>
                    ))}
                    <a
                      href="https://github.com/RavaniRoshan/prricode"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpenDropdown(null)}
                      className="rounded-xs py-2 px-3 font-mono text-xs text-foreground/75 hover:text-brand-readable hover:bg-white/[0.04] transition-colors"
                    >
                      GITHUB REPOSITORY →
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          {/* 04 // DOCS */}
          <li onMouseEnter={() => setHoveredItem('DOCS')}>
            <button
              type="button"
              onClick={() => onOpenDocs('overview')}
              className={`relative z-10 flex items-center gap-1.5 px-3 py-1 font-mono text-xs uppercase tracking-wider transition-colors duration-200 cursor-pointer ${navLinkTextClass}`}
            >
              {hoveredItem === 'DOCS' && (
                <motion.span
                  layoutId="split-rail-hover"
                  className="absolute inset-0 -z-10 rounded-xs bg-brand/15 border border-brand/35"
                  transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                />
              )}
              <span className={`text-[10px] ${indexBadgeClass}`}>04</span>
              <span>DOCS</span>
            </button>
          </li>
        </motion.ul>

        {/* ISLAND 3 (Right): Detached Action Dock */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className={`flex shrink-0 items-center gap-2 rounded-xs p-1.5 transition-colors duration-300 lg:justify-self-end ${islandClass}`}
        >
          <a
            href="https://github.com/RavaniRoshan/prricode"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1.5 rounded-xs border border-border px-2.5 py-1.5 font-mono text-xs uppercase tracking-wider text-foreground/85 hover:border-brand hover:text-foreground transition-colors"
          >
            <span>GITHUB</span>
          </a>
          <button
            type="button"
            onClick={onOpenPromoModal}
            className="rounded-xs bg-brand border border-white/15 px-3 py-1.5 font-mono text-xs font-medium text-white uppercase tracking-wider cursor-pointer transition-all hover:bg-brand-hover"
          >
            GET STARTED – FREE
          </button>
          <button
            type="button"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="flex size-8 flex-col items-center justify-center gap-[5px] lg:hidden cursor-pointer"
          >
            <span
              className={`h-[2px] w-5 bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-[2px] w-5 bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </motion.div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`dark w-full transition-[max-height,padding] duration-300 lg:hidden overflow-hidden rounded-xs mt-2 ${
          mobileMenuOpen ? 'max-h-[600px] pt-3 pb-4 bg-card border border-border text-foreground' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-2 pt-1 px-4">
          {[
            {
              title: '01 // PIPELINE',
              left: ['TUI COMPOSER', 'GATED PIPELINE', 'CLI & 18 SUBCOMMANDS'],
              right: ['ADVERSARIAL VERIFIER', 'JSON-RPC 2.0 STDIO'],
            },
            {
              title: '02 // SOLUTIONS',
              left: ['OLLAMA LOCAL', 'KILO CODE (:FREE)', 'OPENROUTER', 'OPENAI CODEX'],
              right: ['PRODUCT BUILDER', 'BROWNFIELD REPOS', 'SHIP & ROLLBACK', 'ALL WORKFLOWS'],
            },
            {
              title: '03 // RESOURCES',
              left: ['TUTORIAL', 'TUI GUIDE', 'PROTOCOL REF'],
              right: ['PRD & ARCH', 'LAUNCH STATUS', 'GITHUB REPO'],
            },
          ].map((group, idx) => {
            const isOpen = mobileAccordionIndex === idx;
            return (
              <li key={group.title} className="border-b border-border pb-2">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setMobileAccordionIndex((cur) => toggleAccordionIndex(cur, idx))}
                  className="flex w-full items-center justify-between py-2 font-mono text-xs text-foreground cursor-pointer"
                >
                  <span>{group.title}</span>
                  <span className="text-brand-readable">{isOpen ? '−' : '+'}</span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-200 ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="grid grid-cols-2 pt-2 pb-1">
                      <div className="flex flex-col gap-2 pr-2">
                        {group.left.map((item) => (
                          <a
                            key={item}
                            href="#doer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-mono text-xs text-muted-foreground hover:text-brand-readable"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                      <div className="flex flex-col gap-2 border-l border-border pl-3">
                        {group.right.map((item) => (
                          <a
                            key={item}
                            href="#platform"
                            onClick={() => setMobileMenuOpen(false)}
                            className="font-mono text-xs text-muted-foreground hover:text-brand-readable"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
          <li className="py-1">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDocs('overview');
              }}
              className="block w-full text-left py-1 font-mono text-xs text-foreground cursor-pointer"
            >
              04 // DOCS (DIÁTAXIS HUB)
            </button>
          </li>
        </ul>

        <div className="mt-4 grid grid-cols-2 gap-2 px-4">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPromoModal();
            }}
            className="bg-brand py-2 text-center font-mono text-xs text-white cursor-pointer"
          >
            INSTALL CLI
          </button>
          <a
            href="https://github.com/RavaniRoshan/prricode"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="border border-border py-2 text-center font-mono text-xs text-foreground"
          >
            GITHUB
          </a>
        </div>
      </div>
    </header>
  );
}
