import { useState } from 'react';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Badge, Button, Card } from './ui';
import { Reveal } from './Motion';

export function AgendaSection() {
  const { language, t } = useLanguage();
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const dateLabels = {
    pt: {
      d8: '8 de Junho de 2025',
      d10: '10 de Junho de 2025',
      d15: '15 de Junho de 2025',
      loc1: 'Paço Municipal de Medan',
      loc2: 'Auditório da Prefeitura',
      loc3: 'Praça Merdeka (Lapangan Merdeka)',
    },
    en: {
      d8: 'June 8, 2025',
      d10: 'June 10, 2025',
      d15: 'June 15, 2025',
      loc1: 'Medan City Hall',
      loc2: 'City Gov Auditorium',
      loc3: 'Merdeka Square',
    },
    id: {
      d8: '8 Juni 2025',
      d10: '10 Juni 2025',
      d15: '15 Juni 2025',
      loc1: 'Balai Kota Medan',
      loc2: 'Auditorium Pemkot',
      loc3: 'Lapangan Merdeka',
    },
  }[language];

  const agendaItems = [
    {
      day: 8,
      title: t.agenda_meeting_title,
      date: dateLabels.d8,
      time: '09:00 - 12:00 WIB',
      location: dateLabels.loc1,
      type: t.meeting_type,
      participants: t.officials_participants,
    },
    {
      day: 10,
      title: t.agenda_dialog_title,
      date: dateLabels.d10,
      time: '14:00 - 17:00 WIB',
      location: dateLabels.loc2,
      type: t.public_dialog_type,
      participants: t.public_officials_participants,
    },
    {
      day: 15,
      title: t.agenda_smart_city_title,
      date: dateLabels.d15,
      time: '10:00 - 16:00 WIB',
      location: dateLabels.loc3,
      type: t.public_event_type,
      participants: t.all_citizens_participants,
    },
  ];

  const eventDays = [8, 10, 15];

  return (
    <section id="agenda" className="py-16 bg-secondary/20">
      <div className="container mx-auto px-4 max-w-7xl">
        <Reveal className="text-center mb-12" initialY={24}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
            {t.agenda_title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.agenda_desc}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive Calendar Widget */}
          <Reveal className="lg:col-span-1" initialY={24}>
            <Card className="p-6">
              <div className="text-center mb-4">
                <h3 className="text-lg font-semibold mb-3 text-foreground">
                  {t.agenda_month}
                </h3>

                <div className="grid grid-cols-7 gap-1 text-xs">
                  {t.weekdays.map((dayName) => (
                    <div
                      key={dayName}
                      className="p-2 text-center text-muted-foreground font-medium"
                    >
                      {dayName}
                    </div>
                  ))}

                  {Array.from({ length: 30 }, (_, i) => {
                    const day = i + 1;
                    const hasEvent = eventDays.includes(day);
                    const isToday = day === 7;
                    const isSelected = selectedDay === day;

                    return (
                      <button
                        type="button"
                        key={day}
                        onClick={() =>
                          setSelectedDay(selectedDay === day ? null : day)
                        }
                        className={`p-2 text-center rounded-md cursor-pointer transition-all ${
                          isToday
                            ? 'bg-primary text-white font-semibold shadow-xs'
                            : isSelected
                              ? 'ring-2 ring-primary bg-primary/20 text-primary font-semibold'
                              : hasEvent
                                ? 'bg-primary/10 text-primary font-medium hover:bg-primary/20'
                                : 'text-foreground hover:bg-secondary/70'
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>

                <div className="mt-5 space-y-2 text-xs text-left border-t pt-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-3 h-3 bg-primary rounded" />
                    <span>{t.agenda_today}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <div className="w-3 h-3 bg-primary/15 rounded border border-primary/30" />
                    <span>{t.agenda_has_event}</span>
                  </div>
                </div>
              </div>
            </Card>
          </Reveal>

          {/* Agenda Event List */}
          <div className="lg:col-span-2 space-y-4">
            {agendaItems.map((item, idx) => {
              const isHighlighted = selectedDay === item.day;
              return (
                <Reveal
                  key={item.title}
                  delay={idx * 0.1}
                  initialY={20}
                  hoverY={-3}
                >
                  <Card
                    className={`p-6 hover:shadow-lg transition-all duration-300 ${
                      isHighlighted
                        ? 'ring-2 ring-primary bg-primary/5'
                        : ''
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{item.type}</Badge>
                        </div>

                        <h3 className="text-lg font-semibold mb-3 text-foreground">
                          {item.title}
                        </h3>

                        <div className="space-y-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-primary/80" />
                            {item.date}
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-primary/80" />
                            {item.time}
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-primary/80" />
                            {item.location}
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-primary/80" />
                            {item.participants}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Reveal>
              );
            })}

            <div className="text-center pt-4">
              <Button
                variant="outline"
                onClick={() => setSelectedDay(null)}
              >
                <Calendar className="w-4 h-4 mr-2" />
                {t.view_all_agenda}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
