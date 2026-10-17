import React, { useState, useEffect } from 'react';
import { AnnouncementTopbar, Header } from './components/Header';
import { Hero } from './components/Hero';
import { DoerSection } from './components/DoerSection';
import { GuaranteesSection } from './components/GuaranteesSection';
import { UseCasesSection } from './components/UseCasesSection';
import { PlatformSection } from './components/PlatformSection';
import { SecuritySection } from './components/SecuritySection';
import { FaqAndFinalCta } from './components/FaqSection';
import { Footer } from './components/Footer';
import { PromoModal } from './components/PromoModal';
import { DocsModal } from './components/DocsModal';
import { computeHeaderScrollState } from './utils/composioLogic';
import { DocSectionId, resolveDocSlugFromUrl } from './data/docsData';

export default function App() {
  const [promoModalOpen, setPromoModalOpen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1') {
        return false;
      }
    }
    return true;
  });

  const [docsModal, setDocsModal] = useState<{
    isOpen: boolean;
    section: DocSectionId;
  }>({
    isOpen: false,
    section: 'overview',
  });

  const [headerScrollState, setHeaderScrollState] = useState({
    isScrolled: false,
    isLightHeader: false,
  });

  useEffect(() => {
    const updateScroll = () => {
      const sections = Array.from(
        document.querySelectorAll<HTMLElement>('[data-section-theme]')
      ).map((el) => {
        const rect = el.getBoundingClientRect();
        return {
          top: rect.top + window.scrollY,
          bottom: rect.bottom + window.scrollY,
          isDark: el.getAttribute('data-section-theme') === 'dark',
        };
      });
      setHeaderScrollState(computeHeaderScrollState(window.scrollY, sections));
    };

    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    window.addEventListener('resize', updateScroll);
    return () => {
      window.removeEventListener('scroll', updateScroll);
      window.removeEventListener('resize', updateScroll);
    };
  }, []);

  // Intercept documentation links across all sections so they open the in-app Diátaxis Documentation Hub
  useEffect(() => {
    const handleDocLinkClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) {
        return;
      }
      const target = e.target as HTMLElement | null;
      const anchor = target?.closest('a');
      if (!anchor) return;
      if (anchor.getAttribute('target') === '_blank') return;
      const href = anchor.getAttribute('href');
      if (!href) return;
      const docSlug = resolveDocSlugFromUrl(href);
      if (docSlug) {
        e.preventDefault();
        setDocsModal({ isOpen: true, section: docSlug });
      }
    };

    document.addEventListener('click', handleDocLinkClick);
    return () => document.removeEventListener('click', handleDocLinkClick);
  }, []);

  const openModal = () => setPromoModalOpen(true);
  const closeModal = () => setPromoModalOpen(false);
  const openDocs = (section: DocSectionId = 'overview') =>
    setDocsModal({ isOpen: true, section });
  const closeDocs = () => setDocsModal((prev) => ({ ...prev, isOpen: false }));

  return (
    <>
      <AnnouncementTopbar onExploreClick={openModal} onOpenDocs={openDocs} />
      <Header
        isScrolled={headerScrollState.isScrolled}
        isLightHeader={headerScrollState.isLightHeader}
        onOpenPromoModal={openModal}
        onOpenDocs={openDocs}
      />
      <main>
        <Hero onPrimaryCtaClick={openModal} />
        <DoerSection />
        <GuaranteesSection />
        <UseCasesSection onPrimaryCtaClick={openModal} />
        <PlatformSection onTryForFreeClick={openModal} />
        <SecuritySection />
        <FaqAndFinalCta onPrimaryCtaClick={openModal} />
      </main>
      <Footer />
      <PromoModal isOpen={promoModalOpen} onClose={closeModal} />
      <DocsModal
        isOpen={docsModal.isOpen}
        activeSection={docsModal.section}
        onSelectSection={(section) => setDocsModal({ isOpen: true, section })}
        onClose={closeDocs}
      />
    </>
  );
}
