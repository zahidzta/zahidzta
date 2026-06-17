import type { Project } from '../../data/content';
import { Button } from './Button';
import { useLanguage } from '../../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { language, t } = useLanguage();

  return (
    <article className="flex flex-col bg-surface border border-white/5 rounded-2xl overflow-hidden group hover:border-white/10 transition-colors">
      <div className="relative h-64 overflow-hidden bg-slate-900">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-surface to-transparent opacity-80"></div>
      </div>

      <div className="p-8 flex flex-col grow">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-slate-300">
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-display font-bold text-white mb-3">
          {project.title}
        </h3>

        <p className="text-slate-400 mb-8 grow">
          {language === 'es' ? project.description_es : project.description_en}
        </p>

        <div className="flex items-center gap-4 mt-auto">
          {project.githubUrl && project.githubUrl !== '#' && (
            <Button href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="outline" className="px-5 py-2.5 text-sm w-full">
              {t('projects.viewCode')}
            </Button>
          )}
          {project.liveUrl && project.liveUrl !== '#' && (
            <Button href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="solid" className="px-5 py-2.5 text-sm w-full">
              {t('projects.viewLive')}
            </Button>
          )}
          {project.downloadUrl && project.downloadUrl !== '#' && (
            <Button href={project.downloadUrl} download={"Renta_de_Autos_Zeta_CR.zip"} target="_blank" rel="noopener noreferrer" variant="solid" className="px-5 py-2.5 text-sm w-full">
              {t('projects.download')}
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
