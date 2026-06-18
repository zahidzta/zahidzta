import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Code Snippet Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-surface-dim/80 backdrop-blur-[2px] z-10"></div>
        {/* We use a placeholder image resembling code for the background */}
        <img
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2370&auto=format&fit=crop"
          alt="Code background"
          className="w-full h-full object-cover opacity-30"
        />
        {/* Subtle gradient overlay to blend with the background color */}
        <div className="absolute inset-0 bg-linear-to-t from-surface-dim via-transparent to-transparent z-10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
        <div className="max-w-3xl">
          <h1 className="text-3xl min-[375px]:text-4xl min-[480px]:text-5xl md:text-7xl lg:text-[80px] font-black uppercase tracking-tighter leading-[1.1] text-white mb-4">
            {t('hero.title')}
            <span className="block text-primary mt-2">{t('hero.role1')}</span>
            <span className="block text-primary">{t('hero.role2')}</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-xl leading-relaxed">
            {t('hero.desc')}
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Button href="#proyectos" variant="solid">
              {t('hero.btnProjects')}
            </Button>
            <Button href="#contacto" variant="outline">
              {t('hero.btnContact')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
