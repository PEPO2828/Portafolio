
import { settings } from '../data/settings.js';
import { Button } from '../components/Button.js';

export const Contact = () => {
  const { email, socials } = settings;

  return `
    <section id="contact" class="py-10" aria-labelledby="contact-title">
      <h2 id="contact-title" class="text-2xl font-semibold tracking-tight">Contact</h2>
      <div class="mt-4 max-w-xl rounded-2xl border border-base-line card p-6" data-reveal>
        <p class="text-neutral-300">Let’s build something together:</p>
        <div class="mt-3 flex items-center gap-3">
          <a id="emailLink" class="underline decoration-dotted" href="mailto:${email}" aria-label="Email link">${email}</a>
          <button id="copyEmail" class="text-xs px-2 py-1 rounded-full border border-base-line hover:bg-white/5 neon-btn" type="button">Copy</button>
          <span id="copiedMsg" class="text-xs text-green-400 opacity-0 transition-opacity" aria-live="polite">Copied ✓</span>
        </div>
        <div class="mt-4 flex flex-wrap gap-3">
          ${Button({ href: socials.linkedin, label: 'LinkedIn', icon: 'linkedin', style: 'color:#0A66C2' })}
          ${Button({ href: socials.github, label: 'GitHub', icon: 'github' })}
          ${Button({ href: socials.instagram, label: 'Instagram', icon: 'instagram', style: 'color:#E4405F' })}
        </div>
      </div>
    </section>
  `;
};
