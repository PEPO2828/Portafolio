
import { settings } from '../data/settings.js';
import { ServiceCard } from '../components/ServiceCard.js';

export const Services = () => {
  const { services } = settings;

  return `
    <section id="services" class="py-10" aria-labelledby="services-title">
      <h2 id="services-title" class="text-2xl font-semibold tracking-tight">What I Do</h2>
      <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        ${services.map(ServiceCard).join('')}
      </div>
    </section>
  `;
};
