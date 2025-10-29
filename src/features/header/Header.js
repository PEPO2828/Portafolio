
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
        <nav class="hidden md:flex items-center gap-2 text-sm" aria-label="Primary">
          ${navLinks.map(link => {
            const isActive = activeSection === link.id;
            const activeClass = isActive ? 'bg-white/10' : 'hover:bg-white/5';
            return `<a class="px-3 py-1.5 rounded-full border border-base-line ${activeClass}" href="${link.href}">${link.label}</a>`;
          }).join('')}
        </nav>
        <button id="mobile-menu-toggle" class="md:hidden p-2 rounded-full border border-base-line hover:bg-white/5" aria-label="Open mobile menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      <div id="mobile-menu" class="hidden md:hidden pb-4 px-5">
        <nav class="flex flex-col gap-2 text-sm" aria-label="Mobile Primary">
          ${navLinks.map(link => {
            const isActive = activeSection === link.id;
            const activeClass = isActive ? 'bg-white/10' : 'hover:bg-white/5';
            return `<a class="px-3 py-2 rounded-lg border border-base-line ${activeClass}" href="${link.href}">${link.label}</a>`;
          }).join('')}
        </nav>
      </div>
    </header>
  `;
};
