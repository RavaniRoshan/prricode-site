import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getNextScenarioIndex,
  toggleAccordionIndex,
  computeHeaderScrollState,
  validateNewsletterForm,
  calculateWalletTotal,
  resolveActiveGuaranteeStep,
} from './composioLogic.ts';

test('getNextScenarioIndex cycles cleanly across 3 story-outcome scenarios', () => {
  assert.equal(getNextScenarioIndex(0, 3), 1);
  assert.equal(getNextScenarioIndex(1, 3), 2);
  assert.equal(getNextScenarioIndex(2, 3), 0);
  assert.equal(getNextScenarioIndex(0, 0), 0);
});

test('toggleAccordionIndex opens and closes FAQ / Security accordion items', () => {
  assert.equal(toggleAccordionIndex(null, 0), 0);
  assert.equal(toggleAccordionIndex(0, 0), null);
  assert.equal(toggleAccordionIndex(0, 2), 2);
  assert.equal(toggleAccordionIndex(1, 1, false), 1);
});

test('computeHeaderScrollState transitions header background over dark and light sections', () => {
  const boundaries = [
    { top: 0, bottom: 900, isDark: true },
    { top: 900, bottom: 1855, isDark: false },
    { top: 1855, bottom: 3963, isDark: true },
  ];

  assert.deepEqual(computeHeaderScrollState(0, boundaries), {
    isScrolled: false,
    isLightHeader: false,
  });

  // Scrolled inside dark hero
  assert.deepEqual(computeHeaderScrollState(120, boundaries), {
    isScrolled: true,
    isLightHeader: false,
  });

  // Scrolled over light "doer" section
  assert.deepEqual(computeHeaderScrollState(950, boundaries), {
    isScrolled: true,
    isLightHeader: true,
  });
});

test('validateNewsletterForm validates email and catches honeypot bots', () => {
  assert.deepEqual(validateNewsletterForm('dev@composio.dev', ''), {
    valid: true,
    isBot: false,
  });
  assert.deepEqual(validateNewsletterForm('', ''), {
    valid: false,
    isBot: false,
    error: 'Please enter your email address.',
  });
  assert.deepEqual(validateNewsletterForm('not-an-email', ''), {
    valid: false,
    isBot: false,
    error: 'Please enter a valid email address.',
  });
  assert.deepEqual(validateNewsletterForm('bot@spam.com', 'https://spam.com'), {
    valid: false,
    isBot: true,
  });
});

test('calculateWalletTotal computes Instant wallet mock figures accurately', () => {
  const items = [
    { name: 'ElevenLabs', cost: 0.09 },
    { name: 'Apollo', cost: 0.01 },
    { name: 'Ahrefs', cost: 0.05 },
  ];
  const result = calculateWalletTotal(items, 2.0);
  assert.equal(result.totalSpent, '$0.15');
  assert.equal(result.remaining, '$1.85');
});

test('resolveActiveGuaranteeStep picks the active card based on viewport trigger line', () => {
  const cards = [
    { top: 2000, bottom: 2440 },
    { top: 2450, bottom: 2890 },
    { top: 2900, bottom: 3340 },
    { top: 3350, bottom: 3790 },
  ];
  assert.equal(resolveActiveGuaranteeStep(1700, 900, cards), 0);
  assert.equal(resolveActiveGuaranteeStep(2200, 900, cards), 1);
  assert.equal(resolveActiveGuaranteeStep(2650, 900, cards), 2);
  assert.equal(resolveActiveGuaranteeStep(3100, 900, cards), 3);
});

test('resolveDocSlugFromUrl maps Diátaxis documentation URLs to in-app documentation sections', async () => {
  const { resolveDocSlugFromUrl } = await import('../data/docsData.ts');
  assert.equal(resolveDocSlugFromUrl('https://ravaniroshan.github.io/prricode/'), 'overview');
  assert.equal(
    resolveDocSlugFromUrl('https://ravaniroshan.github.io/prricode/tutorials/first-product/'),
    'tutorial'
  );
  assert.equal(
    resolveDocSlugFromUrl('https://ravaniroshan.github.io/prricode/how-to/tui-guide/'),
    'tui-guide'
  );
  assert.equal(
    resolveDocSlugFromUrl('https://ravaniroshan.github.io/prricode/reference/protocol/'),
    'protocol'
  );
  assert.equal(
    resolveDocSlugFromUrl('https://ravaniroshan.github.io/prricode/explanation/prd/'),
    'prd'
  );
  assert.equal(
    resolveDocSlugFromUrl('https://github.com/RavaniRoshan/prricode/blob/main/SECURITY.md'),
    'security'
  );
  assert.equal(resolveDocSlugFromUrl('https://github.com/RavaniRoshan/prricode'), null);
});

