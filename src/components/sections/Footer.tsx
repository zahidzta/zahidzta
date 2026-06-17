import { useLanguage } from '../../context/LanguageContext';

export function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-surface-dim border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="text-3xl font-display font-black text-white tracking-tighter">
          {t('footer.title')}
        </div>

        <p className="text-slate-500 text-sm">
          &copy; {year} Portfolio. {t('footer.rights')}
        </p>

        <div className="flex items-center gap-6">
          <a href="https://github.com/zahidzta" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
            GitHub
          </a>
        </div>

      </div>
    </footer>
  );
}
