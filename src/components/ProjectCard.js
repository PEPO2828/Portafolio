
import { Button } from './Button.js';
import { Icon } from './Icon.js';

const getTagWithEmoji = (tag) => {
  const emojiMap = {
    'HTML': '🌐',
    'CSS': '🎨',
    'JavaScript': '📜',
    'Chart.js': '📊',
    'Leaflet': '🗺️',
    'SuiteScript': '💼',
    'ERP': '🏭',
    'SQL': '💾',
    'Unity': '🎮'
  };
  return `${emojiMap[tag] || ''} ${tag}`;
};

export const ProjectCard = (p) => {
  const demoLink = p.links.find(link => link.type === 'demo');
  const codeLink = p.links.find(link => link.type === 'code');
  const caseStudyLink = p.links.find(link => link.type === 'case-study');

  return `
    <article class="tilt relative rounded-2xl border border-base-line card holo p-5 hover:shadow-[0_0_12px_rgba(56,189,248,.25)] transition">
      ${p.image ? `<img src="${p.image}" alt="${p.title} thumbnail" class="w-full h-40 object-cover rounded-lg mb-4">` : ''}
      <div class="flex items-start justify-between gap-3">
        <h3 class="font-medium leading-tight">${p.title}</h3>
        <span class="text-xs text-neutral-400">${p.year}</span>
      </div>
      <p class="mt-2 text-sm text-neutral-300">${p.summary}</p>
      ${p.metrics?.length ? `<div class='mt-3 flex flex-wrap gap-2 text-xs'>${p.metrics.map(m => `<span class='px-2 py-1 rounded-full border border-base-line'>${m}</span>`).join('')}</div>` : ''}
      <div class="mt-3 flex flex-wrap gap-2 text-xs">
        ${p.tags.map(t => `<span class='px-2 py-1 rounded-full border border-base-line'>${getTagWithEmoji(t)}</span>`).join('')}
      </div>
      <div class="mt-4 flex flex-wrap gap-3 text-sm">
        ${demoLink ? Button({ href: demoLink.url, label: 'Ver Demo (Frontend)', variant: 'neon', icon: 'play-circle-outline' }) : ''}
        ${codeLink ? Button({ href: codeLink.url, label: 'Código (GitHub)', variant: 'neon', icon: 'github' }) : ''}
        ${caseStudyLink ? Button({ href: caseStudyLink.url, label: 'Caso de Estudio (IAC Sídney)', variant: 'neon', icon: 'file-document-outline' }) : ''}
      </div>
    </article>
  `;
};
