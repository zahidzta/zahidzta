import { useState, useRef } from 'react';
import type { KeyboardEvent } from 'react';
import { X } from 'lucide-react';
import { projectTags } from '../../data/content';
import type { ProjectTag } from '../../data/content';
import { useLanguage } from '../../context/LanguageContext';

interface TagInputProps {
  selectedTags: ProjectTag[];
  onChange: (tags: ProjectTag[]) => void;
}

export function TagInput({ selectedTags, onChange }: TagInputProps) {
  const [inputValue, setInputValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when clicking container
  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === 'Backspace' && inputValue === '' && selectedTags.length > 0) {
      removeTag(selectedTags[selectedTags.length - 1]);
    }
  };

  const addTag = (tagStr: string) => {
    const trimmed = tagStr.trim().toLowerCase();
    if (!trimmed) return;

    // Check if valid tag
    if (projectTags.includes(trimmed as ProjectTag)) {
      if (!selectedTags.includes(trimmed as ProjectTag)) {
        onChange([...selectedTags, trimmed as ProjectTag]);
      }
    } else {
      // If the user tries to type something not in the list, maybe we just clear or show a tiny flash
      // For now, let's just clear it if it's invalid. Or add it if we want arbitrary tags.
      // The requirement says "the tags will be: frontend, backend, API, tailwindcss"
      // So we restrict to valid tags.
    }
    setInputValue('');
  };

  const removeTag = (tagToRemove: ProjectTag) => {
    onChange(selectedTags.filter(t => t !== tagToRemove));
  };

  const toggleTag = (tag: ProjectTag) => {
    if (selectedTags.includes(tag)) {
      removeTag(tag);
    } else {
      onChange([...selectedTags, tag]);
    }
  }

  const { t } = useLanguage();

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 space-y-3">
      <label className="block text-slate-300 font-display font-medium mb-2">{t('projects.tagsLabel')}</label>

      {/* The actual Tag Input Box */}
      <div
        onClick={handleContainerClick}
        className={`flex flex-wrap items-center gap-2 p-3 min-h-14 rounded-lg border-2 transition-colors cursor-text ${isFocused ? 'border-primary bg-surface/80' : 'border-slate-800 bg-surface/50'
          }`}
      >
        {selectedTags.map(tag => (
          <span
            key={tag}
            className="flex items-center gap-1.5 px-3 py-1 bg-slate-200 text-slate-900 rounded-full text-sm font-medium animate-in zoom-in duration-200"
          >
            {tag}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); removeTag(tag); }}
              className="w-4 h-4 rounded-full bg-slate-800 text-white flex items-center justify-center hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <X size={10} strokeWidth={3} />
            </button>
          </span>
        ))}

        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => {
            setIsFocused(false);
            if (inputValue) addTag(inputValue);
          }}
          placeholder={selectedTags.length === 0 ? t('projects.tagsPlaceholder') : t('projects.tagsType')}
          className="flex-1 min-w-30 bg-transparent outline-none text-slate-200 placeholder-slate-500 text-sm"
        />
      </div>

      {/* Suggested Tags (Available tags not yet selected) */}
      <div className="flex flex-wrap gap-2 pt-2">
        {projectTags.map(tag => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${selectedTags.includes(tag)
                ? 'bg-primary/20 border-primary text-primary'
                : 'bg-slate-800/50 border-slate-700 text-slate-400 hover:text-slate-200 hover:border-slate-500'
              }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
}
