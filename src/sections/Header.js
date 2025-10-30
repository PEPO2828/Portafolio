
export const Header = (activeSection = '') => {
    const navLinks = [
      { id: 'work', href: '#work', label: 'Proyectos' },
      { id: 'contact', href: '#contact', label: 'Contacto' },
    ];

  return `
    <header class="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-base-line">
      <div class="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
        <a href="#top" class="font-extrabold tracking-tight gradient-text text-xl" aria-label="Home">Pepo</a>
      </div>
    </header>
  `;
};
