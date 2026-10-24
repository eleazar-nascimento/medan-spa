import { Briefcase, GraduationCap, Heart, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Badge, Card } from './ui';
import { Reveal } from './Motion';
import type { ServiceItemData } from './HeroSection';

interface PersonaSectionProps {
  onSelectService: (service: ServiceItemData, cardElement?: HTMLElement | null) => void;
}

export function PersonaSection({ onSelectService }: PersonaSectionProps) {
  const { t } = useLanguage();

  const personas = [
    {
      icon: GraduationCap,
      title: t.persona_student,
      color: 'bg-primary/10 text-primary',
      services: [
        t.student_domicile,
        t.student_legalization,
        t.student_poor_certificate,
        t.student_scholarship,
      ],
    },
    {
      icon: Users,
      title: t.persona_family,
      color: 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600',
      services: [
        t.family_birth_cert,
        t.family_card,
        t.family_marriage,
        t.family_health,
      ],
    },
    {
      icon: Heart,
      title: t.persona_elderly,
      color: 'bg-primary/10 text-primary',
      services: [
        t.elderly_social_aid,
        t.elderly_free_health,
        t.elderly_active_program,
        t.elderly_consultation,
      ],
    },
    {
      icon: Briefcase,
      title: t.persona_business,
      color: 'bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600',
      services: [
        t.business_siup_tdp,
        t.business_permit,
        t.business_ads_permit,
        t.business_tax,
      ],
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <Reveal className="text-center mb-12" initialY={24}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            {t.persona_title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.persona_desc}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, idx) => {
            const Icon = persona.icon;
            return (
              <Reveal
                key={persona.title}
                delay={idx * 0.1}
                initialY={24}
                hoverY={-4}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="text-center mb-6">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${persona.color}`}
                    >
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {persona.title}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {persona.services.map((serviceName) => (
                      <div
                        key={serviceName}
                        onClick={(e) =>
                          onSelectService(
                            {
                              id: `persona-${serviceName}`,
                              icon: Icon,
                              title: serviceName,
                              subtitle: `${persona.title} • ${t.hero_badge}`,
                              category: persona.title,
                              estimatedTime: t.est_10_min,
                              completedToday: 42,
                            },
                            e.currentTarget
                          )
                        }
                        className="service-card-item flex items-center justify-between p-3 bg-secondary/50 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer group"
                      >
                        <span className="service-card-title text-sm text-foreground group-hover:text-primary transition-colors">
                          {serviceName}
                        </span>
                        <Badge
                          variant="secondary"
                          className="text-xs group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                        >
                          →
                        </Badge>
                      </div>
                    ))}
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
