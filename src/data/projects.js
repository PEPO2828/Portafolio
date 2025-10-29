
export const projects = [
  {
    title: 'SpaceOps Inventory Monitor — App stand-alone para controlar suministros',
    year: '2025',
    tags: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
    summary: 'Registra entradas y consumos, calcula días de cobertura y clasifica cada ítem en OK / Advertencia / Crítico. Incluye dashboard con KPIs (total, en riesgo, “más consumido – 30 días”), búsqueda y filtro de bajo stock, y detalle por ítem con historial y gráfico con anotaciones. Persiste datos en LocalStorage y usa arquitectura modular con repositorios/DI, lista para conectar a ERP/backend sin tocar la lógica.',
    links: [
      { label: 'Ver Demo', url: 'https://pepo2828.github.io/spaceops-inventory-monitor/' },
      { label: 'Ver Código', url: 'https://github.com/PEPO2828/spaceops-inventory-monitor' },
      { label: 'Paper', url: '#' }
    ]
  },
  {
    title: 'AstroWater Forecaster (v2) — Simulador stand-alone de autonomía de agua',
    year: '2025',
    tags: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
    summary: 'Dos modos (Simular • Predecir días), parámetros editables (duración, tripulación, consumo, reciclaje, stock), KPIs/estados (Óptimo/Moderado/Crítico) y gráfica con umbral seguro. Basado en Clean Architecture + SOLID, con lógica ERP-ready; la demo corre de forma independiente (sin URL de ERP).',
    links: [
      { label: 'Ver Demo', url: 'https://pepo2828.github.io/COPERNICUS-Water-Supply-Forecasting-System-for-Space-Missions/' },
      { label: 'Ver Código', url: 'https://github.com/PEPO2828/COPERNICUS-Water-Supply-Forecasting-System-for-Space-Missions' },
      { label: 'Paper', url: '#' }
    ]
  },
  {
    title: 'RutaTrack — Plataforma Inteligente de Rutas y Alertas',
    year: '2025',
    tags: ['HTML', 'CSS', 'JavaScript', 'Leaflet'],
    summary: 'Aplicación web para visualizar la ubicación en tiempo real de los camiones de basura, permitiendo a los residentes saber cuándo se acerca el camión y recibir alertas. Esto evita la acumulación de basura en las calles, reduciendo olores y desorden. El municipio puede monitorear las rutas, detectar retrasos y optimizar el servicio.',
    links: [
      { label: 'Ver Demo', url: 'https://pepo2828.github.io/Ruta-Track/' },
      { label: 'Ver Código', url: 'https://github.com/PEPO2828/Ruta-Track' }
    ]
  },
  {
    title: 'LATAM Fiscal Automation (SuiteScript) — Demo',
    year: '2025',
    tags: ['SuiteScript', 'ERP', 'SQL'],
    summary: 'Automations for PLE, SAT and SICORE with validations and runtime improvements.',
    metrics: ['~30% faster runtime', '+12 validations', 'Zero manual export steps'],
    links: [
      { label: 'Case study', url: '#' },
      { label: 'GitHub', url: '#' },
      { label: 'Live', url: '#' },
    ],
  },
  {
    title: 'Resource Simulation (Unity) — IAC 2025',
    year: '2025',
    tags: ['Unity'],
    summary: 'Lightweight resource-management simulation for habitats (demo data).',
    metrics: ['Used in IAC talk', 'Simple UI', 'Configurable scenarios'],
    links: [
      { label: 'Video', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
  },
  {
    title: 'SOC dashboards & playbooks (docs/demo)',
    year: '2024–2025',
    tags: ['ERP'],
    summary: 'Visibility KPIs and response processes (public mock).',
    metrics: ['Faster hand-offs', 'RACI defined'],
    links: [{ label: 'Docs', url: '#' }],
  },
];
