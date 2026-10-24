import { useEffect, useRef, useState } from 'react';
import {
  Bell,
  ChevronDown,
  Globe,
  Menu,
  Moon,
  Search,
  Sun,
  X,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Badge, Button, Input } from './ui';

interface NavbarProps {
  onSelectService?: (serviceTitle: string) => void;
}

export function Navbar({ onSelectService }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState<string>('home');
  const headerRef = useRef<HTMLElement>(null);

  const { theme, toggleTheme } = useTheme();
  const { language, cycleLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', name: t.home, href: '#inicio' },
    {
      id: 'services',
      name: t.services,
      href: '#servicos',
      hasDropdown: true,
      dropdownItems: [
        { name: t.documents, href: '#servicos' },
        { name: t.permits, href: '#servicos' },
        { name: t.tax, href: '#servicos' },
        { name: t.complaints, href: '#servicos' },
      ],
    },
    { id: 'news', name: t.news, href: '#noticias' },
    { id: 'data', name: t.data, href: '#transparencia' },
    { id: 'info', name: t.info, href: '#agenda' },
  ];

  useEffect(() => {
    const supportsScrollTimeline =
      typeof CSS !== 'undefined' &&
      CSS.supports('(animation-timeline: scroll()) and (animation-range: 0% 100%)');

    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 10);

      // Fallback for browsers that don't support CSS scroll-driven shrinking header
      if (!supportsScrollTimeline && headerRef.current) {
        const initialHeight = 64;
        const finalHeight = 56;
        const scrollDistance = 150;
        const scrollPercent = Math.min(1, y / scrollDistance);
        const newHeight = initialHeight - (initialHeight - finalHeight) * scrollPercent;
        headerRef.current.style.height = `${newHeight}px`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredSuggestions = t.search_suggestions
    .filter((item) => item.toLowerCase().includes(searchQuery.toLowerCase()))
    .slice(0, 4);

  return (
    <header
      ref={headerRef}
      className={`site-header fixed top-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-sm border-b'
          : 'bg-background/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Brand Logo */}
          <a
            href="#inicio"
            onClick={() => setActiveNav('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
              <img
                src="/logo-medan.png"
                alt="Logo Kota Medan"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-base font-semibold text-foreground">
                {t.loading_title}
              </h1>
            </div>
          </a>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-6 relative">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder={t.search_placeholder}
                className="pl-10 pr-4 h-9 bg-secondary/50 border-0 rounded-lg text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setTimeout(() => setSearchFocused(false), 180)}
              />
              {searchFocused && searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-card rounded-lg shadow-lg border z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="py-1">
                    {filteredSuggestions.length > 0 ? (
                      filteredSuggestions.map((suggestion) => (
                        <div
                          key={suggestion}
                          onMouseDown={() => {
                            setSearchQuery(suggestion);
                            onSelectService?.(suggestion);
                          }}
                          className="px-3 py-2 hover:bg-secondary/50 cursor-pointer text-sm text-foreground flex items-center justify-between"
                        >
                          <span>{suggestion}</span>
                          <span className="text-xs text-primary">→</span>
                        </div>
                      ))
                    ) : (
                      <div className="px-3 py-2 text-xs text-muted-foreground">
                        Nenhum resultado encontrado
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setOpenDropdown(item.id)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={() => setActiveNav(item.id)}
                  className={`flex items-center gap-1 px-3 py-2 text-sm rounded-lg transition-colors ${
                    activeNav === item.id
                      ? 'text-primary bg-primary/10 font-medium'
                      : 'text-foreground hover:text-primary hover:bg-secondary/50'
                  }`}
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                </a>

                {item.hasDropdown && openDropdown === item.id && (
                  <div className="absolute top-full left-0 pt-1 w-40 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="bg-white dark:bg-card rounded-lg shadow-lg border py-1">
                      {item.dropdownItems?.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => {
                            setOpenDropdown(null);
                            onSelectService?.(subItem.name);
                          }}
                          className="block px-3 py-2 text-sm text-foreground hover:bg-secondary/50 hover:text-primary transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="relative w-8 h-8 p-0"
              aria-label="Notificações"
            >
              <Bell className="w-4 h-4" />
              <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 text-[10px] bg-destructive text-white flex items-center justify-center rounded-full">
                3
              </Badge>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0"
              onClick={toggleTheme}
              aria-label={t.display_mode}
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="px-2 h-8"
              onClick={cycleLanguage}
              title={t.language}
            >
              <Globe className="w-4 h-4 mr-1" />
              <span className="text-xs font-semibold">{language.toUpperCase()}</span>
            </Button>

            <Button
              size="sm"
              className="px-3 h-8 text-xs"
              onClick={() => onSelectService?.(t.login)}
            >
              {t.login}
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="w-8 h-8 p-0"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar when closed */}
        {!mobileMenuOpen && (
          <div className="md:hidden pb-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder={t.search_placeholder}
                className="pl-10 pr-4 h-9 bg-secondary/50 border-0 rounded-lg text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        )}

        {/* Mobile Expandable Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="bg-white dark:bg-card rounded-lg p-3 mt-2 border shadow-sm">
              <div className="mb-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder={t.search_placeholder}
                    className="pl-10 pr-4 h-9 bg-secondary/50 border-0 rounded-lg text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>

              <nav className="space-y-1">
                {navItems.map((item) => (
                  <div key={item.id}>
                    <a
                      href={item.href}
                      onClick={() => {
                        setActiveNav(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between py-2 px-2 rounded-lg text-sm transition-colors ${
                        activeNav === item.id
                          ? 'text-primary bg-primary/10 font-medium'
                          : 'text-foreground hover:bg-secondary/50'
                      }`}
                    >
                      <span>{item.name}</span>
                      {item.hasDropdown && <ChevronDown className="w-3 h-3" />}
                    </a>
                    {item.hasDropdown && (
                      <div className="ml-3 mt-1 space-y-1">
                        {item.dropdownItems?.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              onSelectService?.(subItem.name);
                            }}
                            className="block py-1 px-2 rounded text-sm text-muted-foreground hover:text-foreground"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="flex items-center justify-between pt-3 mt-3 border-t">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs"
                  onClick={cycleLanguage}
                >
                  <Globe className="w-3 h-3 mr-1" />
                  {language === 'pt'
                    ? 'Português'
                    : language === 'en'
                      ? 'English'
                      : 'Indonesia'}
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-xs"
                  onClick={toggleTheme}
                >
                  {theme === 'light' ? (
                    <Moon className="w-3 h-3 mr-1" />
                  ) : (
                    <Sun className="w-3 h-3 mr-1" />
                  )}
                  {theme === 'light' ? t.dark : t.light}
                </Button>

                <Button variant="ghost" size="sm" className="relative text-xs">
                  <Bell className="w-3 h-3 mr-1" />
                  Notif
                  <Badge className="absolute -top-1 -right-1 w-3.5 h-3.5 p-0 text-[10px] bg-destructive text-white flex items-center justify-center rounded-full">
                    3
                  </Badge>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
