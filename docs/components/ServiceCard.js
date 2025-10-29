
export const ServiceCard = ({ title, items }) => {
  return `
    <article class="rounded-2xl border border-base-line card p-5" data-reveal>
      <h3 class="font-medium">${title}</h3>
      <ul class="mt-2 text-sm text-neutral-300 list-disc pl-5 space-y-1">
        ${items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </article>
  `;
};
