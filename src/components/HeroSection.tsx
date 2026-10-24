import {
  ArrowRight,
  Building,
  Clock,
  CreditCard,
  FileText,
  Phone,
  Shield,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Badge, Button, SurfaceCard } from './ui';
import { Reveal } from './Motion';

export interface ServiceItemData {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  category: string;
  popular?: boolean;
  estimatedTime?: string;
  completedToday?: number;
}

interface HeroSectionProps {
  onSelectService: (service: ServiceItemData, cardElement?: HTMLElement | null) => void;
}

export function HeroSection({ onSelectService }: HeroSectionProps) {
  const { t } = useLanguage();

  const mainServices: ServiceItemData[] = [
    {
      id: 'hero-population',
      icon: FileText,
      title: t.service_population,
      subtitle: t.service_population_desc,
      category: t.documents,
      popular: true,
      estimatedTime: t.est_10_min,
      completedToday: 156,
    },
    {
      id: 'hero-tax',
      icon: CreditCard,
      title: t.service_tax_payment,
      subtitle: t.service_tax_desc,
      category: t.tax,
      popular: true,
      estimatedTime: t.est_5_min,
      completedToday: 89,
    },
    {
      id: 'hero-business',
      icon: Building,
      title: t.service_business_permit,
      subtitle: t.service_business_desc,
      category: t.permits,
      popular: false,
      estimatedTime: t.est_1_day,
      completedToday: 23,
    },
    {
      id: 'hero-support',
      icon: Phone,
      title: t.service_support,
      subtitle: t.service_support_desc,
      category: t.services,
      popular: false,
      estimatedTime: t.est_24_hours,
      completedToday: 67,
    },
  ];

  const trustPillars = [
    {
      icon: Shield,
      label: t.trust_security,
      desc: t.trust_security_desc,
    },
    {
      icon: Clock,
      label: t.trust_speed,
      desc: t.trust_speed_desc,
    },
    {
      icon: Zap,
      label: t.trust_ease,
      desc: t.trust_ease_desc,
    },
  ];

  return (
    <section
      id="inicio"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background pt-16"
    >
      {/* Background Blur Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen py-16 text-center">
          {/* Official Portal Pill */}
          <Reveal delay={0.05} duration={0.6} initialY={20} className="mb-8">
            <SurfaceCard hover={false} className="inline-block px-6 py-3 min-h-0">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-primary font-medium text-sm">
                  {t.hero_badge}
                </span>
              </div>
            </SurfaceCard>
          </Reveal>

          {/* Hero Heading & Subtitle */}
          <Reveal delay={0.15} duration={0.8} initialY={30} className="space-y-6 mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
              {t.hero_title_1}
              <br />
              <span className="bg-gradient-to-r from-primary via-emerald-600 to-emerald-700 bg-clip-text text-transparent">
                {t.hero_title_2}
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.hero_description}
              <span className="block text-foreground font-medium mt-2">
                {t.hero_features}
              </span>
            </p>
          </Reveal>

          {/* Primary & Secondary CTAs */}
          <Reveal
            delay={0.3}
            duration={0.8}
            initialY={20}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Reveal hoverScale={1.02} tapScale={0.98} initialY={0}>
              <Button
                size="lg"
                onClick={() => {
                  document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-primary hover:bg-primary/90 px-8 py-3.5 h-auto text-base font-semibold rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <FileText className="w-5 h-5 mr-2" />
                {t.hero_cta_primary}
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Reveal>

            <Reveal hoverScale={1.02} tapScale={0.98} initialY={0}>
              <Button
                variant="outline"
                size="lg"
                onClick={(e) =>
                  onSelectService(mainServices[3], e.currentTarget as HTMLElement)
                }
                className="border-2 border-border hover:bg-secondary/50 px-8 py-3.5 h-auto text-base font-semibold rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                {t.hero_cta_secondary}
              </Button>
            </Reveal>
          </Reveal>

          {/* Main Services 4-Column Grid */}
          <Reveal delay={0.45} duration={0.8} initialY={30} className="w-full max-w-5xl mb-12">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {t.hero_main_services}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.hero_services_desc}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mainServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <Reveal
                    key={service.id}
                    delay={0.5 + idx * 0.1}
                    duration={0.5}
                    initialY={20}
                    hoverY={-4}
                    hoverScale={1.02}
                    onClick={(e) => onSelectService(service, e.currentTarget)}
                    className="service-card-item group relative cursor-pointer h-full"
                  >
                    <SurfaceCard variant="service" className="relative h-full">
                      {service.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-primary/10 text-primary border border-primary/20 text-xs px-2 py-1 font-medium z-10">
                          {t.popular_label}
                        </Badge>
                      )}

                      <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300 flex-shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>

                      <div className="flex-1 flex flex-col justify-between text-left">
                        <div>
                          <h4 className="service-card-title font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                            {service.title}
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                            {service.subtitle}
                          </p>
                        </div>
                        <div className="text-xs text-primary/70 font-medium">
                          {service.category}
                        </div>
                      </div>
                    </SurfaceCard>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>

          {/* 3 Trust Pillars */}
          <Reveal delay={0.7} duration={0.8} initialY={30} className="w-full max-w-5xl space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {trustPillars.map((pillar, idx) => {
                const Icon = pillar.icon;
                return (
                  <Reveal
                    key={pillar.label}
                    delay={0.85 + idx * 0.1}
                    duration={0.5}
                    initialY={10}
                    hoverY={-2}
                    hoverScale={1.02}
                    className="group cursor-pointer"
                  >
                    <SurfaceCard variant="trust" className="text-center">
                      <div className="w-6 h-6 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center mx-auto mb-1 group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300">
                        <Icon className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-xs text-foreground group-hover:text-primary transition-colors mb-0.5">
                          {pillar.label}
                        </div>
                        <div className="text-xs text-muted-foreground opacity-70">
                          {pillar.desc}
                        </div>
                      </div>
                    </SurfaceCard>
                  </Reveal>
                );
              })}
            </div>
          </Reveal>

          {/* Animated Scroll Indicator */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
            <a
              href="#servicos"
              aria-label="Rolar para serviços"
              className="w-5 h-8 border border-muted-foreground/30 rounded-full flex justify-center animate-float-outer"
            >
              <div className="w-1 h-2 bg-muted-foreground/50 rounded-full mt-1.5 animate-float-inner" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
