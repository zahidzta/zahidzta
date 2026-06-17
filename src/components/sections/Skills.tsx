import { skills } from '../../data/content';
import { useLanguage } from '../../context/LanguageContext';

const MarqueeRow = ({ items, reverse = false }: { items: string[], reverse?: boolean }) => {
  const animateClass = reverse ? 'animate-marquee-reverse' : 'animate-marquee';

  return (
    <div className="flex overflow-hidden relative w-full group py-2">
      <div className={`flex w-max shrink-0 gap-4 md:gap-6 px-2 md:px-3 ${animateClass} hover:[animation-play-state:paused]`}>
        {[...items, ...items].map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="px-6 py-3 md:px-8 md:py-4 bg-surface rounded-2xl text-base md:text-xl font-bold text-slate-300 border border-white/5 shadow-sm whitespace-nowrap flex items-center justify-center hover:border-primary/50 hover:text-white transition-colors cursor-default"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}


export function Skills() {
  const midpoint = Math.ceil(skills.length / 2);
  const row1 = skills.slice(0, midpoint);
  const row2 = skills.slice(midpoint);
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 bg-surface-dim relative border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center md:text-left">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-6 flex flex-col items-center md:items-start">
            {t('skills.title')}
            <div className="h-1.5 w-24 bg-primary mt-4"></div>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            {t('skills.desc')}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4 overflow-hidden w-full relative">
        {/* Subtle gradient masks for the edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-linear-to-r from-surface-dim to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-linear-to-l from-surface-dim to-transparent z-10 pointer-events-none"></div>

        <MarqueeRow items={row1} />
        <MarqueeRow items={row2} reverse />
      </div>
    </section>
  );
}
