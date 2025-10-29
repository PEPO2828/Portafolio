
export const Icon = ({ name, width = 18, height = 18, style = '' }) => {
  return `<iconify-icon icon="mdi:${name}" width="${width}" height="${height}" style="${style}" aria-hidden="true"></iconify-icon>`;
};
