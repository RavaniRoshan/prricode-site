export interface CustomerLogo {
  id: string;
  name: string;
  width: number;
  height: number;
  href: string;
}

export const CUSTOMER_LOGOS: CustomerLogo[] = [
  { id: 'rust', name: 'Rust', width: 84, height: 28, href: 'https://github.com/RavaniRoshan/prricode' },
  { id: 'ollama', name: 'Ollama', width: 108, height: 26, href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
  { id: 'openrouter', name: 'OpenRouter', width: 132, height: 27, href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
  { id: 'kilo', name: 'Kilo Code', width: 118, height: 27, href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
  { id: 'claude', name: 'Claude', width: 102, height: 26, href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
  { id: 'openai', name: 'OpenAI Codex', width: 138, height: 26, href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
  { id: 'mcp', name: 'MCP Stdio', width: 120, height: 25, href: 'https://ravaniroshan.github.io/prricode/reference/protocol/' },
  { id: 'sqlite', name: 'SQLite', width: 98, height: 26, href: 'https://github.com/RavaniRoshan/prricode' },
  { id: 'bubblewrap', name: 'Bubblewrap', width: 128, height: 25, href: 'https://github.com/RavaniRoshan/prricode' },
  { id: 'github', name: 'GitHub', width: 102, height: 25, href: 'https://github.com/RavaniRoshan/prricode' },
  { id: 'wasm', name: 'WebAssembly', width: 142, height: 24, href: 'https://github.com/RavaniRoshan/prricode' },
  { id: 'docker', name: 'Docker', width: 104, height: 25, href: 'https://github.com/RavaniRoshan/prricode' },
  { id: 'ears', name: 'EARS Specs', width: 124, height: 26, href: 'https://ravaniroshan.github.io/prricode/explanation/prd/' },
  { id: 'markdown', name: 'SKILL.md', width: 114, height: 25, href: 'https://ravaniroshan.github.io/prricode/' },
];

export interface StoryScenario {
  id: string;
  label: string;
  sourceApp: string;
  sourceIcon: string;
  targetApp: string;
  targetIcon: string;
  userPrompt: string;
  sourceSubtitle: string;
  sourceMetrics: Array<{ label: string; value: string; delta: string }>;
  agentSteps: Array<{ step: string; tool: string; status: string }>;
  agentSummary: string;
  targetHeader: string;
  targetRows: Array<{ col1: string; col2: string; col3: string; col4: string }>;
}

export const STORY_SCENARIOS: StoryScenario[] = [
  {
    id: 'concept-to-cli',
    label: 'Concept to CLI',
    sourceApp: 'TUI /concept',
    sourceIcon: 'tui',
    targetApp: 'Acceptance Dossier',
    targetIcon: 'dossier',
    userPrompt: '/concept build a fast word-count CLI with UTF-8 streaming and JSON output',
    sourceSubtitle: 'prricode TUI · Clarify & EARS Spec',
    sourceMetrics: [
      { label: 'REQ-01 · UTF-8 stream reader', value: 'EARS Ubiquitous', delta: 'Verified' },
      { label: 'REQ-02 · --json flag schema', value: 'EARS Event-driven', delta: 'Verified' },
      { label: 'REQ-03 · Non-zero exit on I/O err', value: 'EARS Unwanted', delta: 'Verified' },
    ],
    agentSteps: [
      { step: 'Synthesize EARS spec & wave task graph', tool: 'pipeline/specRead · prricode-spec', status: '3 EARS reqs' },
      { step: 'Execute build in bubblewrap worktree', tool: 'write_file · shell (cargo test)', status: '14/14 pass' },
      { step: 'Run context-isolated adversarial verifier', tool: 'pipeline/verifyRead · prricode-verify', status: '0 regressions' },
    ],
    agentSummary: 'Emitted signed Acceptance Dossier with delivery economics, property test results, and zero unverified claims.',
    targetHeader: '/dossier — Delivery Economics & Verdict',
    targetRows: [
      { col1: 'Requirement', col2: 'Gate', col3: 'Tokens', col4: 'Verdict' },
      { col1: 'REQ-01 UTF-8 stream', col2: 'prop_test', col3: '1,420', col4: 'PASS' },
      { col1: 'REQ-02 --json output', col2: 'adversarial', col3: '1,180', col4: 'PASS' },
      { col1: 'REQ-03 I/O exit code', col2: 'cargo_test', col3: '890', col4: 'PASS' },
    ],
  },
  {
    id: 'brownfield-bugfix',
    label: 'Brownfield bugfix',
    sourceApp: 'Workspace Survey',
    sourceIcon: 'rust',
    targetApp: 'Verified Worktree',
    targetIcon: 'github',
    userPrompt: 'Fix the failing session compaction test in prricode-persistence without scaffolding new crates.',
    sourceSubtitle: 'Brownfield Survey · 17 crates detected',
    sourceMetrics: [
      { label: 'Stack & Layout Survey', value: 'Cargo workspace', delta: 'No duplicate init' },
      { label: 'Target Crate', value: 'prricode-persistence', delta: 'SQLite WAL' },
      { label: 'Failing Test', value: 'compact_preserves_goals', delta: 'Line 142' },
    ],
    agentSteps: [
      { step: 'Survey existing workspace & test harness', tool: 'glob · grep · read_file', status: 'Survey clean' },
      { step: 'Patch SQLite compaction query in-place', tool: 'edit_file (src/sqlite.rs)', status: '+14 −4 lines' },
      { step: 'Run fmt, clippy -D warnings & workspace tests', tool: 'shell (cargo test --workspace)', status: '226/226 pass' },
    ],
    agentSummary: 'Patched existing crate in-place, passed clippy -D warnings and all 226 workspace tests.',
    targetHeader: 'prricode-verify — Gate Runner Output',
    targetRows: [
      { col1: 'Gate', col2: 'Scope', col3: 'Duration', col4: 'Status' },
      { col1: 'cargo fmt --check', col2: 'workspace', col3: '0.2s', col4: 'CLEAN' },
      { col1: 'cargo clippy', col2: '-D warnings', col3: '1.8s', col4: 'CLEAN' },
      { col1: 'cargo test', col2: '226 tests', col3: '3.1s', col4: 'PASS' },
    ],
  },
  {
    id: 'ship-and-operate',
    label: 'Ship & rollback',
    sourceApp: '/ship & /deploy',
    sourceIcon: 'ship',
    targetApp: 'Health Monitor',
    targetIcon: 'shield',
    userPrompt: '/ship v0.2.2 release binaries with SHA256SUMS, then /operate with autonomous rollback armed.',
    sourceSubtitle: 'prricode-ship · Irreversible Gate Approval',
    sourceMetrics: [
      { label: 'Approval Gate (deploy/publish)', value: 'Policy: y (allow-once)', delta: 'Operator signed' },
      { label: 'Env Secrets Redaction', value: '0600 credential store', delta: '0 leaked logs' },
      { label: 'Release Artifacts', value: '5 platform targets', delta: 'SHA256SUMS' },
    ],
    agentSteps: [
      { step: 'Request inline operator approval for release', tool: 'approval/requested (y/s/a/n)', status: 'Approved (y)' },
      { step: 'Publish 5-platform archive + SHA256SUMS', tool: 'prricode-ship · github_release', status: 'v0.2.2 live' },
      { step: 'Verify post-deploy health & arm rollback', tool: 'prricode-ship · operate_loop', status: 'Armed · 200 OK' },
    ],
    agentSummary: 'Published v0.2.2 across 5 platforms with SHA256SUMS and armed autonomous regression rollback.',
    targetHeader: '/operate — Live Release & Health Status',
    targetRows: [
      { col1: 'Target', col2: 'Checksum', col3: 'Health', col4: 'Rollback' },
      { col1: 'x86_64-linux-gnu', col2: 'sha256:9f8a…', col3: '200 OK', col4: 'Armed' },
      { col1: 'aarch64-apple-darwin', col2: 'sha256:4c2e…', col3: '200 OK', col4: 'Armed' },
      { col1: 'x86_64-pc-windows', col2: 'sha256:7b1d…', col3: '200 OK', col4: 'Armed' },
    ],
  },
];

export interface GuaranteeFeature {
  number: string;
  label: string;
  title: string;
  body: string;
  bullets: string[];
  bgImage: string;
}

export const GUARANTEE_FEATURES: GuaranteeFeature[] = [
  {
    number: '01',
    label: 'VERIFICATION, NOT VIBES',
    title: 'Deterministic gates and an adversarial verifier',
    body: 'Each stage exits only on a machine-checkable verdict. After every build task, prricode runs deterministic gates, property tests generated from EARS requirements, and an independent adversarial verifier with structural context isolation.',
    bullets: [
      'EARS gate on specifications before a single line is built',
      'Adversarial verifier judges work the builder prompt never saw',
      'Reviewable acceptance dossier with token & gate time economics',
    ],
    bgImage: '/assets/feature-tool-calls.svg',
  },
  {
    number: '02',
    label: 'SMALL-MODEL RESILIENT',
    title: 'A 3B model on your laptop still lands its tool calls',
    body: 'Built from the ground up for small local models as well as frontier APIs. Fenced-JSON recovery, automatic argument repair, deduplication, and retry keep the 9-tool agent loop reliable even on qwen2.5-coder:3b.',
    bullets: [
      'Fenced-JSON recovery and automatic tool argument repair',
      '9 core tools: shell, read/write/edit_file, glob, grep, web_fetch, task, computer',
      'Switch /provider and /model live from the TUI with zero restart',
    ],
    bgImage: '/assets/feature-constant-evolution.svg',
  },
  {
    number: '03',
    label: 'BROWNFIELD-AWARE',
    title: 'Surveys your existing workspace before planning',
    body: 'The pipeline inspects your repository first — stack, directory layout, and existing test suites — plans tasks against the files that are already there, and rejects plans that would scaffold a second duplicate project.',
    bullets: [
      'Automatic stack, layout, and test-runner discovery',
      'Hard gate rejects plans that scaffold a parallel project',
      'SQLite persistence remembers every message, tool call, and session fork',
    ],
    bgImage: '/assets/feature-end-user-auth.svg',
  },
  {
    number: '04',
    label: 'SCOPED APPROVALS',
    title: 'Full autonomy with an oracle, human gates without one',
    body: 'Builds run inside an isolated bubblewrap sandbox worktree. Sensitive mutations pause inline with y (allow once), s (for session), a (always in workspace policy), or n (deny), with a timeout that denies rather than hangs.',
    bullets: [
      'Bubblewrap sandbox isolation for shell and tool execution',
      'Inline y / s / a / n approval prompts at deploy, spend, or publish',
      '0600 credential store — keys never touch the repository or logs',
    ],
    bgImage: '/assets/feature-dynamic-sandbox.svg',
  },
];

export interface UseCaseCard {
  title: string;
  href: string;
  prompts: string[];
  apps: Array<{ name: string; slug: string }>;
}

export const USE_CASE_CARDS: UseCaseCard[] = [
  {
    title: 'Product Builder pipeline',
    href: 'https://ravaniroshan.github.io/prricode/tutorials/first-product/',
    prompts: [
      '/concept build a markdown link checker CLI with concurrency and JSON reports',
      '/spec & /plan to generate EARS requirements and a wave task graph',
      '/build & /dossier to verify every requirement and inspect delivery economics',
    ],
    apps: [
      { name: '/concept', slug: 'tui' },
      { name: 'EARS Spec', slug: 'ears' },
      { name: '/build', slug: 'rust' },
      { name: '/dossier', slug: 'dossier' },
    ],
  },
  {
    title: 'Brownfield engineering',
    href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/',
    prompts: [
      'Survey this Cargo workspace and explain why session compaction drops metadata',
      '@crates/prricode-persistence/src/lib.rs fix the transaction rollback edge case',
      '!cargo test --workspace && !cargo clippy --workspace -- -D warnings',
    ],
    apps: [
      { name: 'read_file', slug: 'rust' },
      { name: 'edit_file', slug: 'tui' },
      { name: 'glob & grep', slug: 'github' },
      { name: 'shell', slug: 'bubblewrap' },
    ],
  },
  {
    title: 'Adversarial verification',
    href: 'https://ravaniroshan.github.io/prricode/explanation/prd/',
    prompts: [
      'Generate property tests directly from the EARS specification requirements',
      'Run the context-isolated adversarial verifier against the worktree build',
      'Export the acceptance dossier with evidence, residual risk, and token cost',
    ],
    apps: [
      { name: 'prricode-verify', slug: 'shield' },
      { name: 'EARS Gate', slug: 'ears' },
      { name: 'Dossier', slug: 'dossier' },
    ],
  },
  {
    title: 'Release, deploy & operate',
    href: 'https://github.com/RavaniRoshan/prricode/releases/latest',
    prompts: [
      '/ship cut a GitHub release with 5 platform tarballs and SHA256SUMS',
      '/deploy arrange deployment with environment-only redacted secrets',
      '/operate monitor health checks and arm autonomous rollback on regression',
    ],
    apps: [
      { name: '/ship', slug: 'ship' },
      { name: '/deploy', slug: 'github' },
      { name: '/operate', slug: 'shield' },
    ],
  },
  {
    title: 'Business & market layer',
    href: 'https://ravaniroshan.github.io/prricode/explanation/prd/',
    prompts: [
      '/research analyze developer CLI competitors with every claim sourced or marked',
      '/pricing model usage tiers and unit economics per verified requirement',
      '/landing generate a launch plan grounded in verified product capabilities',
    ],
    apps: [
      { name: '/research', slug: 'web' },
      { name: '/pricing', slug: 'dossier' },
      { name: '/landing', slug: 'tui' },
    ],
  },
  {
    title: 'Skills, MCP & computer use',
    href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/',
    prompts: [
      'Load SKILL.md capability bundles or connect an external MCP server over stdio',
      'Drive X11 or Wayland desktop screenshots and input via prricode-computer-use',
      'Paste clipboard images with Ctrl+V or enable HTTP/local STT & TTS voice plumbing',
    ],
    apps: [
      { name: 'SKILL.md', slug: 'skills' },
      { name: 'MCP Stdio', slug: 'mcp' },
      { name: 'X11/Wayland', slug: 'computer' },
      { name: 'Voice', slug: 'voice' },
    ],
  },
];

export interface PlatformAgentCard {
  name: string;
  status: string;
  apps: string[];
}

export const PLATFORM_AGENT_CARDS: PlatformAgentCard[] = [
  { name: 'prricode-agent', status: '9 tools · JSON repair active', apps: ['rust', 'tui', 'bubblewrap'] },
  { name: 'prricode-verify', status: 'Dossier verified · 0 regressions', apps: ['shield', 'ears', 'dossier'] },
  { name: 'prricode-sandbox', status: 'Bubblewrap isolated worktree', apps: ['bubblewrap', 'rust'] },
  { name: 'prricode-persistence', status: 'SQLite sessions & fork ready', apps: ['sqlite', 'rust'] },
  { name: 'prricode-tui', status: '25 themes · /concept active', apps: ['tui', 'skills', 'voice'] },
  { name: 'prricode-ship', status: 'Release & rollback armed', apps: ['ship', 'github', 'shield'] },
];

export interface OutOfTheBoxItem {
  title: string;
  body: string;
  href: string;
}

export const OUT_OF_THE_BOX_ITEMS: OutOfTheBoxItem[] = [
  {
    title: '0600 Credential Store',
    body: 'Store tokens with prricode auth token <provider> or env vars. Keys live in a 0600 store — never in the repo, never in logs.',
    href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/',
  },
  {
    title: 'SQLite Session Memory',
    body: 'Every message, tool call, and result is persisted in SQLite. Resume, fork, and compact sessions across runs without losing context.',
    href: 'https://ravaniroshan.github.io/prricode/reference/protocol/',
  },
  {
    title: 'Honest Degradation',
    body: '37 typed error kinds across 17 Rust crates. When a capability cannot run, prricode tells you why — never a fake success.',
    href: 'https://ravaniroshan.github.io/prricode/explanation/launch-status/',
  },
  {
    title: 'Provider & Model Agnostic',
    body: 'Switch /provider and /model live from the TUI: Ollama local, Ollama Cloud, OpenRouter, Kilo (:free), OpenAI, or any custom URL.',
    href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/',
  },
];

export interface SecurityAccordionItem {
  title: string;
  subtitle: string;
  details: string[];
}

export const SECURITY_ACCORDION_ITEMS: SecurityAccordionItem[] = [
  {
    title: 'Inline approval engine',
    subtitle: 'Granular y / s / a / n human gates at irreversible moments',
    details: [
      'Pause sensitive tool calls inline: allow once (y), for session (s), always in workspace (a), or deny (n)',
      'Workspace approvals persist as explicit policy amendments you can inspect and revoke',
      'Deterministic approval timeouts default to deny rather than hanging unattended pipelines',
    ],
  },
  {
    title: 'Bubblewrap sandbox & 0600 auth',
    subtitle: 'Isolated worktree execution and zero-leak credential storage',
    details: [
      'prricode-sandbox executes shell commands inside bubblewrap isolation and disposable worktrees',
      'Credentials are stored with 0600 file permissions via prricode auth token <provider>',
      'Environment-only deployment secrets with automatic log redaction across all 17 crates',
    ],
  },
  {
    title: 'Adversarial context isolation',
    subtitle: 'Independent verification separated from builder context bias',
    details: [
      'Structural context isolation ensures the adversarial verifier never sees the builder’s internal reasoning',
      'Property tests are synthesized directly from EARS requirements rather than implementation code',
      'Autonomous rollback in prricode-ship reverts deployments automatically on post-release health regressions',
    ],
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is prricode and how is it different from other coding agents?',
    answer:
      'prricode is an autonomous AI coding agent that lives in your terminal. Instead of stopping at a code diff you have to eyeball, prricode carries a rough concept through a gated pipeline — conversation → EARS specification → plan → build → adversarial verification → delivery → operation — and hands you a machine-verified acceptance dossier.',
  },
  {
    question: 'Which model providers does prricode work with?',
    answer:
      'Ollama (local /api surface with tools), Ollama Cloud (OLLAMA_API_KEY), OpenRouter (OPENROUTER_API_KEY), Kilo AI Gateway (KILO_API_KEY — :free models work anonymously with no key), OpenAI (OPENAI_API_KEY), Echo (offline deterministic test mode), and any custom OpenAI-compatible endpoint via --base-url. You can switch /provider and /model live inside the TUI without restarting.',
  },
  {
    question: 'Can I really run prricode with a 3B model on my laptop or for free?',
    answer:
      'Yes. The agent loop in prricode-agent includes fenced-JSON recovery, automatic argument repair, deduplication, and retry specifically so small models like qwen2.5-coder:3b on Ollama or liquid/lfm-2.5-2.6b:free on Kilo AI Gateway reliably land their tool calls.',
  },
  {
    question: 'What is the Acceptance Dossier?',
    answer:
      'Instead of asking you to trust a raw git diff, prricode-verify produces a structured acceptance dossier recording what changed, which EARS requirements were verified and how, property test and gate outputs, delivery economics (tokens and gate time per verified requirement), residual risk, and anything not tested.',
  },
  {
    question: 'How does prricode handle existing brownfield repositories?',
    answer:
      'Before planning, prricode-pipeline surveys your existing workspace (language stack, file layout, and test harness), plans tasks strictly against the files already present, and enforces a hard gate that rejects any plan attempting to scaffold a duplicate project.',
  },
  {
    question: 'Do I need to write configuration files or memorize CLI flags?',
    answer:
      'No. Run bare prricode and the terminal UI is the complete interface — sessions, providers, models, 25 themes, approvals, and the Product Builder pipeline (/concept, /spec, /plan, /build, /ship, /deploy, /operate, /dossier) are all slash commands. Config files and environment variables exist only as optional equivalents for CI.',
  },
  {
    question: 'How do approvals and sandboxing work?',
    answer:
      'Builds execute inside an isolated bubblewrap sandbox and disposable worktree. Irreversible or sensitive actions pause inline in the TUI with four choices: y (allow once), s (allow for session), a (always allow in this workspace as a persisted policy amendment), or n (deny), with a timeout that safely denies.',
  },
  {
    question: 'Can I drive prricode from my own editor, script, or CI pipeline?',
    answer:
      'Yes. Run prricode serve --provider ollama (or use prricode exec for one-shot commands). prricode exposes a stable JSON-RPC 2.0 protocol over stdio with methods like initialize, session/start, turn/start, and pipeline/conceptSet, streaming back turn/item deltas and tool_use notifications.',
  },
  {
    question: 'What tools and extensibility does the agent have?',
    answer:
      'Nine built-in tools (shell, read_file, write_file, edit_file, glob, grep, web_fetch, task for subagents, and computer for X11/Wayland screen + input), plus SKILL.md capability bundles, an MCP stdio client, Ctrl+V clipboard image paste, and HTTP/local STT & TTS voice plumbing.',
  },
  {
    question: 'How do I install prricode?',
    answer:
      'Download a prebuilt release binary (published for five platforms with SHA256SUMS on GitHub Releases) or build from source with git clone https://github.com/RavaniRoshan/prricode.git && cargo build --release.',
  },
  {
    question: 'What license is prricode released under?',
    answer:
      'prricode is open source under the MIT License, with 17 Rust crates, 226 passing workspace tests, cargo fmt --check clean, and cargo clippy clean at -D warnings.',
  },
];

export interface FooterColumn {
  heading: string;
  links: Array<{ label: string; href: string; badge?: string }>;
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'PIPELINE',
    links: [
      { label: 'TUI COMPOSER', href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/', badge: 'TUI' },
      { label: 'PRODUCT BUILDER', href: 'https://ravaniroshan.github.io/prricode/tutorials/first-product/' },
      { label: 'EARS SPECIFICATIONS', href: 'https://ravaniroshan.github.io/prricode/explanation/prd/' },
      { label: 'ADVERSARIAL VERIFIER', href: 'https://ravaniroshan.github.io/prricode/explanation/prd/' },
      { label: 'ACCEPTANCE DOSSIER', href: 'https://ravaniroshan.github.io/prricode/tutorials/first-product/' },
      { label: 'SHIP & OPERATE', href: 'https://github.com/RavaniRoshan/prricode/releases/latest' },
    ],
  },
  {
    heading: 'DOCS (DIÁTAXIS)',
    links: [
      { label: 'DOCUMENTATION HOME', href: 'https://ravaniroshan.github.io/prricode/' },
      { label: 'FIRST PRODUCT TUTORIAL', href: 'https://ravaniroshan.github.io/prricode/tutorials/first-product/' },
      { label: 'HOW-TO: TUI GUIDE', href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
      { label: 'JSON-RPC 2.0 REFERENCE', href: 'https://ravaniroshan.github.io/prricode/reference/protocol/' },
      { label: 'EXPLANATION & PRD', href: 'https://ravaniroshan.github.io/prricode/explanation/prd/' },
      { label: 'LAUNCH STATUS', href: 'https://ravaniroshan.github.io/prricode/explanation/launch-status/' },
    ],
  },
  {
    heading: 'SLASH COMMANDS',
    links: [
      { label: '/CONCEPT & /SPEC', href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
      { label: '/PLAN & /BUILD', href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
      { label: '/SHIP & /DEPLOY', href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
      { label: '/OPERATE & /DOSSIER', href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
      { label: '/RESEARCH & /PRICING', href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
      { label: '/MODEL & /PROVIDER', href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
      { label: '/APPROVAL & /THEME', href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
    ],
  },
  {
    heading: 'PROVIDERS',
    links: [
      { label: 'OLLAMA (LOCAL)', href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
      { label: 'OLLAMA CLOUD', href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
      { label: 'OPENROUTER', href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
      { label: 'KILO AI GATEWAY', href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
      { label: 'OPENAI & CUSTOM', href: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/' },
    ],
  },
  {
    heading: 'CRATES',
    links: [
      { label: 'PRRICODE-CORE & CLI', href: 'https://github.com/RavaniRoshan/prricode/tree/main/crates' },
      { label: 'PRRICODE-AGENT & TUI', href: 'https://github.com/RavaniRoshan/prricode/tree/main/crates' },
      { label: 'PRRICODE-VERIFY & SPEC', href: 'https://github.com/RavaniRoshan/prricode/tree/main/crates' },
      { label: 'PRRICODE-SANDBOX & MCP', href: 'https://github.com/RavaniRoshan/prricode/tree/main/crates' },
    ],
  },
  {
    heading: 'PROJECT',
    links: [
      { label: 'GITHUB REPOSITORY', href: 'https://github.com/RavaniRoshan/prricode' },
      { label: 'RELEASES (v0.2.2)', href: 'https://github.com/RavaniRoshan/prricode/releases/latest' },
      { label: 'CONTRIBUTING.MD', href: 'https://github.com/RavaniRoshan/prricode/blob/main/CONTRIBUTING.md' },
      { label: 'SECURITY.MD', href: 'https://github.com/RavaniRoshan/prricode/blob/main/SECURITY.md' },
      { label: 'MIT LICENSE', href: 'https://github.com/RavaniRoshan/prricode/blob/main/LICENSE' },
    ],
  },
];
