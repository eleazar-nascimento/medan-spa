import {
  Database,
  Download,
  ExternalLink,
  FileText,
  MessageCircle,
  TrendingUp,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button, SurfaceCard } from './ui';
import { CountUp, Reveal } from './Motion';

export function TransparencySection() {
  const { t } = useLanguage();

  const transparencyCards = [
    {
      icon: FileText,
      title: t.financial_report,
      description: t.financial_desc,
      value: 2400000000000,
      displayValue: '₹2.4T',
      subtitle: t.total_budget,
      progress: 65,
      change: '+12.5%',
    },
    {
      icon: TrendingUp,
      title: t.budget_2025,
      description: t.budget_desc,
      value: 1200000000000,
      displayValue: '₹1.2T',
      subtitle: t.development,
      progress: 45,
      change: '+8.3%',
    },
    {
      icon: MessageCircle,
      title: t.e_report,
      description: t.e_report_desc,
      value: 1247,
      displayValue: '1.247',
      subtitle: t.reports_received,
      progress: 89,
      change: '+156',
    },
    {
      icon: Database,
      title: t.open_data,
      description: t.open_data_desc,
      value: 156,
      displayValue: '156',
      subtitle: t.datasets,
      progress: 100,
      change: '+23',
    },
  ];

  const portalStats = [
    {
      title: t.budget_distributed,
      end: 1.56,
      decimals: 2,
      suffix: 'T',
      percentage: 65,
    },
    {
      title: t.projects_completed,
      end: 47,
      decimals: 0,
      suffix: '',
      percentage: 78,
    },
    {
      title: t.transparency_score,
      end: 9.2,
      decimals: 1,
      suffix: '',
      percentage: 92,
    },
  ];

  return (
    <section
      id="transparencia"
      className="py-20 bg-gradient-to-br from-background via-secondary/20 to-background relative overflow-hidden"
    >
      {/* Background Blur Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <Reveal className="text-center mb-16" initialY={30} duration={0.8}>
          <div className="mb-6">
            <SurfaceCard
              hover={false}
              className="inline-block px-6 py-3 min-h-0 hover:scale-102 transition-transform"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-primary font-medium text-sm">
                  {t.transparency_badge}
                </span>
              </div>
            </SurfaceCard>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 text-foreground">
            {t.transparency_title_1}
            <br />
            <span className="bg-gradient-to-r from-primary via-blue-600 to-blue-700 bg-clip-text text-transparent">
              {t.transparency_title_2}
            </span>
          </h2>

          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            {t.transparency_desc}
            <span className="block text-foreground font-medium mt-2">
              {t.transparency_features}
            </span>
          </p>
        </Reveal>

        {/* 4 Transparency Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {transparencyCards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={0.1 + idx * 0.15}
                duration={0.6}
                initialY={30}
                initialScale={0.92}
                hoverY={-4}
                hoverScale={1.02}
                className="group cursor-pointer h-full"
              >
                <SurfaceCard variant="transparency" className="relative h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-2xl flex items-center justify-center group-hover:bg-primary/15 group-hover:border-primary/30 transition-all duration-300 flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex gap-1">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="p-2 hover:bg-primary/10 w-8 h-8"
                        aria-label="Baixar relatório"
                      >
                        <Download className="w-3.5 h-3.5 text-foreground/60" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="p-2 hover:bg-primary/10 w-8 h-8"
                        aria-label="Abrir detalhes"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-foreground/60" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="mb-4">
                      <h4 className="font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-colors leading-tight">
                        {item.title}
                      </h4>
                      <p className="text-sm text-foreground/60 leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="mt-auto space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-foreground">
                          {item.value < 1000 ? (
                            <CountUp end={item.value} />
                          ) : (
                            item.displayValue
                          )}
                        </span>
                        <div className="flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20">
                          <TrendingUp className="w-3 h-3" />
                          {item.change}
                        </div>
                      </div>

                      <p className="text-xs text-foreground/50 font-medium">
                        {item.subtitle}
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-foreground/60">
                          <span>{t.progress}</span>
                          <span className="font-medium">{item.progress}%</span>
                        </div>
                        <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                          <div
                            className="bg-gradient-to-r from-primary to-blue-600 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SurfaceCard>
              </Reveal>
            );
          })}
        </div>

        {/* Real-time Transparency Portal Banner */}
        <Reveal delay={0.3} duration={0.8} initialY={40} className="max-w-4xl mx-auto">
          <SurfaceCard hover={false} className="text-center min-h-0">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {t.portal_title}
              </h3>
              <p className="text-sm text-foreground/60">{t.portal_desc}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {portalStats.map((stat, idx) => (
                <Reveal
                  key={stat.title}
                  delay={0.4 + idx * 0.15}
                  initialScale={0.88}
                  hoverScale={1.02}
                  className="text-center p-4 rounded-xl bg-secondary/30 border border-border/50"
                >
                  <div className="text-xl font-bold text-foreground mb-1">
                    <CountUp
                      end={stat.end}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                    />
                  </div>
                  <p className="text-sm text-foreground/60 mb-2">{stat.title}</p>
                  <div className="w-full bg-border rounded-full h-1 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-blue-600 h-1 rounded-full transition-all duration-1000"
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal hoverScale={1.02} tapScale={0.98} initialY={0}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 px-8 py-3.5 h-auto text-base font-semibold rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <Database className="w-5 h-5 mr-2" />
                {t.access_portal}
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Reveal>
          </SurfaceCard>
        </Reveal>
      </div>
    </section>
  );
}
