import { useState } from 'react';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Card } from './ui';
import { Reveal } from './Motion';

function CitizenAvatar({ src, name }: { src: string; name: string }) {
  const [imgError, setImgError] = useState(false);
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('');

  return (
    <div className="relative flex size-12 shrink-0 overflow-hidden rounded-full bg-muted items-center justify-center font-medium text-sm text-foreground">
      {!imgError ? (
        <img
          src={src}
          alt={name}
          onError={() => setImgError(true)}
          className="aspect-square size-full object-cover"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}

export function TestimonialsSection() {
  const { t } = useLanguage();

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, idx) => (
      <Star
        key={idx}
        className={`w-4 h-4 ${
          idx < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-muted-foreground/30'
        }`}
      />
    ));

  return (
    <section className="py-16 bg-gradient-to-br from-emerald-50 dark:from-emerald-900/20 to-primary/5 dark:to-primary/10">
      <div className="container mx-auto px-4 max-w-7xl">
        <Reveal className="text-center mb-12" initialY={24}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            {t.testimonials_title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.testimonials_desc}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.testimonials_list.map((item, idx) => (
            <Reveal
              key={item.name}
              delay={idx * 0.08}
              initialY={24}
              hoverY={-4}
            >
              <Card className="p-6 hover:shadow-lg transition-all duration-300 bg-card h-full">
                <div className="flex items-center gap-4 mb-4">
                  <CitizenAvatar src={item.avatar} name={item.name} />
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">
                      {item.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {renderStars(item.rating)}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-6 h-6 text-primary/20" />
                  <p className="text-sm text-muted-foreground italic pl-4">
                    "{item.comment}"
                  </p>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-12" initialY={20}>
          <p className="text-muted-foreground mb-4">{t.testimonials_question}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm cursor-pointer shadow-xs"
            >
              {t.testimonials_cta_1}
            </button>
            <button
              type="button"
              className="px-6 py-2.5 border border-primary text-primary rounded-lg hover:bg-primary/5 transition-colors font-medium text-sm cursor-pointer"
            >
              {t.testimonials_cta_2}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
