import { Send } from 'lucide-react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { Button } from '../ui/Button';
import { useLanguage } from '../../context/LanguageContext';

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { t } = useLanguage();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/zahidduron@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            Nombre: formData.get('name'),
            Email: formData.get('email'),
            Mensaje: formData.get('message'),
            _subject: "Nuevo mensaje desde tu Portafolio"
        })
      });

      if (response.ok) {
        alert(t('contact.success'));
        e.currentTarget.reset();
      } else {
        alert(t('contact.error'));
      }
    } catch (error) {
      alert(t('contact.error'));
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contacto" className="py-24 bg-surface-dim relative border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-16 flex flex-col items-center">
          {t('contact.title')}
          <div className="h-1.5 w-24 bg-white mt-4"></div>
        </h2>

        <form onSubmit={handleSubmit} className="bg-surface border border-white/5 rounded-3xl p-8 md:p-12 text-left shadow-2xl relative overflow-hidden">
          {/* Subtle accent line on top right corner */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-primary/20 blur-2xl"></div>
          
          <div className="space-y-8 relative z-10">
            <div className="group">
              <label htmlFor="name" className="block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">
                {t('contact.nameLabel')}
              </label>
              <div className="relative">
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  placeholder={t('contact.namePlaceholder')}
                  className="w-full bg-transparent border-b-2 border-slate-800 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-transparent peer"
                />
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 peer-focus:w-full peer-focus:left-0"></span>
              </div>
            </div>

            <div className="group">
              <label htmlFor="email" className="block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">
                {t('contact.emailLabel')}
              </label>
              <div className="relative">
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  placeholder={t('contact.emailPlaceholder')}
                  className="w-full bg-transparent border-b-2 border-slate-800 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-transparent peer"
                />
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 peer-focus:w-full peer-focus:left-0"></span>
              </div>
            </div>

            <div className="group">
              <label htmlFor="message" className="block text-xs font-semibold tracking-widest text-slate-500 uppercase mb-2">
                {t('contact.messageLabel')}
              </label>
              <div className="relative">
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={4}
                  placeholder={t('contact.messagePlaceholder')}
                  className="w-full bg-transparent border-b-2 border-slate-800 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-transparent peer resize-none"
                ></textarea>
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary transition-all duration-300 peer-focus:w-full peer-focus:left-0"></span>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit" variant="solid" disabled={isSubmitting} className="flex items-center gap-2 group/btn">
                {isSubmitting ? t('contact.sending') : t('contact.sendBtn')}
                {!isSubmitting && <Send size={18} className="group-hover/btn:translate-x-1 transition-transform" />}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
