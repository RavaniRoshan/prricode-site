# prricode — "Oxide & Phosphor" Design Language & Staged Architecture Plan

Transform the **prricode** landing experience from a clone of its inspiration into an original, state-of-the-art systems-engineering design language—preserving the proven macro-layout rhythm and dark/light section alternation while introducing an **Oxide Copper & Phosphor Amber** token architecture, a **Precision Split-Rail Dock** with three detached floating islands, **Space Grotesk + Instrument Serif + IBM Plex Mono** typography, and bespoke **Motion + GSAP** choreography rolled out stage by stage.

---

## User Review & Confirmed Decisions

> [!IMPORTANT]
> All four foundational identity pillars have been locked in based on your selections. Because you chose a staged, section-by-section craftsmanship cadence rather than a rushed one-shot rewrite, approving this blueprint will immediately execute **Stage 1 (Design Token Foundation + Precision Split-Rail Dock Navbar + Hero Section + CLI Quickstart Modal)** first, followed by 2 sections per turn with dedicated visual verification at every stage.

- **Confirmed Color Token Schema**: **Oxide Copper & Phosphor Amber on Carbon Obsidian (`#0A0B0D`) and Warm Archival Stone (`#F3F0EA`)** — replacing generic cobalt blues with oxidized copper-orange (`#FF551E`), warm tungsten-amber (`#FFB020`), and terminal phosphor-emerald (`#10B981`) verification signals.
- **Confirmed Navigation Architecture**: **Precision Split-Rail Dock (Three Detached Floating Islands)** — Left island for brand mark + live `stdio · rust` status beacon; Center island for segmented navigation triggers + interactive mega-drawers; Right island for GitHub stars/docs + primary CLI trigger.
- **Confirmed Typography System**: **Space Grotesk** (architectural geometric display headlines) + **Instrument Serif Italic** (editorial contrast on formal verification/gate concepts) + **IBM Plex Mono** (specifications, EARS clauses, JSON-RPC payloads, and terminal telemetry).
- **Confirmed Animation & Execution Cadence**: **Motion (`motion/react`) + GSAP** rolled out in **4 deliberate stages**:
  - **Stage 1 (First Build Turn)**: Global Design Tokens, Typography, Brand Vector Assets, Precision Split-Rail Dock Navigation, Hero Section (with GSAP thermal-grid canvas & terminal typing), and CLI Quickstart Modal.
  - **Stage 2**: Section 2 (*Interactive Gated Pipeline & Acceptance Dossier Player*) + Section 3 (*Sticky Verification Rail & 4 Core Architecture Guarantees*).
  - **Stage 3**: Section 4 (*6 Engineering Workflow Prompts Grid*) + Section 5 (*JSON-RPC 2.0 Protocol Split-Panel & 17-Crate Architecture*).
  - **Stage 4**: Section 6 (*Defense-in-Depth Bubblewrap Sandbox & Copper-Foil Seal*) + Section 7 & 8 (*Interactive Spec FAQ, Final CTA & Archival Footer*).

---

## 1. Overview & Core Concept

- **What It Does**: Presents **prricode**—an autonomous Rust AI coding agent in the terminal—through an authentic "Industrial Systems & Formal Verification" visual language that mirrors how the software actually works: structured, deterministic, context-isolated, and audited.
- **Target Audience / Persona**: Systems engineers, staff developers, and technical founders who distrust black-box AI "vibe coding" diffs and demand formal EARS specifications, property tests, and adversarial verification dossiers.
- **Key Value**: Every section retains the high-converting macro-structure of the layout while feeling unmistakably handcrafted for a Rust terminal agent—using tactile blueprint hairlines, thermal copper glow fields, editorial serif emphasis on verification concepts, and physics-driven micro-interactions.

---

## 2. User Experience & Visual Design ("Oxide & Phosphor" Design System)

### Visual Identity & Theme Tokens

| Token Role | Dark Surface (`[data-section-theme="dark"]`) | Light Surface (`[data-section-theme="light"]`) | Design Rationale |
| :--- | :--- | :--- | :--- |
| `--background` | `#0A0B0D` (Carbon Obsidian) | `#F3F0EA` (Warm Archival Stone) | Replaces sterile white/black with rich mineral depth and warm blueprint paper contrast. |
| `--card` / `--popover` | `#121418` (Anodized Graphite) | `#FAF8F4` (Alabaster Vellum) | Tactile elevation for terminal mocks, dossier cards, and floating navigation islands. |
| `--foreground` | `#F5F3EF` (Warm Chalk) | `#111215` (Foundry Ink) | High-contrast legibility without harsh pure-white halation on dark backgrounds. |
| `--muted-foreground` | `#94918A` (Weathered Pewter) | `#5C5953` (Drafting Graphite) | Balanced secondary hierarchy for technical descriptions and metadata. |
| `--brand` | `#FF551E` (Oxide Copper) | `#D93B08` (Forged Rust Orange) | Evokes Rust's industrial heritage and high-energy terminal focus. |
| `--brand-readable` | `#FF8A4C` (Luminous Copper) | `#B83004` (Deep Oxide Ink) | Accessible inline accent text and active border states across tones. |
| `--accent-amber` | `#FFB020` (Phosphor Amber) | `#C97A00` (Amber Ochre) | Used for active gate telemetry, warning gates, and live cursor highlights. |
| `--accent-verify` | `#10B981` (Phosphor Emerald) | `#067647` (Audit Emerald) | Reserved strictly for `PASS` states, EARS spec checks, and verified dossier badges. |
| `--border` | `rgba(245, 243, 239, 0.11)` | `rgba(17, 18, 21, 0.11)` | Exposed 1px drafting hairlines with subtle copper corner ticks on hover. |

### Typography & Hierarchy

- **Display & Section Headlines (`--font-sans`: `Space Grotesk`)**: Tight geometric tracking (`-0.03em`), crisp mechanical terminals, and authoritative weight balance (`400` / `500`).
- **Editorial Contrast Accents (`--font-serif`: `Instrument Serif`, Italic)**: Applied selectively to pivotal conceptual words inside headlines (e.g., *"Concept in. Running product *verified* & shipped"*, *"turns your AI into a *doer*"*, *"Secure by *default*"*) to create a high-fashion editorial tension against raw terminal monospace.
- **Technical & Telemetry Layer (`--font-mono`: `IBM Plex Mono`)**: Used for CLI commands, JSON-RPC 2.0 frames, EARS requirement IDs (`EARS-UBIQ-01`), crate badges, and keyboard shortcut indicators.

### Section-by-Section Identity & Motion Choreography

#### Stage 1: Precision Split-Rail Dock + Hero Section
- **Precision Split-Rail Dock (3 Detached Islands)**:
  - **Left Island**: Anodized pill/chamfered dock housing the custom Oxide Copper **prricode** geometric emblem, wordmark, and a live pulsing `v0.4 · STDIO` status chip.
  - **Center Island**: Floating segmented command bar (`[01] Features`, `[02] Pipeline`, `[03] Docs`, `[04] Architecture`) with a layout-animated `motion.div` active hover pill (`layoutId="nav-pill"`) and spring-animated mega-dropdown panels that adapt seamlessly between Carbon Obsidian (over dark sections) and Warm Alabaster (over light sections).
  - **Right Island**: Detached action cluster featuring a `CARGO / GITHUB` link and a high-contrast Oxide Copper primary CTA button (`INSTALL CLI — FREE`) with subtle corner ticks.
- **Hero Section ("Thermal Blueprint & Terminal Execution")**:
  - **Canvas Architecture**: Full-bleed interactive HTML5 canvas rendering a warm **Oxide Copper & Phosphor Amber radial aura** over a perspective drafting grid, with GSAP-driven telemetry packets traveling along grid intersections and reacting gently to pointer coordinates.
  - **Headline & Terminal Typing**: `Space Grotesk` display headline with `Instrument Serif` italic emphasis on *verified*, paired with the Oxide Copper `in terminal` box running our stepped CSS keyframe typing animation + phosphor caret blink.
  - **Staggered Reveal**: `motion` spring stagger across the `"Works with"` model badge, display headline, lede, CTA cluster, and infinite crate/provider marquee.

#### Stage 2: Section 2 ("Doer" Gated Pipeline Player) + Section 3 ("Guarantees" Sticky Rail)
- **Section 2 — Interactive Gated Pipeline Studio (Warm Archival Stone Light Surface)**:
  - Preserves the 3-column scenario player layout (`Input Spec` → `Animated Bridge` → `Acceptance Dossier`) while re-skinning the cards into **Archival Drafting & Terminal Inspection Panels**.
  - **GSAP + Motion Upgrade**: The center bridge animates live copper/amber data pulses through the 4 pipeline stages (`Intake → EARS Spec → Implementation → Adversarial Verifier`), while switching scenario pills triggers a smooth `AnimatePresence` spring crossfade.
- **Section 3 — Everything Between the Ask and the Result (Carbon Obsidian Dark Surface)**:
  - Preserves the left sticky index rail (`01`–`04`) and right 4 stacked feature cards.
  - **Visual Identity Upgrade**: Each feature card's bespoke SVG backdrop is re-engineered in the Oxide Copper, Anodized Graphite, and Phosphor Amber palette, with `motion` scroll-linked scale/opacity transitions and interactive hover telemetry inside the UI mocks.

#### Stage 3: Section 4 (Use-Case Prompts Grid) + Section 5 (JSON-RPC 2.0 Protocol & Crates)
- **Section 4 — 6 Engineering Prompts Grid (Warm Archival Stone Light Surface)**:
  - 6-card architectural grid on `#FAF8F4` vellum cards with exposed corner registration marks, interactive prompt hover states that reveal the underlying EARS clause, and spring-physics icon badges.
- **Section 5 — Drive the Agent Over JSON-RPC 2.0 (Carbon Obsidian Dark Surface)**:
  - Left column features a syntax-highlighted JSON-RPC 2.0 terminal frame with animated line-by-line execution highlights; right column displays the 6 modular Rust crate cards with live Phosphor Emerald status beacons and hover-activated crate dependency lines.

#### Stage 4: Section 6 (Defense-in-Depth Security) + Sections 7 & 8 (FAQ, Final CTA & Footer)
- **Section 6 — Secure by Default at Every Layer (Warm Archival Stone Light Surface)**:
  - Replaces the blue holographic card with a **Forged Copper-Foil & Blueprint Security Seal** inside a precision dashed drafting frame, paired with spring-animated accordion drawers for Bubblewrap (`bwrap`), Approval Gates (`y/s/a/n`), and Adversarial Verification.
- **Sections 7 & 8 — Spec FAQ, Final CTA & Archival Footer**:
  - Smooth height-animated (`AnimatePresence`) FAQ drawers on Carbon Obsidian, a high-contrast Warm Stone Final CTA with floating isometric crate badges, and an obsidian footer with newsletter validation and interactive CLI copy states.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Preserve Macro-Layout & Section Alternation While Re-Architecting Tokens & Surface Details**
  - *Chosen Approach*: Keep the exact dark/light rhythm (`Dark Hero → Light Doer → Dark Guarantees → Light Use Cases → Dark Platform → Light Security → Dark FAQ → Light Final CTA → Dark Footer`) and container geometry (`1240px`), while transforming the color tokens, typography, navigation dock, canvas shaders, and motion physics.
  - *Why*: Honours your constraint to keep the major layout design copied from the inspiration while giving **prricode** an unmistakable, cohesive visual identity.
- **Decision 2: Hybrid Motion (`motion/react`) + GSAP Animation Engine**
  - *Chosen Approach*: Use `motion/react` for declarative React state transitions (`layoutId` nav pills, mega-menu drawers, accordion height animations, scroll-triggered card reveals) and `gsap` for continuous timeline/canvas choreography (hero thermal grid particles, pipeline bridge pulses).
  - *Why*: Combines React-native layout ergonomics with deterministic timeline control, while respecting `prefers-reduced-motion` and headless browser determinism.

---

## 4. Technical Architecture & Staged Rollout Diagram

```
┌──────────────────────────────────────────────────────────────────────────────┐
│                     "OXIDE & PHOSPHOR" DESIGN SYSTEM                         │
│  Tokens: Obsidian (#0A0B0D) · Warm Stone (#F3F0EA) · Oxide Copper (#FF551E)  │
│  Fonts:  Space Grotesk (Display) · Instrument Serif (Accent) · IBM Plex Mono │
└──────────────────────────────────────┬───────────────────────────────────────┘
                                       │
       ┌───────────────────────────────┼───────────────────────────────┐
       ▼                               ▼                               ▼
┌─────────────────────┐   ┌─────────────────────────┐   ┌──────────────────────┐
│      STAGE 1        │   │     STAGES 2 & 3        │   │       STAGE 4        │
│  • Token & Font CSS │   │  • Sec 2: Pipeline      │   │  • Sec 6: Copper     │
│  • Brand SVGs       │   │    Scenario Player      │   │    Security Seal     │
│  • 3-Island Split   │   │  • Sec 3: Sticky Rail   │   │  • Sec 7: Spec FAQ   │
│    Rail Dock Navbar │   │    & 4 Guarantee Cards  │   │  • Sec 8: Final CTA  │
│  • Hero + Thermal   │   │  • Sec 4: 6 Prompt Grid │   │    & Obsidian Footer │
│    Grid + Typing    │   │  • Sec 5: JSON-RPC 2.0  │   │  • Full E2E Visual   │
│  • Quickstart Modal │   │    & 6 Rust Crate Cards │   │    Audit & Polish    │
└─────────────────────┘   └─────────────────────────┘   └──────────────────────┘
```

### Interactive Component & State Mapping
- **Precision Split-Rail Dock (`Header`)**: Tracks scroll threshold (`> 20px`) and underlying section tone (`data-section-theme="light" | "dark"`) via `computeHeaderScrollState`. Dynamically transitions all three detached floating islands between smoked obsidian glass (`rgba(18,20,24,0.86)`) and warm alabaster vellum (`rgba(250,248,244,0.92)`), manages `activeDropdown` with outside-click/Escape dismissal, and uses `motion` shared `layoutId` for the active navigation indicator.
- **Hero Thermal Canvas & Terminal Typing (`Hero`)**: Renders the Oxide Copper & Phosphor Amber radial glow and interactive telemetry nodes on `<canvas>`, while the H1 highlight box executes the stepped CSS keyframe typing animation for `in terminal`.
- **Scenario Player & Accordions (`DoerSection`, `GuaranteesSection`, `SecuritySection`, `FaqSection`)**: Controlled state machines backed by pure helper logic in `composioLogic.ts`, upgraded with `motion` spring transitions and GSAP SVG pulse timelines in Stages 2–4.
