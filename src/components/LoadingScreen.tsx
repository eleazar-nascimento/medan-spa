import { useLanguage } from '../context/LanguageContext';

export function LoadingScreen() {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-700">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full border-2 border-muted" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary to-emerald-600 animate-loader-breath" />
        </div>

        <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
          <h2 className="text-xl mb-2 font-semibold text-foreground">
            {t.loading_title}
          </h2>
          <p className="text-muted-foreground text-sm">{t.loading_subtitle}</p>
        </div>
      </div>
    </div>
  );
}
