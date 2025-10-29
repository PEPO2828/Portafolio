
import { settings } from '../data/settings.js';

export const Footer = () => {
  const { name } = settings;
  return `
    <footer class="mx-auto max-w-6xl px-5 pb-12 text-xs text-neutral-500">
      © <span id="year">${new Date().getFullYear()}</span> ${name} — built with care by <b>pepo</b>.
    </footer>
  `;
};
