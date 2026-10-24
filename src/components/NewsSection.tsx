import { useState } from 'react';
import { flushSync } from 'react-dom';
import { Calendar, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Badge, Card } from './ui';
import { Reveal } from './Motion';

export function NewsSection() {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'news' | 'announcements'>('news');

  const dateLabels = {
    pt: {
      d5: '5 de Junho de 2025',
      d3: '3 de Junho de 2025',
      d1: '1 de Junho de 2025',
      d7: '7 de Junho de 2025',
      d4: '4 de Junho de 2025',
      d2: '2 de Junho de 2025',
    },
    en: {
      d5: 'June 5, 2025',
      d3: 'June 3, 2025',
      d1: 'June 1, 2025',
      d7: 'June 7, 2025',
      d4: 'June 4, 2025',
      d2: 'June 2, 2025',
    },
    id: {
      d5: '5 Juni 2025',
      d3: '3 Juni 2025',
      d1: '1 Juni 2025',
      d7: '7 Juni 2025',
      d4: '4 Juni 2025',
      d2: '2 Juni 2025',
    },
  }[language];

  const newsItems = [
    {
      title: t.news_scholarship_title,
      date: dateLabels.d5,
      time: '10:30 WIB',
      summary: t.news_scholarship_desc,
      category: t.category_education,
    },
    {
      title: t.news_app_title,
      date: dateLabels.d3,
      time: '14:00 WIB',
      summary: t.news_app_desc,
      category: t.category_technology,
    },
    {
      title: t.news_festival_title,
      date: dateLabels.d1,
      time: '09:00 WIB',
      summary: t.news_festival_desc,
      category: t.category_culture,
    },
  ];

  const announcementItems = [
    {
      title: t.announce_holiday_title,
      date: dateLabels.d7,
      time: '08:00 WIB',
      summary: t.announce_holiday_desc,
      priority: t.priority_important,
      important: true,
    },
    {
      title: t.announce_infrastructure_title,
      date: dateLabels.d4,
      time: '07:00 WIB',
      summary: t.announce_infrastructure_desc,
      priority: t.priority_info,
      important: false,
    },
    {
      title: t.announce_health_title,
      date: dateLabels.d2,
      time: '11:00 WIB',
      summary: t.announce_health_desc,
      priority: t.priority_info,
      important: false,
    },
  ];

  const handleTabChange = (nextTab: 'news' | 'announcements') => {
    if (nextTab === activeTab) return;
    if (!document.startViewTransition) {
      setActiveTab(nextTab);
      return;
    }
    document.startViewTransition(() => {
      flushSync(() => {
        setActiveTab(nextTab);
      });
    });
  };

  return (
    <section id="noticias" className="py-16 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <Reveal className="text-center mb-12" initialY={24}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            {t.news_title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.news_desc}
          </p>
        </Reveal>

        <div className="max-w-4xl mx-auto flex flex-col gap-2">
          {/* Tabs List */}
          <div
            role="tablist"
            className="bg-muted text-muted-foreground grid w-full grid-cols-2 h-10 items-center justify-center rounded-xl p-[3px] mb-8"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'news'}
              onClick={() => handleTabChange('news')}
              className={`inline-flex h-full flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'news'
                  ? 'bg-card text-foreground shadow-xs'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {t.news_tab}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'announcements'}
              onClick={() => handleTabChange('announcements')}
              className={`inline-flex h-full flex-1 items-center justify-center gap-1.5 rounded-xl border border-transparent px-3 py-1 text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'announcements'
                  ? 'bg-card text-foreground shadow-xs'
                  : 'text-foreground/70 hover:text-foreground'
              }`}
            >
              {t.announcements_tab}
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === 'news' ? (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              {newsItems.map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.08} initialY={16} hoverY={-3}>
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="secondary">{item.category}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          {item.summary}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {item.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
              {announcementItems.map((item, idx) => (
                <Reveal key={idx} delay={idx * 0.08} initialY={16} hoverY={-3}>
                  <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant={item.important ? 'destructive' : 'secondary'}
                          >
                            {item.priority}
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          {item.summary}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {item.date}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.time}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
