import {
  ArrowRight,
  Building,
  CircleCheckBig,
  Clock,
  CreditCard,
  FileText,
  Hospital,
  MessageSquare,
  Users,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Badge, Card } from './ui';
import { Reveal } from './Motion';
import type { ServiceItemData } from './HeroSection';

interface QuickAccessSectionProps {
  onSelectService: (service: ServiceItemData, cardElement?: HTMLElement | null) => void;
}

const colorSchemes = {
  primary: {
    bg: 'bg-primary/5 dark:bg-primary/10',
    icon: 'text-primary',
    gradient: 'from-primary to-emerald-600',
    border: 'border-primary/20 dark:border-primary/30',
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    icon: 'text-emerald-600',
    gradient: 'from-emerald-500 to-emerald-600',
    border: 'border-emerald-200 dark:border-emerald-800',
  },
};

export function QuickAccessSection({ onSelectService }: QuickAccessSectionProps) {
  const { t } = useLanguage();

  const priorityServices: Array<
    ServiceItemData & {
      description: string;
      color: 'primary' | 'emerald';
    }
  > = [
    {
      id: 'qa-population',
      icon: CreditCard,
      title: t.service_population,
      subtitle: t.service_population_long_desc,
      description: t.service_population_long_desc,
      category: t.documents,
      color: 'primary',
      popular: true,
      estimatedTime: t.est_10_min,
      completedToday: 156,
    },
    {
      id: 'qa-tax',
      icon: FileText,
      title: t.service_tax_payment,
      subtitle: t.service_tax_long_desc,
      description: t.service_tax_long_desc,
      category: t.tax,
      color: 'emerald',
      popular: false,
      estimatedTime: t.est_5_min,
      completedToday: 89,
    },
    {
      id: 'qa-business',
      icon: Building,
      title: t.service_business_permit,
      subtitle: t.service_business_long_desc,
      description: t.service_business_long_desc,
      category: t.permits,
      color: 'primary',
      popular: true,
      estimatedTime: t.est_1_day,
      completedToday: 23,
    },
    {
      id: 'qa-complaints',
      icon: MessageSquare,
      title: t.complaints,
      subtitle: t.service_complaints_long_desc,
      description: t.service_complaints_long_desc,
      category: t.complaints,
      color: 'emerald',
      popular: false,
      estimatedTime: t.est_24_hours,
      completedToday: 67,
    },
    {
      id: 'qa-health',
      icon: Hospital,
      title: t.service_health,
      subtitle: t.service_health_desc,
      description: t.service_health_desc,
      category: t.services,
      color: 'primary',
      popular: false,
      estimatedTime: t.est_realtime,
      completedToday: 234,
    },
  ];

  const metrics = [
    {
      icon: CircleCheckBig,
      value: '15.247',
      label: t.services_completed,
      subtext: t.services_completed_sub,
      color: 'text-primary',
    },
    {
      icon: Clock,
      value: t.average_response_val,
      label: t.average_response,
      subtext: t.average_response_sub,
      color: 'text-emerald-500',
    },
    {
      icon: Users,
      value: '98,5%',
      label: t.satisfaction_rate,
      subtext: t.satisfaction_rate_sub,
      color: 'text-primary',
    },
    {
      icon: ArrowRight,
      value: '24/7',
      label: t.online_services,
      subtext: t.online_services_sub,
      color: 'text-emerald-500',
    },
  ];

  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden"
    >
      {/* Subtle Radial Grid Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <Reveal className="text-center mb-16" initialY={30} duration={0.8}>
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-lg rounded-full px-4 py-2 mb-6 border border-border/30 shadow-sm hover:scale-105 transition-transform duration-300">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground">
              {t.quick_access_badge}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 font-bold text-foreground">
            {t.quick_access_title}
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t.quick_access_desc}
          </p>
        </Reveal>

        {/* Priority Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {priorityServices.map((service, idx) => {
            const Icon = service.icon;
            const scheme = colorSchemes[service.color];

            return (
              <Reveal
                key={service.id}
                delay={0.1 + idx * 0.1}
                duration={0.6}
                initialY={30}
                initialScale={0.95}
                hoverY={-8}
                onClick={(e) => onSelectService(service, e.currentTarget)}
                className="service-card-item group cursor-pointer"
              >
                <Card className="relative p-6 lg:p-8 border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-br from-card to-secondary/30 h-full">
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-primary text-primary-foreground border-0 text-xs px-2 py-1">
                        {t.popular_label}
                      </Badge>
                    </div>
                  )}

                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${scheme.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                  />

                  <div
                    className={`w-16 h-16 ${scheme.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg transition-all duration-300 relative overflow-hidden group-hover:-rotate-6`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${scheme.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                    />
                    <Icon
                      className={`w-8 h-8 ${scheme.icon} relative z-10 group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>

                  <div className="relative z-10 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="service-card-title text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>
                              {t.estimated_time} {service.estimatedTime}
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-primary font-medium">
                            <CircleCheckBig className="w-3 h-3" />
                            <span>
                              {service.completedToday} {t.completed_today}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                          <span>{t.start_now}</span>
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
                </Card>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom 4 Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {metrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <Reveal
                key={metric.label}
                delay={0.2 + idx * 0.1}
                duration={0.6}
                initialScale={0.88}
                initialY={24}
                hoverY={-4}
                className="text-center p-6 bg-card/80 backdrop-blur-lg rounded-xl border border-border/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-sm transition-shadow duration-300">
                  <Icon className={`w-6 h-6 ${metric.color}`} />
                </div>
                <div className="text-xl lg:text-2xl mb-1 font-bold text-foreground">
                  {metric.value}
                </div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {metric.label}
                </p>
                <p className="text-xs text-muted-foreground opacity-70">
                  {metric.subtext}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
