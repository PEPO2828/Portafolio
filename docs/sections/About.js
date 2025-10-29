
import { settings } from '../data/settings.js';

export const About = () => {
  const { about } = settings;

  return `
    <section id="about" class="py-10" aria-labelledby="about-title">
      <h2 id="about-title" class="text-2xl font-semibold tracking-tight">About</h2>
      <p class="mt-3 text-neutral-300 max-w-3xl" data-reveal>
        ${about.blurb}
      </p>
    </section>
  `;
};
