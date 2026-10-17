import React from 'react';
import {
  siRust,
  siOllama,
  siOpenrouter,
  siAnthropic,
  siClaude,
  siModelcontextprotocol,
  siGithub,
  siSqlite,
  siLinux,
  siWebassembly,
  siMarkdown,
  siGnubash,
  siDocker,
} from 'simple-icons';

// Official OpenAI / Codex Blossom SVG path (24x24 viewBox)
const OPENAI_PATH =
  'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-2.9999l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3975.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z';

// Official Kilo Code geometric K-mark path (24x24 viewBox)
const KILOCODE_PATH =
  'M4 3h3.6v7.4L14.8 3H19l-7.3 7.6L19.5 21h-4.3l-5.8-7.9-1.8 1.8V21H4V3zm14.2 0H21v4.2h-2.8V3z';

export function ComposioWordmark({
  variant,
  className = 'h-6 w-auto',
}: {
  variant: 'white' | 'black';
  className?: string;
}) {
  const fill = variant === 'white' ? '#e6e6f7' : '#1d1d33';
  const accent = variant === 'white' ? '#a48fff' : '#6248c7';
  const sub = variant === 'white' ? 'rgba(164,143,255,0.18)' : 'rgba(98,72,199,0.12)';
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="134" height="24" viewBox="0 0 134 24" fill="none">
    <rect x="1.5" y="2.5" width="19" height="19" rx="4" fill="${sub}" stroke="${fill}" stroke-width="1.5"/>
    <path d="M6.5 8.5L10 12L6.5 15.5" stroke="${accent}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="11.5" y1="15.5" x2="15.5" y2="15.5" stroke="${fill}" stroke-width="1.8" stroke-linecap="round"/>
    <text x="27" y="17.2" fill="${fill}" font-family="Space Grotesk, system-ui, sans-serif" font-size="17.5" font-weight="600" letter-spacing="-0.035em">prricode</text>
  </svg>`;
  const src = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  return (
    <img
      src={src}
      alt="prricode"
      width={134}
      height={24}
      className={className}
      referrerPolicy="no-referrer"
    />
  );
}

export function ClientGlyph({ client }: { client: string }) {
  switch (client) {
    case 'Ollama':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={siOllama.path} />
        </svg>
      );
    case 'Kilo Gateway':
    case 'Kilo Code':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={KILOCODE_PATH} />
        </svg>
      );
    case 'OpenRouter':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={siOpenrouter.path} />
        </svg>
      );
    case 'OpenAI':
    case 'Codex':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={OPENAI_PATH} />
        </svg>
      );
    case 'Claude':
    case 'Anthropic':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={siClaude.path} />
        </svg>
      );
    case 'MCP Stdio':
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={siModelcontextprotocol.path} />
        </svg>
      );
    case '3B+ Local Models':
    case 'Rust':
    default:
      return (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={siRust.path} />
        </svg>
      );
  }
}

function resolveSimpleIconPath(id: string): string {
  const key = id.toLowerCase();
  if (key.includes('rust') || key === 'tokio' || key === 'serde' || key === 'clap') return siRust.path;
  if (key.includes('ollama')) return siOllama.path;
  if (key.includes('openrouter')) return siOpenrouter.path;
  if (key.includes('kilo')) return KILOCODE_PATH;
  if (key.includes('openai') || key.includes('codex')) return OPENAI_PATH;
  if (key.includes('claude') || key.includes('anthropic')) return siClaude.path;
  if (key.includes('mcp')) return siModelcontextprotocol.path;
  if (key.includes('sqlite') || key.includes('rusqlite')) return siSqlite.path;
  if (key.includes('github')) return siGithub.path;
  if (key.includes('bubblewrap') || key.includes('linux')) return siLinux.path;
  if (key.includes('wasm') || key.includes('webassembly')) return siWebassembly.path;
  if (key.includes('markdown') || key.includes('diataxis') || key.includes('skills') || key.includes('ears'))
    return siMarkdown.path;
  if (key.includes('docker') || key.includes('ship')) return siDocker.path;
  return siGnubash.path;
}

export function getCustomerLogoDataUri(
  id: string,
  name: string,
  width: number,
  height: number
): string {
  const fontSize = Math.min(14.5, Math.max(11, Math.floor(height * 0.54)));
  const iconPath = resolveSimpleIconPath(id);
  const iconScale = (height * 0.58) / 24;
  const iconY = Math.round((height - 24 * iconScale) / 2);
  const textX = Math.round(24 * iconScale + 8);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none">
    <g transform="translate(2, ${iconY}) scale(${iconScale.toFixed(3)})">
      <path d="${iconPath}" fill="#0f0f0f"/>
    </g>
    <text x="${textX}" y="${Math.round(height * 0.68)}" fill="#0f0f0f" font-family="Space Grotesk, Arial, sans-serif" font-size="${fontSize}" font-weight="600" letter-spacing="-0.02em">${name}</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

const APP_ICON_META: Record<
  string,
  { bg: string; border: string; fg: string; path: string }
> = {
  tui: {
    bg: '#16162a',
    border: 'rgba(164,143,255,0.38)',
    fg: '#a48fff',
    path: siGnubash.path,
  },
  dossier: {
    bg: '#0f2425',
    border: 'rgba(45,212,191,0.4)',
    fg: '#2dd4bf',
    path: siMarkdown.path,
  },
  rust: {
    bg: '#19192b',
    border: 'rgba(230,230,247,0.3)',
    fg: '#e6e6f7',
    path: siRust.path,
  },
  ears: {
    bg: '#1c1833',
    border: 'rgba(196,181,253,0.4)',
    fg: '#c4b5fd',
    path: siAnthropic.path,
  },
  ship: {
    bg: '#131d33',
    border: 'rgba(129,140,248,0.4)',
    fg: '#818cf8',
    path: siDocker.path,
  },
  shield: {
    bg: '#0f2425',
    border: 'rgba(45,212,191,0.4)',
    fg: '#2dd4bf',
    path: siLinux.path,
  },
  bubblewrap: {
    bg: '#1c1b29',
    border: 'rgba(250,204,21,0.35)',
    fg: '#facc15',
    path: siLinux.path,
  },
  sqlite: {
    bg: '#112233',
    border: 'rgba(125,211,252,0.35)',
    fg: '#7dd3fc',
    path: siSqlite.path,
  },
  skills: {
    bg: '#1f1830',
    border: 'rgba(192,132,252,0.4)',
    fg: '#c084fc',
    path: siClaude.path,
  },
  mcp: {
    bg: '#161626',
    border: 'rgba(230,230,247,0.32)',
    fg: '#e6e6f7',
    path: siModelcontextprotocol.path,
  },
  computer: {
    bg: '#1a1830',
    border: 'rgba(164,143,255,0.4)',
    fg: '#a48fff',
    path: siWebassembly.path,
  },
  voice: {
    bg: '#14222b',
    border: 'rgba(45,212,191,0.35)',
    fg: '#2dd4bf',
    path: OPENAI_PATH,
  },
  web: {
    bg: '#151c2e',
    border: 'rgba(165,180,252,0.35)',
    fg: '#a5b4fc',
    path: siOpenrouter.path,
  },
  github: {
    bg: '#161626',
    border: 'rgba(230,230,247,0.28)',
    fg: '#ffffff',
    path: siGithub.path,
  },
  ollama: {
    bg: '#151526',
    border: 'rgba(230,230,247,0.3)',
    fg: '#e6e6f7',
    path: siOllama.path,
  },
  kilo: {
    bg: '#1e1c24',
    border: 'rgba(250,204,21,0.4)',
    fg: '#facc15',
    path: KILOCODE_PATH,
  },
  openrouter: {
    bg: '#151b30',
    border: 'rgba(129,140,248,0.4)',
    fg: '#818cf8',
    path: siOpenrouter.path,
  },
};

export function getAppIconDataUri(slug: string): string {
  const key = slug.toLowerCase();
  const cfg = APP_ICON_META[key] || {
    bg: '#16162a',
    border: 'rgba(164,143,255,0.38)',
    fg: '#a48fff',
    path: siRust.path,
  };
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="0.5" y="0.5" width="21" height="21" rx="4.5" fill="${cfg.bg}" stroke="${cfg.border}" stroke-width="1"/>
    <line x1="3" y1="1" x2="19" y2="1" stroke="rgba(255,255,255,0.24)" stroke-width="0.75"/>
    <g transform="translate(4.3, 4.3) scale(0.558)">
      <path d="${cfg.path}" fill="${cfg.fg}"/>
    </g>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * Multi-layered Cosmic Night isometric technical SVG backdrops for Section 3 (Guarantees)
 */
export function getFeatureCardBackdropDataUri(stepNumber: string): string {
  const configs: Record<
    string,
    {
      accent: string;
      secondary: string;
      code: string;
      sub: string;
      nodeLabel: string;
    }
  > = {
    '01': {
      accent: '#a48fff',
      secondary: '#2dd4bf',
      code: '0x01 // ADVERSARIAL_VERIFIER_ISO',
      sub: 'EARS_ORACLE · CONTEXT_ISOLATED',
      nodeLabel: 'DOSSIER_SEAL_OK',
    },
    '02': {
      accent: '#c4b5fd',
      secondary: '#818cf8',
      code: '0x02 // SMALL_MODEL_REPAIR_LOOP',
      sub: 'AST_JSON_RECOVERY · 9_BUILTINS',
      nodeLabel: 'QWEN_2.5_3B_READY',
    },
    '03': {
      accent: '#818cf8',
      secondary: '#a48fff',
      code: '0x03 // WORKSPACE_SURVEY_SQLITE',
      sub: '17_CRATES_INDEXED · WAL_SYNC',
      nodeLabel: 'BROWNFIELD_GUARD',
    },
    '04': {
      accent: '#2dd4bf',
      secondary: '#a48fff',
      code: '0x04 // BUBBLEWRAP_KERNEL_SANDBOX',
      sub: 'UNSHARE_USER_NET · 0600_VAULT',
      nodeLabel: 'GATE_APPROVAL_YSAN',
    },
  };
  const cfg = configs[stepNumber] || configs['01'];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="580" height="440" viewBox="0 0 580 440" fill="none">
    <defs>
      <linearGradient id="bg_${stepNumber}" x1="0" y1="0" x2="580" y2="440" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#141426"/>
        <stop offset="55%" stop-color="#0d0d1a"/>
        <stop offset="100%" stop-color="#090912"/>
      </linearGradient>
      <linearGradient id="rim_${stepNumber}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="rgba(164,143,255,0.32)"/>
        <stop offset="100%" stop-color="rgba(255,255,255,0.03)"/>
      </linearGradient>
      <radialGradient id="lens_${stepNumber}" cx="50%" cy="42%" r="58%">
        <stop offset="0%" stop-color="${cfg.accent}" stop-opacity="0.22"/>
        <stop offset="55%" stop-color="${cfg.secondary}" stop-opacity="0.06"/>
        <stop offset="100%" stop-color="#090912" stop-opacity="0"/>
      </radialGradient>
      <pattern id="dots_${stepNumber}" width="20" height="20" patternUnits="userSpaceOnUse">
        <circle cx="2" cy="2" r="0.85" fill="rgba(230,230,247,0.09)"/>
      </pattern>
      <pattern id="isoGrid_${stepNumber}" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(230,230,247,0.035)" stroke-width="1"/>
      </pattern>
    </defs>

    <!-- Base anodized cosmic chassis -->
    <rect width="580" height="440" fill="url(#bg_${stepNumber})"/>
    <rect width="580" height="440" fill="url(#isoGrid_${stepNumber})"/>
    <rect x="24" y="24" width="532" height="392" rx="8" fill="url(#dots_${stepNumber})" stroke="rgba(230,230,247,0.07)" stroke-width="1"/>

    <!-- Optical refraction aura -->
    <rect width="580" height="440" fill="url(#lens_${stepNumber})"/>

    <!-- Isometric architectural framing planes -->
    <rect x="46" y="44" width="488" height="352" rx="6" fill="rgba(18,18,32,0.6)" stroke="url(#rim_${stepNumber})" stroke-width="1"/>
    <line x1="46" y1="72" x2="534" y2="72" stroke="rgba(230,230,247,0.07)" stroke-width="1"/>

    <!-- Top hardware telemetry bar inside SVG -->
    <circle cx="62" cy="58" r="3" fill="${cfg.accent}" fill-opacity="0.85"/>
    <circle cx="74" cy="58" r="3" fill="rgba(230,230,247,0.18)"/>
    <circle cx="86" cy="58" r="3" fill="rgba(230,230,247,0.18)"/>
    <text x="102" y="61" fill="rgba(230,230,247,0.48)" font-family="IBM Plex Mono, monospace" font-size="8.5" letter-spacing="0.08em">${cfg.code}</text>
    <text x="518" y="61" text-anchor="end" fill="${cfg.secondary}" fill-opacity="0.85" font-family="IBM Plex Mono, monospace" font-size="8.5" letter-spacing="0.06em">${cfg.nodeLabel}</text>

    <!-- Precision concentric optical rings & circuit traces -->
    <circle cx="290" cy="230" r="156" stroke="rgba(230,230,247,0.07)" stroke-width="1"/>
    <circle cx="290" cy="230" r="122" stroke="${cfg.accent}" stroke-opacity="0.26" stroke-width="1" stroke-dasharray="3 5"/>
    <circle cx="290" cy="230" r="88" stroke="${cfg.secondary}" stroke-opacity="0.2" stroke-width="1"/>

    <!-- Horizontal & vertical circuit bus lines -->
    <line x1="46" y1="230" x2="134" y2="230" stroke="${cfg.accent}" stroke-opacity="0.32" stroke-width="1"/>
    <line x1="446" y1="230" x2="534" y2="230" stroke="${cfg.accent}" stroke-opacity="0.32" stroke-width="1"/>
    <circle cx="134" cy="230" r="3" fill="${cfg.accent}"/>
    <circle cx="446" cy="230" r="3" fill="${cfg.secondary}"/>

    <!-- Corner registration fiducials (+) -->
    <path d="M58 86H66M62 82V90" stroke="rgba(230,230,247,0.26)" stroke-width="1"/>
    <path d="M514 86H522M518 82V90" stroke="rgba(230,230,247,0.26)" stroke-width="1"/>
    <path d="M58 378H66M62 374V382" stroke="rgba(230,230,247,0.26)" stroke-width="1"/>
    <path d="M514 378H522M518 374V382" stroke="rgba(230,230,247,0.26)" stroke-width="1"/>

    <!-- Bottom telemetry footer inside SVG -->
    <text x="62" y="388" fill="rgba(230,230,247,0.36)" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="0.08em">${cfg.sub}</text>
    <text x="518" y="388" text-anchor="end" fill="rgba(230,230,247,0.36)" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="0.08em">SPEC_REV_4.2</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * Multi-layered Cosmic Night Architectural Vault & Optical Security Seal SVG for Section 6
 */
export function getHolographicSecurityDataUri(variant: 1 | 2): string {
  const isPrimary = variant === 1;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="508" height="420" viewBox="0 0 508 420" fill="none">
    <defs>
      <linearGradient id="secSurface_${variant}" x1="0" y1="0" x2="508" y2="420" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#f8f8fd"/>
        <stop offset="50%" stop-color="#eeeef9"/>
        <stop offset="100%" stop-color="#e4e4f4"/>
      </linearGradient>
      <radialGradient id="secLens_${variant}" cx="50%" cy="50%" r="52%">
        <stop offset="0%" stop-color="#6248c7" stop-opacity="${isPrimary ? '0.2' : '0.12'}"/>
        <stop offset="60%" stop-color="#a48fff" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#f6f6fc" stop-opacity="0"/>
      </radialGradient>
      <pattern id="secGrid_${variant}" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M 24 0 L 0 0 0 24" fill="none" stroke="rgba(29,29,51,0.055)" stroke-width="1"/>
      </pattern>
    </defs>

    <rect width="508" height="420" fill="url(#secSurface_${variant})"/>
    <rect width="508" height="420" fill="url(#secGrid_${variant})"/>
    <rect width="508" height="420" fill="url(#secLens_${variant})"/>

    <!-- Isometric architectural security chamber frame -->
    <rect x="28" y="28" width="452" height="364" rx="8" fill="rgba(255,255,255,0.6)" stroke="rgba(29,29,51,0.12)" stroke-width="1"/>
    <rect x="48" y="48" width="412" height="324" rx="6" fill="rgba(255,255,255,0.48)" stroke="rgba(98,72,199,0.22)" stroke-width="1" stroke-dasharray="4 4"/>

    <!-- Concentric cryptographic lock rings -->
    <circle cx="254" cy="210" r="142" stroke="rgba(29,29,51,0.1)" stroke-width="1"/>
    <circle cx="254" cy="210" r="112" stroke="rgba(98,72,199,0.28)" stroke-width="1.2" stroke-dasharray="6 4"/>
    <circle cx="254" cy="210" r="82" stroke="rgba(29,29,51,0.14)" stroke-width="1"/>
    <circle cx="254" cy="210" r="54" fill="rgba(255,255,255,0.75)" stroke="rgba(98,72,199,0.35)" stroke-width="1.2"/>

    <!-- Axis hairlines & fiducial ticks -->
    <line x1="68" y1="210" x2="172" y2="210" stroke="rgba(98,72,199,0.25)" stroke-width="1"/>
    <line x1="336" y1="210" x2="440" y2="210" stroke="rgba(98,72,199,0.25)" stroke-width="1"/>
    <line x1="254" y1="48" x2="254" y2="128" stroke="rgba(98,72,199,0.25)" stroke-width="1"/>
    <line x1="254" y1="292" x2="254" y2="372" stroke="rgba(98,72,199,0.25)" stroke-width="1"/>

    <!-- Hardware telemetry coordinates -->
    <text x="42" y="44" fill="rgba(29,29,51,0.48)" font-family="IBM Plex Mono, monospace" font-size="8.5" letter-spacing="0.08em">NS_ISOLATION // BWRAP_v0.9</text>
    <text x="466" y="44" text-anchor="end" fill="#5339b8" font-family="IBM Plex Mono, monospace" font-size="8.5" letter-spacing="0.08em">MODE: 0600_STRICT</text>
    <text x="42" y="382" fill="rgba(29,29,51,0.42)" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="0.08em">SECCOMP_BPF: ACTIVE</text>
    <text x="466" y="382" text-anchor="end" fill="rgba(29,29,51,0.42)" font-family="IBM Plex Mono, monospace" font-size="8" letter-spacing="0.08em">VERIFIER: ISOLATED</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}
