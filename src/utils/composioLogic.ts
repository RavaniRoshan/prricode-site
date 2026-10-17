export interface SectionBoundary {
  top: number;
  bottom: number;
  isDark: boolean;
}

export interface HeaderScrollState {
  isScrolled: boolean;
  isLightHeader: boolean;
}

export interface WalletLineItem {
  name: string;
  cost: number;
}

export function getNextScenarioIndex(currentIndex: number, total: number): number {
  if (total <= 0) return 0;
  return (currentIndex + 1) % total;
}

export function toggleAccordionIndex(
  currentOpenIndex: number | null,
  clickedIndex: number,
  allowCloseAll = true
): number | null {
  if (currentOpenIndex === clickedIndex) {
    return allowCloseAll ? null : currentOpenIndex;
  }
  return clickedIndex;
}

export function computeHeaderScrollState(
  scrollY: number,
  sectionBoundaries: SectionBoundary[]
): HeaderScrollState {
  const isScrolled = scrollY > 12;
  if (!isScrolled) {
    return { isScrolled: false, isLightHeader: false };
  }

  // Probe point is near the fixed header center (~56px from top of viewport)
  const probeY = scrollY + 56;
  const activeSection = sectionBoundaries.find(
    (sec) => probeY >= sec.top && probeY < sec.bottom
  );

  const isLightHeader = activeSection ? !activeSection.isDark : false;
  return { isScrolled, isLightHeader };
}

export function validateNewsletterForm(
  email: string,
  honeypotWebsite: string
): { valid: boolean; isBot: boolean; error?: string } {
  if (honeypotWebsite && honeypotWebsite.trim().length > 0) {
    return { valid: false, isBot: true };
  }
  const trimmed = email.trim();
  if (!trimmed) {
    return { valid: false, isBot: false, error: 'Please enter your email address.' };
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(trimmed)) {
    return { valid: false, isBot: false, error: 'Please enter a valid email address.' };
  }
  return { valid: true, isBot: false };
}

export function calculateWalletTotal(
  items: WalletLineItem[],
  budget: number
): { totalSpent: string; remaining: string } {
  const sum = items.reduce((acc, item) => acc + item.cost, 0);
  const rem = Math.max(0, budget - sum);
  return {
    totalSpent: `$${sum.toFixed(2)}`,
    remaining: `$${rem.toFixed(2)}`,
  };
}

export function resolveActiveGuaranteeStep(
  scrollY: number,
  viewportHeight: number,
  cardBounds: Array<{ top: number; bottom: number }>
): number {
  if (cardBounds.length === 0) return 0;
  const triggerLine = scrollY + viewportHeight * 0.4;
  let activeIdx = 0;
  for (let i = 0; i < cardBounds.length; i++) {
    if (triggerLine >= cardBounds[i].top) {
      activeIdx = i;
    }
  }
  return activeIdx;
}
