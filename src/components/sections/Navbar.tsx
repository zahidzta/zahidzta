import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleLanguage, t } = useLanguage();

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-5xl bg-surface/90 backdrop-blur-md border border-white/10 rounded-full h-16 flex items-center justify-between px-8 shadow-2xl">
        <a href="#" className="text-xl font-display font-black text-white tracking-tighter">
          Portfolio
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group">
            {t('nav.home')}
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#skills" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group">
            {t('nav.skills')}
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#proyectos" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group">
            {t('nav.projects')}
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <a href="#contacto" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors relative group">
            {t('nav.contact')}
            <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
          </a>
          <div className="w-px h-4 bg-slate-700"></div>
          <button onClick={toggleLanguage} className="text-sm font-semibold text-slate-300 hover:text-white">
            {t('nav.toggleLang')}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-surface-dim border-b border-white/5 py-4 px-6 flex flex-col gap-4 shadow-xl">
          <a href="#hero" className="text-lg font-medium text-slate-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
            {t('nav.home')}
          </a>
          <a href="#skills" className="text-lg font-medium text-slate-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
            {t('nav.skills')}
          </a>
          <a href="#proyectos" className="text-lg font-medium text-slate-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
            {t('nav.projects')}
          </a>
          <a href="#contacto" className="text-lg font-medium text-slate-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
            {t('nav.contact')}
          </a>
          <div className="h-px bg-white/5 my-1"></div>
          <button
            onClick={() => {
              toggleLanguage();
              setIsOpen(false);
            }}
            className="text-lg font-medium text-slate-300 hover:text-white text-left transition-colors cursor-pointer"
          >
            {t('nav.toggleLang')}
          </button>
        </div>
      )}
    </nav>
  );
}
