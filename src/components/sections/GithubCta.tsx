import { Code2, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export function GithubCta() {
  const { t } = useLanguage();

  return (
    <section className="py-24 relative overflow-hidden bg-primary/10">
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-surface z-0"></div>
      
      {/* Shimmer / Foil Effect on the background */}
      <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-transparent via-primary/20 to-transparent animate-shimmer pointer-events-none z-0 mix-blend-color-dodge"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-surface-dim/40 border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_50px_rgba(0,122,255,0.1)] flex flex-col md:flex-row items-center gap-8 md:gap-12 backdrop-blur-2xl">

          <div className="shrink-0 w-20 h-20 bg-primary/20 rounded-2xl flex items-center justify-center border border-primary/30">
            <Code2 size={40} className="text-primary" />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-3">
              {t('github.title')}
            </h2>
            <p className="text-slate-400 text-lg">
              {t('github.desc')}
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <a
              href="https://github.com/zahidzta"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors shadow-lg hover:shadow-white/20"
            >
              <ExternalLink size={20} />
              {t('github.btn')}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
