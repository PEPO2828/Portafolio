
import { Icon } from './Icon.js';

export const Button = ({ href, label, icon, target = '_blank', rel = 'noopener', download, variant = 'neon' }) => {
  const isExternal = target === '_blank';
  const commonClasses = 'btn-icon inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-base-line';
  const variantClasses = {
    neon: 'neon-btn hover:shadow-glow',
    default: 'hover:bg-white/5',
  };

  const downloadAttr = download ? `download="${download}"` : '';

  return `
    <a class="${commonClasses} ${variantClasses[variant]}"
       href="${href}"
       target="${target}"
       rel="${rel}"
       ${downloadAttr}>
      ${icon ? Icon({ name: icon }) : ''}
      ${label}
    </a>
  `;
};
