
export const projects = [
  {
    title: 'SpaceOps Inventory Monitor — Aplicación autónoma para controlar suministros',
    year: '2025',
    tags: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
    summary: 'Registra entradas y consumos, calcula días de cobertura y clasifica cada ítem en OK / Advertencia / Crítico. Incluye dashboard con KPIs (total, en riesgo, “más consumido – 30 días”), búsqueda y filtro de bajo stock, y detalle por ítem con historial y gráfico con anotaciones. Persiste datos en LocalStorage y usa arquitectura modular con repositorios/DI, lista para conectar a ERP/backend sin tocar la lógica.',
    links: [
      { label: 'Ver Demo', url: '/Portafolio/assets/docs/Implementation of a Cloud-Based ERP System for Optimized Inventory and Supply Management in Space Stations and Long-Duration Missions.pdf', download: 'Implementation of a Cloud-Based ERP System for Optimized Inventory and Supply Management in Space Stations and Long-Duration Missions.pdf' },
      { label: 'Ver Código', url: 'https://github.com/PEPO2828/spaceops-inventory-monitor' },
      { label: 'Paper', url: '/Portafolio/assets/docs/Implementation of a Cloud-Based ERP System for Optimized Inventory and Supply Management in Space Stations and Long-Duration Missions.pdf', download: 'Implementation of a Cloud-Based ERP System for Optimized Inventory and Supply Management in Space Stations and Long-Duration Missions.pdf' }
    ]
  },
  {
    title: 'AstroWater Forecaster (v2) — Simulador autónomo de autonomía de agua',
    year: '2025',
    tags: ['HTML', 'CSS', 'JavaScript', 'Chart.js'],
    summary: 'Dos modos (Simular • Predecir días), parámetros editables (duración, tripulación, consumo, reciclaje, stock), KPIs/estados (Óptimo/Moderado/Crítico) y gráfica con umbral seguro. Basado en Clean Architecture + SOLID, con lógica ERP-ready; la demo corre de forma independiente (sin URL de ERP).',
    links: [
      { label: 'Ver Demo', url: 'https://pepo2828.github.io/COPERNICUS-Water-Supply-Forecasting-System-for-Space-Missions/' },
      { label: 'Ver Código', url: 'https://github.com/PEPO2828/COPERNICUS-Water-Supply-Forecasting-System-for-Space-Missions' },
      { label: 'Paper', url: '/Portafolio/assets/docs/Forecasting water supply shortages in space missions using scenario - based simulation within erp systems.pdf', download: 'Forecasting water supply shortages in space missions using scenario - based simulation within erp systems.pdf' }
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


];
