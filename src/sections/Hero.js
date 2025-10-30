
import { settings } from '../data/settings.js';
import { Button } from '../components/Button.js';
import heroImage from '../assets/images/imagen.png';

export const Hero = () => {
  const { name, jobTitle, location, availability, hero, cv, socials } = settings;

  return `
    <section class="py-14 md:py-20" aria-labelledby="hero-title">
      <div class="grid md:grid-cols-[340px_1fr] gap-8 items-center">
        <div class="order-1 md:order-1 relative flex justify-center md:justify-start md:-ml-8 lg:-ml-10" data-reveal>
          <div class="absolute -inset-10 md:-inset-14 rounded-[36px] blur-3xl opacity-60 pointer-events-none
                      bg-gradient-to-tr from-sky-400/20 via-fuchsia-400/15 to-transparent" aria-hidden="true"></div>
          <div class="relative w-[260px] md:w-[340px] aspect-square">
            <img
                src="${heroImage}"
                alt="${name} — portrait"
                class="w-full h-full object-contain"
                style="
                  object-position:50% 35%;
                  filter: drop-shadow(0 22px 46px rgba(0,0,0,.45)) drop-shadow(0 0 16px rgba(99,102,241,.25));
                  transform: scale(1.08);
                  mask-image: radial-gradient(circle at 50% 50%, black 50%, transparent 80%);
                "
                width="680" height="680"
                loading="lazy" decoding="async">
            <span aria-hidden="true"
              class="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 w-[68%] h-6 opacity-35"
              style="background:radial-gradient(50% 100% at 50% 50%, rgba(0,0,0,.55), transparent 70%);">
            </span>
          </div>

          <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 md:hidden text-xs text-neutral-400">
            ${availability}
          </div>
        </div>
        <div class="order-2 md:order-2">
          <p class="text-sm text-neutral-400">${jobTitle} — ${hero.subtitle} · ${location}</p>
          <h1 id="hero-title" class="mt-2 text-4xl md:text-5xl font-extrabold leading-[1.1] gradient-text">${hero.title}</h1>
          <p class="mt-4 text-neutral-300 max-w-xl">${hero.blurb}</p>
          <div class="mt-6 flex flex-wrap gap-3">
            ${Button({ href: cv, label: 'Descargar CV', icon: 'file-document-outline', download: 'VictorHuaman_CV.pdf' })}
            ${Button({ href: socials.github, label: 'GitHub', icon: 'github' })}
            ${Button({ href: socials.linkedin, label: 'LinkedIn', icon: 'linkedin', style: 'color:#0A66C2' })}
            ${Button({ href: socials.instagram, label: 'Instagram', icon: 'instagram', style: 'color:#E4405F' })}
          <div class="mt-4 text-xs text-neutral-400 hidden md:block">${availability}</div>
        </div>
      </div>
    </section>
  `;
};
