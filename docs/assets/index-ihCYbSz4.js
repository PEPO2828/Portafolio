(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}})();const w="/Portafolio/assets/gif%20cohete-BD8Gx-D4.gif";document.getElementById("global-rocket-gif").src=w;const d={name:"Víctor Huamán Simeón",jobTitle:"Software Developer",location:"Lima, Perú",availability:"Abierto a roles remotos/híbridos",email:"victorhuamansimeon@gmail.com",cv:"assets/docs/VictorHuaman_CV.pdf",socials:{github:"https://github.com/PEPO2828",linkedin:"https://www.linkedin.com/in/victor-raul-huaman-simeon-875800215/",instagram:"https://www.instagram.com/pepoovr?igsh=Z3NrbXowaWlhdGRw"},hero:{title:"Víctor Huamán Simeón",subtitle:"Software Developer — SuiteScript • JS/TS • ERP",blurb:"Construyo automatizaciones para <b>Oracle NetSuite (ERP)</b> con <b>SuiteScript 2.0/2.1</b>, <b>JavaScript/TypeScript</b> y <b>SQL</b>. Me gustan las integraciones, la documentación clara y los resultados medibles. Di una charla en <b>IAC 2025 (Sídney)</b> con una demostración de simulación de recursos."},about:{blurb:"Mentalidad analítica, aprendizaje rápido y entrega pragmática. Me preocupan las buenas prácticas, la documentación clara y los resultados medibles. <b>Disponibilidad inmediata · horario flexible.</b>"},skills:["SuiteScript 2.0 / 2.1","JavaScript / TypeScript","SQL / JSON","HTML / CSS","Oracle NetSuite (LATAM)","Git / GitLab / GitKraken","Power BI · Excel"],services:[{title:"Automatizaciones de NetSuite",items:["Scripts Suitelet, Cliente, Map/Reduce, Programados","Informes reglamentarios (PLE, SAT, SICORE, REINF)","Mejora de rendimiento y validación"]},{title:"Integraciones y APIs",items:["RESTlets, servicios web y pipelines de datos","Autenticación, paginación, manejo de errores","Contratos JSON limpios y documentación"]},{title:"Dashboards y herramientas",items:["Dashboards operativos (ERP/SOC)","Entregas a Excel/Power BI","Playbooks y documentación estilo README"]}]},$=(e="")=>`
    <header class="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-base-line">
      <div class="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
        <a href="#top" class="font-extrabold tracking-tight gradient-text text-xl" aria-label="Home">pepo</a>
        <nav class="flex items-center gap-2 text-sm" aria-label="Primary">
          ${[{id:"work",href:"#work",label:"Trabajo"},{id:"skills",href:"#skills",label:"Habilidades"},{id:"what-i-do",href:"#what-i-do",label:"Lo que hago"},{id:"about",href:"#about",label:"Sobre mí"},{id:"contact",href:"#contact",label:"Contacto"}].map(i=>`<a class="px-3 py-1.5 rounded-full border border-base-line ${e===i.id?"bg-white/10":"hover:bg-white/5"}" href="${i.href}">${i.label}</a>`).join("")}
        </nav>
      </div>
    </header>
  `,L=({name:e,width:a=18,height:i=18,style:s=""})=>`<iconify-icon icon="mdi:${e}" width="${a}" height="${i}" style="${s}" aria-hidden="true"></iconify-icon>`,c=({href:e,label:a,icon:i,target:s="_blank",rel:t="noopener",download:o,variant:n="neon"})=>{const l="btn-icon inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-base-line",p={neon:"neon-btn hover:shadow-glow",default:"hover:bg-white/5"},g=o?`download="${o}"`:"";return`
    <a class="${l} ${p[n]}"
       href="${e}"
       target="${s}"
       rel="${t}"
       ${g}>
      ${i?L({name:i}):""}
      ${a}
    </a>
  `},k="/Portafolio/assets/imagen-DEYQTIh_.png",E=()=>{const{name:e,jobTitle:a,location:i,availability:s,hero:t,cv:o,socials:n}=d;return`
    <section class="py-14 md:py-20" aria-labelledby="hero-title">
      <div class="grid md:grid-cols-[340px_1fr] gap-8 items-center">
        <div class="order-1 md:order-1 relative flex justify-center md:justify-start md:-ml-8 lg:-ml-10" data-reveal>
          <div class="absolute -inset-10 md:-inset-14 rounded-[36px] blur-3xl opacity-60 pointer-events-none
                      bg-gradient-to-tr from-sky-400/20 via-fuchsia-400/15 to-transparent" aria-hidden="true"></div>
          <div class="relative w-[260px] md:w-[340px] aspect-square">
            <img
                src="${k}"
                alt="${e} — portrait"
                class="w-full h-full object-contain"
                style="
                  object-position:50% 35%;
                  filter: drop-shadow(0 22px 46px rgba(0,0,0,.45)) drop-shadow(0 0 16px rgba(99,102,241,.25));
                  transform: scale(1.08);
                  mask-image: radial-gradient(circle at 50% 50%, black 50%, transparent 80%);
                "
                width="680" height="680"
                loading="lazy" decoding="async">
            <span aria-hidden="true"
              class="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-1 w-[68%] h-6 opacity-35"
              style="background:radial-gradient(50% 100% at 50% 50%, rgba(0,0,0,.55), transparent 70%);">
            </span>
          </div>

          <div class="absolute -bottom-6 left-1/2 -translate-x-1/2 md:hidden text-xs text-neutral-400">
            ${s}
          </div>
        </div>
        <div class="order-2 md:order-2">
          <p class="text-sm text-neutral-400">${a} — ${t.subtitle} · ${i}</p>
          <h1 id="hero-title" class="mt-2 text-4xl md:text-5xl font-extrabold leading-[1.1] gradient-text">${t.title}</h1>
          <p class="mt-4 text-neutral-300 max-w-xl">${t.blurb}</p>
          <div class="mt-6 flex flex-wrap gap-3">
            ${c({href:o,label:"Descargar CV",icon:"file-document-outline",download:"VictorHuaman_CV.pdf"})}
            ${c({href:n.github,label:"GitHub",icon:"github"})}
            ${c({href:n.linkedin,label:"LinkedIn",icon:"linkedin"})}
            ${c({href:n.instagram,label:"Instagram",icon:"instagram"})}
          <div class="mt-4 text-xs text-neutral-400 hidden md:block">${s}</div>
        </div>
      </div>
    </section>
  `},P=({skill:e})=>`<span class="px-4 py-2 rounded-full border border-base-line">${e}</span>`,C=()=>{const{skills:e}=d;return`
    <section id="skills" class="py-10" aria-labelledby="skills-title">
      <h2 id="skills-title" class="text-2xl font-semibold tracking-tight">Skills</h2>
      <div class="mt-3 flex flex-wrap gap-2 text-base" data-reveal>
        ${e.map(a=>P({skill:a})).join("")}
      </div>
    </section>
  `},b=[{title:"SpaceOps Inventory Monitor — Aplicación autónoma para controlar suministros",year:"2025",tags:["HTML","CSS","JavaScript","Chart.js"],summary:"Registra entradas y consumos, calcula días de cobertura y clasifica cada ítem en OK / Advertencia / Crítico. Incluye dashboard con KPIs (total, en riesgo, “más consumido – 30 días”), búsqueda y filtro de bajo stock, y detalle por ítem con historial y gráfico con anotaciones. Persiste datos en LocalStorage y usa arquitectura modular con repositorios/DI, lista para conectar a ERP/backend sin tocar la lógica.",links:[{label:"Ver Demo",url:"/Portafolio/assets/docs/Implementation of a Cloud-Based ERP System for Optimized Inventory and Supply Management in Space Stations and Long-Duration Missions.pdf",download:"Implementation of a Cloud-Based ERP System for Optimized Inventory and Supply Management in Space Stations and Long-Duration Missions.pdf"},{label:"Ver Código",url:"https://github.com/PEPO2828/spaceops-inventory-monitor"},{label:"Paper",url:"/Portafolio/assets/docs/Implementation of a Cloud-Based ERP System for Optimized Inventory and Supply Management in Space Stations and Long-Duration Missions.pdf",download:"Implementation of a Cloud-Based ERP System for Optimized Inventory and Supply Management in Space Stations and Long-Duration Missions.pdf"}]},{title:"AstroWater Forecaster (v2) — Simulador autónomo de autonomía de agua",year:"2025",tags:["HTML","CSS","JavaScript","Chart.js"],summary:"Dos modos (Simular • Predecir días), parámetros editables (duración, tripulación, consumo, reciclaje, stock), KPIs/estados (Óptimo/Moderado/Crítico) y gráfica con umbral seguro. Basado en Clean Architecture + SOLID, con lógica ERP-ready; la demo corre de forma independiente (sin URL de ERP).",links:[{label:"Ver Demo",url:"https://pepo2828.github.io/COPERNICUS-Water-Supply-Forecasting-System-for-Space-Missions/"},{label:"Ver Código",url:"https://github.com/PEPO2828/COPERNICUS-Water-Supply-Forecasting-System-for-Space-Missions"},{label:"Paper",url:"/Portafolio/assets/docs/Forecasting water supply shortages in space missions using scenario - based simulation within erp systems.pdf",download:"Forecasting water supply shortages in space missions using scenario - based simulation within erp systems.pdf"}]},{title:"RutaTrack — Plataforma Inteligente de Rutas y Alertas",year:"2025",tags:["HTML","CSS","JavaScript","Leaflet"],summary:"Aplicación web para visualizar la ubicación en tiempo real de los camiones de basura, permitiendo a los residentes saber cuándo se acerca el camión y recibir alertas. Esto evita la acumulación de basura en las calles, reduciendo olores y desorden. El municipio puede monitorear las rutas, detectar retrasos y optimizar el servicio.",links:[{label:"Ver Demo",url:"https://pepo2828.github.io/Ruta-Track/"},{label:"Ver Código",url:"https://github.com/PEPO2828/Ruta-Track"}]}],M=e=>`${{HTML:"🌐",CSS:"🎨",JavaScript:"📜","Chart.js":"📊",Leaflet:"🗺️",SuiteScript:"💼",ERP:"🏭",SQL:"💾",Unity:"🎮"}[e]||""} ${e}`,v=e=>`
    <article class="tilt relative rounded-2xl border border-base-line card holo p-5 hover:shadow-[0_0_12px_rgba(56,189,248,.25)] transition">
      <div class="flex items-start justify-between gap-3">
        <h3 class="font-medium leading-tight">${e.title}</h3>
        <span class="text-xs text-neutral-400">${e.year}</span>
      </div>
      <p class="mt-2 text-sm text-neutral-300">${e.summary}</p>
      ${e.metrics?.length?`<div class='mt-3 flex flex-wrap gap-2 text-xs'>${e.metrics.map(a=>`<span class='px-2 py-1 rounded-full border border-base-line'>${a}</span>`).join("")}</div>`:""}
      <div class="mt-3 flex flex-wrap gap-2 text-xs">
        ${e.tags.map(a=>`<span class='px-2 py-1 rounded-full border border-base-line'>${M(a)}</span>`).join("")}
      </div>
      <div class="mt-4 flex flex-wrap gap-3 text-sm">
        ${e.links.map(a=>c({href:a.url,label:a.label,variant:"neon",download:a.download})).join("")}
      </div>
    </article>
  `,I=()=>`
    <section id="work" class="py-10" aria-labelledby="work-title">
      <div class="flex items-end justify-between">
        <h2 id="work-title" class="text-2xl font-semibold tracking-tight">Trabajos seleccionados (casos de estudio)</h2>
        <div class="flex gap-2 text-xs" role="tablist" aria-label="Filtrar trabajo">
          ${["All",...new Set(b.flatMap(a=>a.tags))].map((a,i)=>`
            <button data-filter="${a}" role="tab" aria-selected="${i===0}"
              class="px-3 py-1.5 rounded-full border border-base-line hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-fuchsia-400">
              ${a}
            </button>
          `).join("")}
        </div>
      </div>
      <p class="mt-2 text-sm text-neutral-400">Historias cortas de lo que construí, por qué y el impacto.</p>
      <div id="projectGrid" class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        ${b.map(v).join("")}
      </div>
    </section>
  `,j=({title:e,items:a})=>`
    <article class="rounded-2xl border border-base-line card p-5" data-reveal>
      <h3 class="font-medium">${e}</h3>
      <ul class="mt-2 text-sm text-neutral-300 list-disc pl-5 space-y-1">
        ${a.map(i=>`<li>${i}</li>`).join("")}
      </ul>
    </article>
  `,A=()=>{const{services:e}=d;return`
    <section id="services" class="py-10" aria-labelledby="services-title">
      <h2 id="services-title" class="text-2xl font-semibold tracking-tight">What I Do</h2>
      <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        ${e.map(j).join("")}
      </div>
    </section>
  `},O=()=>{const{about:e}=d;return`
    <section id="about" class="py-10" aria-labelledby="about-title">
      <h2 id="about-title" class="text-2xl font-semibold tracking-tight">About</h2>
      <p class="mt-3 text-neutral-300 max-w-3xl" data-reveal>
        ${e.blurb}
      </p>
    </section>
  `},R=()=>{const{email:e,socials:a}=d;return`
    <section id="contact" class="py-10" aria-labelledby="contact-title">
      <h2 id="contact-title" class="text-2xl font-semibold tracking-tight">Contact</h2>
      <div class="mt-4 max-w-xl rounded-2xl border border-base-line card p-6" data-reveal>
        <p class="text-neutral-300">Let’s build something together:</p>
        <div class="mt-3 flex items-center gap-3">
          <a id="emailLink" class="underline decoration-dotted" href="mailto:${e}" aria-label="Email link">${e}</a>
          <button id="copyEmail" class="text-xs px-2 py-1 rounded-full border border-base-line hover:bg-white/5 neon-btn" type="button">Copy</button>
          <span id="copiedMsg" class="text-xs text-green-400 opacity-0 transition-opacity" aria-live="polite">Copied ✓</span>
        </div>
        <div class="mt-4 flex flex-wrap gap-3">
          ${c({href:a.linkedin,label:"LinkedIn",icon:"linkedin"})}
          ${c({href:a.github,label:"GitHub",icon:"github"})}
          ${c({href:a.instagram,label:"Instagram",icon:"instagram"})}
        </div>
      </div>
    </section>
  `},T=()=>{const{name:e}=d;return`
    <footer class="mx-auto max-w-6xl px-5 pb-12 text-xs text-neutral-500">
      © <span id="year">${new Date().getFullYear()}</span> ${e} — built with care by <b>pepo</b>.
    </footer>
  `},u=(e,a=document)=>a.querySelector(e),S=(e,a=document)=>Array.from(a.querySelectorAll(e));function D(){const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=u("#spot");!e&&a&&window.addEventListener("pointermove",i=>{a.style.setProperty("--x",i.clientX/window.innerWidth*100+"%"),a.style.setProperty("--y",i.clientY/window.innerHeight*100+"%")}),(function(){const s=document.getElementById("hero-title");if(!s)return;const t=s.textContent.trim();if(e){s.classList.add("glitch"),s.setAttribute("data-text",t);return}s.textContent="";const o=document.createElement("span");o.className="typewriter-caret",o.setAttribute("aria-label",t),s.appendChild(o);let n=0,l=55;(function p(){n<t.length?(o.textContent+=t[n++],setTimeout(p,l)):(o.classList.remove("typewriter-caret"),s.classList.add("glitch"),s.setAttribute("data-text",t))})()})(),(function(){const i=document.getElementById("fx-stars");if(!i||e)return;const s=i.getContext("2d");let t=0,o=0,n=[];function l(){t=i.width=window.innerWidth,o=i.height=window.innerHeight}window.addEventListener("resize",l,{passive:!0}),l();const p=Math.min(140,Math.floor(t*o/16e3));function g(){n=Array.from({length:p},()=>({x:Math.random()*t,y:Math.random()*o,z:Math.random()*.7+.3,r:Math.random()*.9+.2,s:Math.random()*.5+.2}))}g();function y(){s.clearRect(0,0,t,o);for(const r of n){r.x+=r.s*r.z,r.y+=.02*r.z,(r.x>t+10||r.y>o+10)&&(r.x=-10,r.y=Math.random()*o*.8,r.z=Math.random()*.7+.3);const x=r.r*(1.2+r.z);s.beginPath(),s.arc(r.x,r.y,x,0,Math.PI*2);const f=s.createRadialGradient(r.x,r.y,0,r.x,r.y,x);f.addColorStop(0,"rgba(168,85,247,.7)"),f.addColorStop(1,"rgba(168,85,247,0)"),s.fillStyle=f,s.fill()}requestAnimationFrame(y)}requestAnimationFrame(y)})(),document.querySelectorAll(".neon-btn").forEach(i=>{i.addEventListener("pointermove",s=>{const t=i.getBoundingClientRect();i.style.setProperty("--mx",(s.clientX-t.left)/t.width*100+"%"),i.style.setProperty("--my",(s.clientY-t.top)/t.height*100+"%")})}),(function(){const i=document.querySelectorAll("[data-reveal]");if(e||!("IntersectionObserver"in window)){i.forEach(t=>t.classList.add("in"));return}const s=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting&&(o.target.classList.add("in"),s.unobserve(o.target))})},{rootMargin:"0px 0px -10% 0px",threshold:.08});i.forEach(t=>s.observe(t))})()}function H(){const{name:e,jobTitle:a,email:i,socials:s}=d,t={"@context":"https://schema.org","@type":"Person",name:e,jobTitle:a,image:"https://your-user.github.io/portrait.jpg",email:`mailto:${i}`,url:"https://your-user.github.io/",sameAs:[s.github,s.linkedin,s.instagram],knowsAbout:["SuiteScript","Oracle NetSuite","JavaScript","TypeScript","SQL","ERP integrations"]},o=document.createElement("script");o.type="application/ld+json",o.textContent=JSON.stringify(t,null,2),document.head.appendChild(o)}let h="";function z(e){S("header nav a").forEach(i=>{i.getAttribute("href")===`#${e}`?(i.classList.add("bg-white/10"),i.classList.remove("hover:bg-white/5")):(i.classList.remove("bg-white/10"),i.classList.add("hover:bg-white/5"))})}function N(){const e=S("main section"),a=new IntersectionObserver(i=>{i.forEach(s=>{s.isIntersecting&&(h=s.target.id,z(h))})},{rootMargin:"-50% 0px -50% 0px"});e.forEach(i=>{a.observe(i)})}function m(){return'<div class="mx-auto max-w-6xl px-5 my-10"><div class="h-px bg-gradient-to-r from-transparent via-base-line to-transparent"></div></div>'}function B(){const e=u("#app");e.innerHTML=`
    ${$(h)}
    <main id="top" class="mx-auto max-w-6xl px-5">
      ${E()}
      ${m()}
      ${C()}
      ${m()}
      ${I()}
      ${m()}
      ${A().replace('id="services"','id="what-i-do"')}
      ${m()}
      ${O()}
      ${m()}
      ${R()}
    </main>
    ${T()}
  `}function q(){const e=document.querySelectorAll('[role="tab"]'),a=u("#projectGrid");e.forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.filter;e.forEach(l=>l.setAttribute("aria-selected","false")),t.setAttribute("aria-selected","true");const n=o==="All"?b:b.filter(l=>l.tags.includes(o));a.innerHTML=n.map(v).join("")})});const i=u("#copyEmail"),s=u("#copiedMsg");i.addEventListener("click",()=>{navigator.clipboard.writeText(d.email).then(()=>{s.classList.remove("opacity-0"),setTimeout(()=>s.classList.add("opacity-0"),1400)})})}function G(){H(),B(),D(),q(),N();const e=u("#global-rocket-gif");if(e){const a=()=>{e.classList.remove("global-rocket-launching"),e.offsetWidth,e.classList.add("global-rocket-launching")};setTimeout(a,3e3),setInterval(a,5e3)}}document.addEventListener("DOMContentLoaded",G);
