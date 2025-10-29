
import { projects } from '../data/projects.js';
import { ProjectCard } from '../components/ProjectCard.js';

export const Work = () => {
  const tags = ['All', ...new Set(projects.flatMap(p => p.tags))];

  return `
    <section id="work" class="py-10" aria-labelledby="work-title">
      <div class="flex items-end justify-between">
        <h2 id="work-title" class="text-2xl font-semibold tracking-tight">Selected work (case studies)</h2>
        <div class="flex gap-2 text-xs" role="tablist" aria-label="Filter work">
          ${tags.map((tag, i) => `
            <button data-filter="${tag}" role="tab" aria-selected="${i === 0}"
              class="px-3 py-1.5 rounded-full border border-base-line hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-fuchsia-400">
              ${tag}
            </button>
          `).join('')}
        </div>
      </div>
      <p class="mt-2 text-sm text-neutral-400">Short stories of what I built, why, and the impact.</p>
      <div id="projectGrid" class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        ${projects.map(ProjectCard).join('')}
      </div>
    </section>
  `;
};
