import { settings } from '../data/settings.js';
import { SkillBadge } from '../components/SkillBadge.js';

export const Skills = () => {
  const { skills } = settings;

  return `
    <section id="skills" class="py-10" aria-labelledby="skills-title">
      <h2 id="skills-title" class="text-2xl font-semibold tracking-tight">Skills</h2>
      <div class="mt-3 flex flex-wrap gap-2 text-base" data-reveal>
        ${skills.map(skill => SkillBadge({ skill })).join('')}
      </div>
    </section>
  `;
};
