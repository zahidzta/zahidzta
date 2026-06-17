import { useState } from 'react';
import { projects } from '../../data/content';
import type { ProjectTag } from '../../data/content';
import { ProjectCard } from '../ui/ProjectCard';
import { TagInput } from '../ui/TagInput';
import { useLanguage } from '../../context/LanguageContext';

export function Projects() {
  const [selectedTags, setSelectedTags] = useState<ProjectTag[]>([]);
  const { t } = useLanguage();

  // Filter projects based on selected tags.
  // If no tags selected, show all projects.
  // If tags selected, a project must have ALL selected tags (or AT LEAST ONE, depending on logic. Let's do AT LEAST ONE for broader filtering, or ALL for strict filtering. Let's go with AT LEAST ONE for better UX).
  const filteredProjects = selectedTags.length === 0 
    ? projects 
    : projects.filter(project => 
        project.tags.some(tag => selectedTags.includes(tag))
      );

  return (
    <section id="proyectos" className="py-24 bg-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-8">
            {t('projects.title')}
            <div className="h-1.5 w-24 bg-primary mt-4"></div>
          </h2>

          <TagInput 
            selectedTags={selectedTags} 
            onChange={setSelectedTags} 
          />
        </div>

        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-surface-dim rounded-2xl border border-white/5">
            <p className="text-slate-400 text-lg">{t('projects.noResults')}</p>
            <button 
              onClick={() => setSelectedTags([])}
              className="mt-4 text-primary hover:underline"
            >
              {t('projects.clearFilters')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {filteredProjects.map((project, index) => (
              <div key={project.id} className={index % 2 !== 0 ? "md:mt-16" : ""}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
