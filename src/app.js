import { settings } from './data/settings.js';
import { Header } from './sections/Header.js';
import { Hero } from './sections/Hero.js';
import { Skills } from './sections/Skills.js';
import { Work } from './sections/Work.js';
import { Services } from './sections/Services.js';
import { About } from './sections/About.js';
import { Contact } from './sections/Contact.js';
import { Footer } from './sections/Footer.js';
import { $, $$ } from './lib/dom.js';
import { initEffects } from './lib/effects.js';
import { projects } from './data/projects.js';
import { ProjectCard } from './components/ProjectCard.js';

function generateJsonLd() {
  const { name, jobTitle, email, socials } = settings;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": name,
    "jobTitle": jobTitle,
    "image": "https://your-user.github.io/portrait.jpg", // Placeholder, ideally dynamic
    "email": `mailto:${email}`,
    "url": "https://your-user.github.io/", // Placeholder, ideally dynamic
    "sameAs": [
      socials.github,
      socials.linkedin,
      socials.instagram
    ],
    "knowsAbout": ["SuiteScript", "Oracle NetSuite", "JavaScript", "TypeScript", "SQL", "ERP integrations"]
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(jsonLd, null, 2);
  document.head.appendChild(script);
}

let activeSectionId = '';

function updateHeaderActiveLink(id) {
  const navLinks = $$('header nav a');
  navLinks.forEach(link => {
    if (link.getAttribute('href') === `#${id}`) {
      link.classList.add('bg-white/10');
      link.classList.remove('hover:bg-white/5');
    } else {
      link.classList.remove('bg-white/10');
      link.classList.add('hover:bg-white/5');
    }
  });
}

function setupScrollSpy() {
  const sections = $$('main section');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        activeSectionId = entry.target.id;
        updateHeaderActiveLink(activeSectionId);
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' }); // Adjust this margin to control when a section becomes "active"

  sections.forEach(section => {
    observer.observe(section);
  });
}

function createSectionSeparator() {
  return `<div class="mx-auto max-w-6xl px-5 my-10"><div class="h-px bg-gradient-to-r from-transparent via-base-line to-transparent"></div></div>`;
}

function renderApp() {
  const app = $('#app');
  app.innerHTML = `

    <main id="top" class="mx-auto max-w-6xl px-5">
      ${Hero()}
      ${Skills()}
      ${Work()}
      ${Contact()}
    </main>
    ${Footer()}
  `;
}

function addEventListeners() {
  // Project filtering
  const tabs = document.querySelectorAll('[role="tab"]');
  const projectGrid = $('#projectGrid');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const filter = tab.dataset.filter;
      tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
      tab.setAttribute('aria-selected', 'true');

      const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.tags.includes(filter));

      projectGrid.innerHTML = filteredProjects.map(ProjectCard).join('');
    });
  });

  // Copy email
  const copyBtn = $('#copyEmail');
  const copiedMsg = $('#copiedMsg');
  copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(settings.email).then(() => {
      copiedMsg.classList.remove('opacity-0');
      setTimeout(() => copiedMsg.classList.add('opacity-0'), 1400);
    });
  });
}

export function initApp() {
  generateJsonLd();
  renderApp();
  initEffects();
  addEventListeners();
  setupScrollSpy(); // Initialize scroll spy after rendering

  // Global Rocket Launch Animation
  const globalRocket = $('#global-rocket-gif');
  if (globalRocket) {
    const triggerGlobalRocketLaunch = () => {
      globalRocket.classList.remove('global-rocket-launching');
      // Force reflow to restart animation
      void globalRocket.offsetWidth;
      globalRocket.classList.add('global-rocket-launching');
    };

    // Initial launch after a delay
    setTimeout(triggerGlobalRocketLaunch, 3000);

    // Subsequent launches every 5 seconds
    setInterval(triggerGlobalRocketLaunch, 5000);
  }
}