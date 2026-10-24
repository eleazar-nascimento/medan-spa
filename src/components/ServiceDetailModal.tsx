import { useEffect, useRef } from 'react';
import {
  ArrowRight,
  CircleCheckBig,
  Clock,
  Shield,
  X,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Badge, Button, Card } from './ui';
import type { ServiceItemData } from './HeroSection';

interface ServiceDetailModalProps {
  service: ServiceItemData | null;
  onClose: () => void;
}

export function ServiceDetailModal({
  service,
  onClose,
}: ServiceDetailModalProps) {
  const { t } = useLanguage();
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (service) {
      // Accessibility focus routing after transition
      headingRef.current?.focus();
    }
  }, [service]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && service) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  const Icon = service.icon;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <Card
        id="detail-modal-hero"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg p-6 sm:p-8 bg-card border border-border shadow-2xl rounded-2xl overflow-hidden"
      >
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Badge variant="secondary">{service.category}</Badge>
                <Badge className="bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/20">
                  {t.modal_online_status}
                </Badge>
              </div>
              <h2
                id="detail-heading"
                ref={headingRef}
                tabIndex={-1}
                className="service-detail-title text-xl font-bold text-foreground outline-none"
              >
                {service.title}
              </h2>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label={t.modal_close}
            className="rounded-full"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {service.subtitle}. {t.modal_requirements}
        </p>

        <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50 text-xs">
          <div className="flex items-center gap-2 text-foreground">
            <Clock className="w-4 h-4 text-primary" />
            <div>
              <div className="text-muted-foreground">{t.estimated_time}</div>
              <div className="font-semibold">
                {service.estimatedTime || t.est_10_min}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-foreground">
            <CircleCheckBig className="w-4 h-4 text-primary" />
            <div>
              <div className="text-muted-foreground">
                {t.services_completed}
              </div>
              <div className="font-semibold">
                {service.completedToday || 120} {t.completed_today}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Shield className="w-4 h-4 text-primary" />
          <span>
            {t.trust_security} • {t.trust_security_desc}
          </span>
        </div>

        <div className="flex justify-end gap-3 pt-2">
          <Button variant="outline" onClick={onClose}>
            {t.modal_close}
          </Button>
          <Button onClick={onClose} className="group">
            {t.modal_start_service}
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
