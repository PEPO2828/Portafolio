
export const Header = (activeSection = '') => {
  const navLinks = [
    { id: 'work', href: '#work', label: 'Work' },
    { id: 'skills', href: '#skills', label: 'Skills' },
    { id: 'what-i-do', href: '#what-i-do', label: 'What I Do' },
    { id: 'about', href: '#about', label: 'About' },
    { id: 'contact', href: '#contact', label: 'Contact' },
  ];

  return `
    <header class="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-base-line">
      <div class="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
        <a href="#top" class="font-extrabold tracking-tight gradient-text text-xl" aria-label="Home">pepo</a>
        <nav class="flex items-center gap-2 text-sm" aria-label="Primary">
          ${navLinks.map(link => {
            const isActive = activeSection === link.id;
            const activeClass = isActive ? 'bg-white/10' : 'hover:bg-white/5';
            return `<a class="px-3 py-1.5 rounded-full border border-base-line ${activeClass}" href="${link.href}">${link.label}</a>`;
          }).join('')}
        </nav>
      </div>
    </header>
  `;
};
