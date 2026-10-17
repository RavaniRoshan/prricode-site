export type DocSectionId =
  | 'overview'
  | 'tutorial'
  | 'tui-guide'
  | 'protocol'
  | 'prd'
  | 'security';

export interface DocCodeBlock {
  label: string;
  language: string;
  code: string;
}

export interface DocTable {
  headers: [string, string, string];
  rows: Array<[string, string, string]>;
}

export interface DocArticleSection {
  heading: string;
  body: string;
  bullets?: string[];
  codeBlock?: DocCodeBlock;
  table?: DocTable;
}

export interface DocArticle {
  id: DocSectionId;
  category: 'DIÁTAXIS HOME' | 'TUTORIALS' | 'HOW-TO GUIDES' | 'REFERENCE' | 'EXPLANATION' | 'CONFORMANCE';
  badge: string;
  title: string;
  subtitle: string;
  readTime: string;
  externalUrl: string;
  sections: DocArticleSection[];
}

export const DOC_ARTICLES: DocArticle[] = [
  {
    id: 'overview',
    category: 'DIÁTAXIS HOME',
    badge: 'v0.2.2 · MIT',
    title: 'prricode Documentation & Quickstart',
    subtitle:
      'Concept in. Running product out — an autonomous Rust coding agent in your terminal that carries a rough idea through a gated pipeline.',
    readTime: '3 min read',
    externalUrl: 'https://ravaniroshan.github.io/prricode/',
    sections: [
      {
        heading: '1. Install the Binary or Build from Source',
        body: 'prricode ships as a single self-contained Rust binary across 5 target triples with verified SHA256SUMS, or compiles directly from the 17-crate Cargo workspace.',
        codeBlock: {
          label: 'Terminal — Install or Build Release Binary',
          language: 'bash',
          code: `# Option A: Build from the 17-crate Rust workspace
git clone https://github.com/RavaniRoshan/prricode.git
cd prricode
cargo build --release

# Option B: Verify workspace gates (226 tests + clippy -D warnings)
cargo fmt --check
cargo clippy --workspace --all-targets -- -D warnings
cargo test --workspace`,
        },
      },
      {
        heading: '2. Zero-Key & Local Model Quickstart',
        body: 'Launch bare prricode to open the interactive TUI Composer. You can run completely free hosted models via Kilo AI Gateway (:free models work anonymously with zero API key) or 100% locally via Ollama.',
        codeBlock: {
          label: 'Terminal — Launch TUI or One-Shot Exec',
          language: 'bash',
          code: `# Launch interactive TUI (25 themes, slash commands, @file completion)
prricode

# Run with local Ollama 3B+ coder model
prricode --provider ollama --model qwen2.5-coder:3b

# Run with free hosted model via Kilo AI Gateway (no API key required)
prricode --provider kilo --model liquid/lfm-2.5-2.6b:free

# Run a headless one-shot verified task
prricode exec "Add --json output flag to word-count CLI and run cargo test"`,
        },
      },
      {
        heading: '3. Diátaxis Documentation Map',
        body: 'prricode documentation is structured around the four Diátaxis quadrants so operators and external AI orchestrators can locate exact specifications immediately:',
        table: {
          headers: ['Quadrant', 'Document', 'Purpose'],
          rows: [
            ['Tutorials', 'First Product in 20 Min', 'End-to-end walkthrough from /concept to signed /dossier'],
            ['How-To Guides', 'TUI Composer & Slash Guide', 'Live provider switching, 0600 auth store, @file & !cmd'],
            ['Reference', 'JSON-RPC 2.0 & 18 CLI Cmds', 'Wire protocol over stdio and deterministic schemas'],
            ['Explanation', 'PRD, EARS & 17 Rust Crates', 'Adversarial context isolation & small-model recovery'],
          ],
        },
      },
    ],
  },
  {
    id: 'tutorial',
    category: 'TUTORIALS',
    badge: '20-MIN TUTORIAL',
    title: 'Build Your First Verified Product',
    subtitle:
      'Walk a rough concept through clarifying requirements, formal EARS specifications, wave planning, sandboxed build, and an audited Acceptance Dossier.',
    readTime: '8 min read',
    externalUrl: 'https://ravaniroshan.github.io/prricode/tutorials/first-product/',
    sections: [
      {
        heading: 'Step 1 — Start with /concept & Clarifying Interview',
        body: 'Instead of guessing requirements from an underspecified prompt, prricode interviews you for boundary conditions before synthesizing specifications.',
        codeBlock: {
          label: 'TUI Composer — /concept',
          language: 'text',
          code: `> /concept build a fast word-count CLI in Rust with UTF-8 streaming and JSON output

[prricode-pipeline] Clarifying 3 boundary questions:
  1. Should invalid UTF-8 sequences fail fast with exit code 2 or use replacement chars?
  2. Should --json emit a single summary object or NDJSON per file?
  3. Target MSRV and zero-copy buffer size?`,
        },
      },
      {
        heading: 'Step 2 — Synthesize EARS Specifications (/spec)',
        body: 'Once clarified, /spec generates formal EARS (Easy Approach to Requirements Syntax) clauses — Ubiquitous, Event-Driven, State-Driven, and Unwanted Behavior — that serve as the machine-checkable oracle.',
        codeBlock: {
          label: 'Generated EARS Specification',
          language: 'markdown',
          code: `REQ-01 [Ubiquitous]: The CLI SHALL stream UTF-8 input in 64 KiB chunks with O(1) memory.
REQ-02 [Event-Driven]: WHEN --json is passed, the CLI SHALL emit {"lines","words","bytes"}.
REQ-03 [Unwanted]: IF an I/O read error occurs, THEN the CLI SHALL exit with code 2 and stderr diagnostic.`,
        },
      },
      {
        heading: 'Step 3 — Wave Task Graph (/plan) & Sandboxed Build (/build)',
        body: 'Run /plan to decompose EARS requirements into a dependency-ordered wave graph, then /build to execute inside an isolated bubblewrap worktree while running cargo fmt, cargo clippy, and property tests.',
        bullets: [
          'Brownfield Guard: Rejects any plan that attempts to scaffold a duplicate nested Cargo project.',
          'Small-Model Loop: Automatically repairs fenced JSON and trailing comma tool arguments.',
          'Adversarial Verifier: Context-isolated verifier writes property tests against REQ-01..03 without seeing builder reasoning.',
        ],
      },
      {
        heading: 'Step 4 — Inspect the Acceptance Dossier (/dossier)',
        body: 'Run /dossier to inspect the signed verification artifact containing requirement verdicts, property test output, token cost per requirement, and residual risk.',
        codeBlock: {
          label: 'TUI Composer — /dossier Output',
          language: 'text',
          code: `ACCEPTANCE DOSSIER // v0.2.2
--------------------------------------------------------------------
Requirement          Gate             Tokens    Duration    Verdict
REQ-01 UTF-8 stream  prop_test         1,420       0.4s     PASS
REQ-02 --json flag   adversarial       1,180       0.6s     PASS
REQ-03 I/O exit 2    cargo_test          890       0.3s     PASS
--------------------------------------------------------------------
Total: 3/3 EARS requirements verified · 0 regressions · $0.00 (local)`,
        },
      },
    ],
  },
  {
    id: 'tui-guide',
    category: 'HOW-TO GUIDES',
    badge: 'TUI & SLASH CMDS',
    title: 'How-To: TUI Composer, Providers & Slash Commands',
    subtitle:
      'Drive the entire Product Builder pipeline, hot-swap model providers with zero restart, reference workspace files with @, and manage 0600 credentials.',
    readTime: '6 min read',
    externalUrl: 'https://ravaniroshan.github.io/prricode/how-to/tui-guide/',
    sections: [
      {
        heading: '1. Product Builder & Session Slash Commands',
        body: 'The TUI composer supports tab-completed slash commands for every stage of engineering, verification, release, and business analysis:',
        table: {
          headers: ['Command', 'Stage / Crate', 'Description'],
          rows: [
            ['/concept <idea>', 'prricode-pipeline', 'Start requirement interview and scope definition'],
            ['/spec', 'prricode-spec', 'Synthesize & validate formal EARS specification clauses'],
            ['/plan', 'prricode-pipeline', 'Generate dependency-ordered wave task graph'],
            ['/build', 'prricode-agent', 'Execute tasks in bubblewrap sandbox + run gate checks'],
            ['/dossier', 'prricode-verify', 'Emit Acceptance Dossier with delivery economics'],
            ['/ship & /deploy', 'prricode-ship', 'Cut 5-platform release archives & environment-only deploy'],
            ['/operate', 'prricode-ship', 'Post-deploy health checks with autonomous rollback armed'],
            ['/research & /pricing', 'prricode-business', 'Sourced market analysis & unit economics per requirement'],
            ['/provider & /model', 'prricode-providers', 'Hot-swap provider/model live without restarting session'],
            ['/approval <policy>', 'prricode-sandbox', 'Configure y (once), s (session), a (workspace), n (deny)'],
            ['/theme <name>', 'prricode-tui', 'Switch across 25 built-in terminal color themes'],
          ],
        },
      },
      {
        heading: '2. Composer Prefixes: @file, !cmd & Ctrl+V Image Paste',
        body: 'Combine natural language with direct workspace grounding inside a single composer turn:',
        bullets: [
          '@path/to/file.rs — Fuzzy-autocomplete and attach exact file slices or symbol definitions.',
          '!cargo test --workspace — Execute a shell command inline and pipe stdout/stderr into the turn.',
          'Ctrl+V — Paste clipboard screenshots or architecture diagrams directly into multimodal turns.',
        ],
      },
      {
        heading: '3. 0600 Credential Store & Provider Configuration',
        body: 'API keys are stored with strict 0600 Unix permissions via prricode auth token and are automatically redacted from all logs and dossiers.',
        codeBlock: {
          label: 'Terminal — Configure Provider Credentials',
          language: 'bash',
          code: `# Store credentials in 0600 vault (~/.config/prricode/credentials)
prricode auth token openrouter
prricode auth token ollama-cloud
prricode auth token openai

# Or switch live inside the TUI with zero restart:
/provider openrouter
/model anthropic/claude-sonnet-4.6`,
        },
      },
    ],
  },
  {
    id: 'protocol',
    category: 'REFERENCE',
    badge: 'JSON-RPC 2.0',
    title: 'JSON-RPC 2.0 Stdio Protocol & CLI Reference',
    subtitle:
      'Drive prricode deterministically from custom editors, CI pipelines, or parent orchestrators over newline-delimited JSON-RPC 2.0 on stdio.',
    readTime: '7 min read',
    externalUrl: 'https://ravaniroshan.github.io/prricode/reference/protocol/',
    sections: [
      {
        heading: '1. Three-Line Stdio Handshake & Turn Execution',
        body: 'Start the stdio server with prricode serve --provider ollama and send newline-delimited JSON-RPC 2.0 frames:',
        codeBlock: {
          label: 'JSON-RPC 2.0 over Stdio — Session & Turn Stream',
          language: 'json',
          code: `{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"clientInfo":{"name":"nvim-prricode","version":"1.0.0"}}}
{"jsonrpc":"2.0","id":2,"method":"session/start","params":{"provider":"ollama","model":"qwen2.5-coder:3b"}}
{"jsonrpc":"2.0","id":3,"method":"turn/start","params":{"input":[{"type":"text","text":"Survey workspace and fix failing compaction test"}]}}`,
        },
      },
      {
        heading: '2. Core JSON-RPC 2.0 Methods & Notifications',
        body: 'All interactive TUI capabilities map 1-to-1 to protocol methods in prricode-protocol:',
        table: {
          headers: ['Method / Event', 'Direction', 'Payload Summary'],
          rows: [
            ['initialize', 'Client → Agent', 'Negotiate protocol version, capabilities & workspace root'],
            ['session/start | resume | fork', 'Client → Agent', 'Create, resume, or branch SQLite-backed session state'],
            ['turn/start | cancel', 'Client → Agent', 'Submit text/image/file items or abort active generation'],
            ['pipeline/conceptSet', 'Client → Agent', 'Initialize Product Builder concept & clarifying questions'],
            ['pipeline/specRead | verifyRead', 'Client → Agent', 'Read EARS specification AST & Acceptance Dossier verdict'],
            ['turn/itemDelta', 'Agent → Client', 'Stream incremental assistant text, tool_use & diff chunks'],
            ['approval/requested', 'Agent → Client', 'Pause on sensitive mutation; awaits y / s / a / n decision'],
          ],
        },
      },
      {
        heading: '3. The 9 Built-In Agent Tools',
        body: 'Every tool execution is schema-validated, deduplicated, and repaired before running inside the sandboxed worktree:',
        bullets: [
          'shell — Execute command inside bubblewrap namespace isolation with configurable timeout.',
          'read_file / write_file / edit_file — Atomic filesystem operations with diff verification.',
          'glob / grep — Fast ripgrep-backed pattern and path discovery respecting .gitignore.',
          'web_fetch — Sourced HTTP retrieval with automatic HTML-to-Markdown extraction.',
          'task — Spawn context-isolated subagents for parallel wave tasks.',
          'computer — X11 and Wayland screenshot capture and synthetic keyboard/pointer input.',
        ],
      },
    ],
  },
  {
    id: 'prd',
    category: 'EXPLANATION',
    badge: '17 RUST CRATES',
    title: 'Architecture, PRD & Adversarial Verification',
    subtitle:
      'Why prricode separates builder reasoning from adversarial verification across 17 modular Rust crates and 37 typed error kinds.',
    readTime: '9 min read',
    externalUrl: 'https://ravaniroshan.github.io/prricode/explanation/prd/',
    sections: [
      {
        heading: '1. Why Structural Context Isolation Matters',
        body: 'When the same LLM session both writes code and writes tests, it inherits its own blind spots and rationalizes edge-case failures. In prricode, prricode-verify runs in a separate context window that receives ONLY the EARS specification and the worktree filesystem — never the builder prompt or chain-of-thought.',
        bullets: [
          'EARS Oracle First: Property tests are derived strictly from Ubiquitous, Event-Driven, and Unwanted clauses.',
          'Zero-Vibe Gate: A task cannot transition to complete unless fmt, clippy -D warnings, unit tests, and adversarial property checks all return 0.',
          'Honest Degradation: 37 typed error variants ensure missing dependencies or sandbox faults are reported explicitly.',
        ],
      },
      {
        heading: '2. Small-Model Tool Loop Resilience (3B+ Ready)',
        body: 'Local 3B–7B models frequently wrap JSON tool calls in markdown fences, emit trailing commas, or repeat identical glob calls. prricode-agent intercepts and repairs malformed tool payloads deterministically before dispatch.',
      },
      {
        heading: '3. The 17-Crate Cargo Workspace',
        body: 'Each subsystem is isolated in its own Rust crate with strict dependency boundaries:',
        table: {
          headers: ['Crate', 'Responsibility', 'Key Guarantees'],
          rows: [
            ['prricode-core / protocol', 'Types, 37 error kinds & JSON-RPC 2.0 wire schema', 'Zero unsafe · serde strict'],
            ['prricode-cli / tui', '18 CLI subcommands & 25-theme terminal UI composer', 'Full keyboard & mouse nav'],
            ['prricode-agent', '9-tool execution loop, fenced-JSON repair & retry', '3B+ small-model resilient'],
            ['prricode-pipeline / spec', 'Brownfield workspace survey & EARS grammar engine', 'Anti-scaffold hard gate'],
            ['prricode-verify', 'Context-isolated adversarial verifier & /dossier', 'Independent oracle check'],
            ['prricode-sandbox', 'Bubblewrap worktree isolation & y/s/a/n approvals', 'Deny-on-timeout safety'],
            ['prricode-persistence', 'SQLite WAL session memory, fork & compaction', 'ACID turn history'],
            ['prricode-providers / mcp', 'Ollama, Kilo, OpenRouter, OpenAI & MCP stdio client', 'Live hot-swap'],
            ['prricode-skills / voice / computer-use', 'SKILL.md bundles, STT/TTS & X11/Wayland automation', 'Modular capability gates'],
            ['prricode-ship / business', '5-platform release archives, rollback & /research', 'SHA256SUMS + sourced claims'],
          ],
        },
      },
    ],
  },
  {
    id: 'security',
    category: 'CONFORMANCE',
    badge: 'SECURITY & STATUS',
    title: 'Security Policy & v0.2.2 Launch Conformance',
    subtitle:
      'Defense-in-depth bubblewrap sandboxing, 0600 credential isolation, inline operator approval policies, and 226 passing workspace tests.',
    readTime: '5 min read',
    externalUrl: 'https://github.com/RavaniRoshan/prricode/blob/main/SECURITY.md',
    sections: [
      {
        heading: '1. Defense-in-Depth Sandbox & Credential Model',
        body: 'prricode treats every shell command, network request, and deployment mutation as untrusted until verified by workspace policy:',
        bullets: [
          'Bubblewrap Isolation: Commands execute inside unshared user/mount namespaces bound to a disposable git worktree.',
          '0600 Credential Vault: Provider tokens stored via prricode auth token are chmod 0600 and scrubbed from stdout, stderr, SQLite logs, and acceptance dossiers.',
          'Inline y / s / a / n Gates: Irreversible actions (deploy, spend, publish, destructive git ops) pause inline; unattended timeouts always default to deny (n).',
        ],
      },
      {
        heading: '2. v0.2.2 Launch Status & Conformance Matrix',
        body: 'Every release binary is built from a clean workspace passing all formatting, lint, and test gates:',
        table: {
          headers: ['Verification Gate', 'Command', 'Status'],
          rows: [
            ['Workspace Formatting', 'cargo fmt --all -- --check', 'PASS (17 / 17 crates)'],
            ['Strict Clippy Lints', 'cargo clippy --workspace --all-targets -- -D warnings', 'PASS (0 warnings)'],
            ['Unit & Integration Suite', 'cargo test --workspace', 'PASS (226 / 226 tests)'],
            ['Release Artifacts', '5 Platform Archives + SHA256SUMS', 'PUBLISHED (v0.2.2)'],
          ],
        },
      },
    ],
  },
];

export function resolveDocSlugFromUrl(href: string): DocSectionId | null {
  const lower = href.toLowerCase();
  if (lower.includes('tutorials/first-product') || lower.includes('#docs/tutorial')) {
    return 'tutorial';
  }
  if (lower.includes('how-to/tui-guide') || lower.includes('#docs/tui-guide')) {
    return 'tui-guide';
  }
  if (lower.includes('reference/protocol') || lower.includes('#docs/protocol')) {
    return 'protocol';
  }
  if (lower.includes('explanation/prd') || lower.includes('#docs/prd')) {
    return 'prd';
  }
  if (
    lower.includes('security.md') ||
    lower.includes('explanation/launch-status') ||
    lower.includes('#docs/security')
  ) {
    return 'security';
  }
  if (lower.includes('ravaniroshan.github.io/prricode') || lower.startsWith('#docs')) {
    return 'overview';
  }
  return null;
}
