import { useState } from 'react';
import {
  Globe,
  Mail,
  MapPin,
  Moon,
  Phone,
  Sun,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Button, SurfaceCard } from './ui';

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export function Footer() {
  const [fontSize, setFontSize] = useState<'small' | 'normal' | 'large'>('normal');
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const handleFontSize = (size: 'small' | 'normal' | 'large') => {
    setFontSize(size);
    const root = document.documentElement;
    if (size === 'small') root.style.fontSize = '14px';
    if (size === 'normal') root.style.fontSize = '16px';
    if (size === 'large') root.style.fontSize = '18px';
    localStorage.setItem('fontSize', size);
  };

  return (
    <footer className="bg-muted dark:bg-muted border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              {t.contact_us}
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-muted-foreground" />
                <div className="text-muted-foreground">
                  <p>Paço Municipal (Balai Kota Medan)</p>
                  <p>Jl. Balai Kota No.1, Kesawan</p>
                  <p>Medan Barat, Cidade de Medan</p>
                  <p>Sumatra do Norte 20111</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">(061) 4515000</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  info@pemkotmedan.go.id
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  www.pemkotmedan.go.id
                </span>
              </div>
            </div>
          </div>

          {/* Main Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              {t.main_services}
            </h3>
            <ul className="space-y-2 text-sm">
              {t.footer_services_list.map((item) => (
                <li key={item}>
                  <a
                    href="#servicos"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              {t.information}
            </h3>
            <ul className="space-y-2 text-sm">
              {t.footer_info_list.map((item) => (
                <li key={item}>
                  <a
                    href="#noticias"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Transparency & Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              {t.transparency}
            </h3>
            <ul className="space-y-2 text-sm mb-6">
              {t.footer_transparency_list.map((item) => (
                <li key={item}>
                  <a
                    href="#transparencia"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-sm font-medium mb-3 text-foreground">
              {t.social_media}
            </h4>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="ghost"
                aria-label="Facebook"
                className="w-8 h-8 p-0 text-muted-foreground hover:bg-primary hover:text-primary-foreground"
              >
                <FacebookIcon className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                aria-label="Twitter"
                className="w-8 h-8 p-0 text-muted-foreground hover:bg-primary hover:text-primary-foreground"
              >
                <TwitterIcon className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                aria-label="Instagram"
                className="w-8 h-8 p-0 text-muted-foreground hover:bg-primary hover:text-primary-foreground"
              >
                <InstagramIcon className="w-4 h-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                aria-label="YouTube"
                className="w-8 h-8 p-0 text-muted-foreground hover:bg-primary hover:text-primary-foreground"
              >
                <YoutubeIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="bg-border h-px w-full mb-8" />

        {/* Interactive Accessibility Panel */}
        <SurfaceCard variant="footer" hover={false} className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-foreground">
            {t.accessibility}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Text Size */}
            <div>
              <h4 className="text-sm font-medium mb-2 text-foreground">
                {t.text_size}
              </h4>
              <div className="flex gap-2">
                {(['small', 'normal', 'large'] as const).map((sz, i) => (
                  <Button
                    key={sz}
                    size="sm"
                    variant="outline"
                    onClick={() => handleFontSize(sz)}
                    className={`${
                      i === 0 ? 'text-xs' : i === 1 ? 'text-sm' : 'text-base'
                    } border-2 border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary ${
                      fontSize === sz
                        ? 'bg-primary text-primary-foreground border-primary'
                        : ''
                    }`}
                  >
                    {i === 0 ? 'A-' : i === 1 ? 'A' : 'A+'}
                  </Button>
                ))}
              </div>
            </div>

            {/* Display Mode */}
            <div>
              <h4 className="text-sm font-medium mb-2 text-foreground">
                {t.display_mode}
              </h4>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setTheme('light')}
                  className={`border-2 border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary ${
                    theme === 'light'
                      ? 'bg-primary text-primary-foreground border-primary'
                      : ''
                  }`}
                >
                  <Sun className="w-4 h-4 mr-1" />
                  {t.light}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setTheme('dark')}
                  className={`border-2 border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary ${
                    theme === 'dark'
                      ? 'bg-primary text-primary-foreground border-primary'
                      : ''
                  }`}
                >
                  <Moon className="w-4 h-4 mr-1" />
                  {t.dark}
                </Button>
              </div>
            </div>

            {/* Language Switcher */}
            <div>
              <h4 className="text-sm font-medium mb-2 text-foreground">
                {t.language}
              </h4>
              <div className="flex flex-wrap gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setLanguage('pt')}
                  className={`border-2 border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary ${
                    language === 'pt'
                      ? 'bg-primary text-primary-foreground border-primary'
                      : ''
                  }`}
                >
                  🇧🇷 PT
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setLanguage('en')}
                  className={`border-2 border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary ${
                    language === 'en'
                      ? 'bg-primary text-primary-foreground border-primary'
                      : ''
                  }`}
                >
                  🇬🇧 EN
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setLanguage('id')}
                  className={`border-2 border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary ${
                    language === 'id'
                      ? 'bg-primary text-primary-foreground border-primary'
                      : ''
                  }`}
                >
                  🇮🇩 ID
                </Button>
              </div>
            </div>

            {/* Disability Support */}
            <div>
              <h4 className="text-sm font-medium mb-2 text-foreground">
                {t.disability_support}
              </h4>
              <Button
                size="sm"
                variant="outline"
                className="border-2 border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary"
              >
                {t.access_guide}
              </Button>
            </div>
          </div>
        </SurfaceCard>

        {/* Bottom Copyright & Legal */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© {t.copyright}</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#inicio" className="hover:text-primary transition-colors">
              {t.privacy_policy}
            </a>
            <span>|</span>
            <a href="#inicio" className="hover:text-primary transition-colors">
              {t.terms_conditions}
            </a>
            <span>|</span>
            <a href="#inicio" className="hover:text-primary transition-colors">
              {t.sitemap}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
