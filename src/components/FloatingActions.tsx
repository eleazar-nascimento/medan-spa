import { useEffect, useState } from 'react';
import {
  ArrowUp,
  Flag,
  Headphones,
  MessageCircle,
  X,
  Zap,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button, Card } from './ui';

export function FloatingActions() {
  const { t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [fabOpen, setFabOpen] = useState(false);
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setShowScrollTop(y > 400);
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maxScroll > 0 ? Math.min(1, y / maxScroll) : 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickActions = [
    {
      icon: MessageCircle,
      label: t.fab_whatsapp,
      color: 'bg-emerald-500 hover:bg-emerald-600 text-white',
      action: () => setFabOpen(false),
    },
    {
      icon: Flag,
      label: t.fab_report,
      color: 'bg-red-500 hover:bg-red-600 text-white',
      action: () => setFabOpen(false),
    },
    {
      icon: Headphones,
      label: t.fab_call_center,
      color: 'bg-primary hover:bg-primary/90 text-white',
      action: () => setFabOpen(false),
    },
  ];

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-emerald-600 z-50 origin-left transition-transform duration-100"
        style={{
          width: '100%',
          transform: `scaleX(${scrollProgress})`,
        }}
      />

      {/* Bottom-Right Quick Action FAB */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="hover:scale-110 active:scale-90 transition-transform duration-200">
          <Button
            size="lg"
            aria-label="Menu de ações rápidas"
            onClick={() => setFabOpen(!fabOpen)}
            className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-emerald-600 hover:from-primary/90 hover:to-emerald-700 shadow-2xl border-0 relative overflow-hidden group p-0"
          >
            <div className="absolute inset-0 bg-white/20 rounded-full animate-ripple-expand pointer-events-none" />
            <div
              className={`transition-transform duration-200 ${
                fabOpen ? 'rotate-90' : 'rotate-0'
              }`}
            >
              {fabOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Zap className="w-6 h-6 text-white" />
              )}
            </div>
          </Button>
        </div>
      </div>

      {/* Expandable Staggered Action Buttons */}
      {fabOpen && (
        <div className="fixed bottom-24 right-6 z-40 flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          {quickActions.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                style={{ animationDelay: `${idx * 60}ms` }}
                className="relative group flex items-center justify-end"
                onMouseEnter={() => setHoveredAction(item.label)}
                onMouseLeave={() => setHoveredAction(null)}
              >
                {hoveredAction === item.label && (
                  <div className="absolute right-16 top-1/2 -translate-y-1/2 animate-in fade-in zoom-in-95 duration-150">
                    <Card className="px-3 py-2 bg-black/85 dark:bg-black/95 text-white text-sm whitespace-nowrap border-0 shadow-xl">
                      {item.label}
                    </Card>
                  </div>
                )}

                <div className="hover:scale-110 active:scale-90 transition-transform duration-200">
                  <Button
                    size="lg"
                    onClick={item.action}
                    aria-label={item.label}
                    className={`w-14 h-14 rounded-full ${item.color} shadow-lg transition-all duration-300 border-0 p-0`}
                  >
                    <Icon className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Bottom-Left Scroll-to-Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-6 left-6 z-50 animate-in fade-in slide-in-from-bottom-6 duration-300">
          <div className="hover:scale-110 hover:-translate-y-1 active:scale-90 transition-all duration-200">
            <Button
              size="lg"
              variant="secondary"
              aria-label="Voltar ao topo"
              onClick={scrollToTop}
              className="w-14 h-14 rounded-full shadow-2xl border-0 bg-card/80 backdrop-blur-lg relative overflow-hidden group p-0"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-emerald-500/20 animate-spin" style={{ animationDuration: '4s' }} />
              <div className="animate-bounce-arrow relative z-10">
                <ArrowUp className="w-6 h-6 text-foreground" />
              </div>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
