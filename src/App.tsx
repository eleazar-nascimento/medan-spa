import { useEffect, useState } from 'react';
import { flushSync } from 'react-dom';
import { FileText } from 'lucide-react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection, type ServiceItemData } from './components/HeroSection';
import { QuickAccessSection } from './components/QuickAccessSection';
import { PersonaSection } from './components/PersonaSection';
import { NewsSection } from './components/NewsSection';
import { AgendaSection } from './components/AgendaSection';
import { TransparencySection } from './components/TransparencySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { LoadingScreen } from './components/LoadingScreen';
import { ServiceDetailModal } from './components/ServiceDetailModal';

function PortalContent() {
  const { t } = useLanguage();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedService, setSelectedService] =
    useState<ServiceItemData | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!document.startViewTransition) {
        setIsLoading(false);
        return;
      }
      document.startViewTransition(() => {
        flushSync(() => {
          setIsLoading(false);
        });
      });
    }, 1100);
    return () => clearTimeout(timer);
  }, []);

  // Fallback for browsers that do not support CSS Scroll-Driven ViewTimeline animations
  useEffect(() => {
    if (isLoading) return;
    if (
      typeof CSS !== 'undefined' &&
      !CSS.supports('(animation-timeline: view()) and (animation-range: entry)')
    ) {
      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const target = entry.target as HTMLElement;
            const ratio = entry.intersectionRatio;
            target.style.opacity = String(0.35 + ratio * 0.65);
          }
        },
        {
          threshold: Array.from({ length: 21 }, (_, i) => i / 20),
        }
      );

      document.querySelectorAll('.scroll-entry-exit-item').forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    }
  }, [isLoading]);

  const handleOpenServiceDetail = (
    service: ServiceItemData,
    cardElement?: HTMLElement | null
  ) => {
    document.querySelectorAll('.service-card-item.selected').forEach((el) => {
      el.classList.remove('selected');
    });
    if (cardElement) {
      cardElement.classList.add('selected');
    }

    if (!document.startViewTransition) {
      setSelectedService(service);
      setTimeout(() => {
        document.getElementById('detail-heading')?.focus();
      }, 0);
      return;
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setSelectedService(service);
      });
    });

    transition.finished.finally(() => {
      document.getElementById('detail-heading')?.focus();
    });
  };

  const handleCloseServiceDetail = () => {
    if (!document.startViewTransition) {
      setSelectedService(null);
      document.querySelectorAll('.service-card-item.selected').forEach((el) => {
        el.classList.remove('selected');
      });
      return;
    }

    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setSelectedService(null);
      });
    });

    transition.finished.finally(() => {
      document.querySelectorAll('.service-card-item.selected').forEach((el) => {
        el.classList.remove('selected');
      });
    });
  };

  const handleSelectByName = (name: string) => {
    handleOpenServiceDetail({
      id: `nav-${name}`,
      icon: FileText,
      title: name,
      subtitle: t.hero_description,
      category: t.services,
      estimatedTime: t.est_10_min,
      completedToday: 95,
    });
  };

  return (
    <div className="min-h-screen relative bg-background text-foreground">
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="animate-in fade-in duration-700">
          <div className="relative z-50">
            <Navbar onSelectService={handleSelectByName} />
          </div>

          <HeroSection onSelectService={handleOpenServiceDetail} />

          <main className="relative z-10">
            <div className="scroll-entry-exit-item">
              <QuickAccessSection onSelectService={handleOpenServiceDetail} />
            </div>
            <div className="scroll-entry-exit-item">
              <PersonaSection onSelectService={handleOpenServiceDetail} />
            </div>
            <div className="scroll-entry-exit-item">
              <NewsSection />
            </div>
            <div className="scroll-entry-exit-item">
              <AgendaSection />
            </div>
            <div className="scroll-entry-exit-item">
              <TransparencySection />
            </div>
            <div className="scroll-entry-exit-item">
              <TestimonialsSection />
            </div>
          </main>

          <Footer />
          <FloatingActions />

          <ServiceDetailModal
            service={selectedService}
            onClose={handleCloseServiceDetail}
          />
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PortalContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
