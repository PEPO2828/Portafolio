(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const S="/Portafolio/assets/gif%20cohete-BD8Gx-D4.gif";document.getElementById("global-rocket-gif").src=S;const d={name:"Víctor Raúl Huamán Simeón",jobTitle:"Software Developer",location:"Lima, Peru",availability:"Open to remote/hybrid roles",email:"victorhuamansimeon@gmail.com",cv:"./assets/docs/cv.pdf",socials:{github:"https://github.com/PEPO2828",linkedin:"https://www.linkedin.com/in/victor-raul-huaman-simeon-875800215/",instagram:"https://www.instagram.com/pepoovr?igsh=Z3NrbXowaWlhdGRw"},hero:{title:"Víctor Raúl Huamán Simeón",subtitle:"Software Developer — SuiteScript • JS/TS • ERP",blurb:"I build <b>Oracle NetSuite (ERP)</b> automations with <b>SuiteScript 2.0/2.1</b>, <b>JavaScript/TypeScript</b> and <b>SQL</b>. I like integrations, clean docs and measurable outcomes. Spoke at <b>IAC 2025 (Sydney)</b> with a resource-simulation demo."},about:{blurb:"Analytical mindset, quick learner and pragmatic delivery. I care about good practices, clear docs and measurable outcomes. <b>Immediate availability · flexible hours.</b>"},skills:["SuiteScript 2.0 / 2.1","JavaScript / TypeScript","SQL / JSON","HTML / CSS","Oracle NetSuite (LATAM)","Git / GitLab / GitKraken","Power BI · Excel"],services:[{title:"NetSuite automations",items:["Suitelet, Client, Map/Reduce, Scheduled scripts","Statutory reports (PLE, SAT, SICORE, REINF)","Performance & validation hardening"]},{title:"Integrations & APIs",items:["RESTlets, web services and data pipelines","Auth, pagination, error handling","Clean JSON contracts & docs"]},{title:"Dashboards & tooling",items:["Operational dashboards (ERP/SOC)","Excel/Power BI hand-offs","Playbooks and README-style docs"]}],papers:[{title:"Paper de Astrowater",path:"./assets/docs/paper-astrowater.pdf",download:"paper-astrowater.pdf"},{title:"Paper de SpaceOps",path:"./assets/docs/paper-spaceops.pdf",download:"paper-spaceops.pdf"}]},$=(e="")=>`
    <header class="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 border-b border-base-line">
      <div class="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
        <a href="#top" class="font-extrabold tracking-tight gradient-text text-xl" aria-label="Home">pepo</a>
        <nav class="flex items-center gap-2 text-sm" aria-label="Primary">
          ${[{id:"work",href:"#work",label:"Work"},{id:"skills",href:"#skills",label:"Skills"},{id:"what-i-do",href:"#what-i-do",label:"What I Do"},{id:"about",href:"#about",label:"About"},{id:"contact",href:"#contact",label:"Contact"}].map(i=>`<a class="px-3 py-1.5 rounded-full border border-base-line ${e===i.id?"bg-white/10":"hover:bg-white/5"}" href="${i.href}">${i.label}</a>`).join("")}
        </nav>
      </div>
    </header>
  `,k=({name:e,width:a=18,height:i=18,style:r=""})=>`<iconify-icon icon="mdi:${e}" width="${a}" height="${i}" style="${r}" aria-hidden="true"></iconify-icon>`,c=({href:e,label:a,icon:i,target:r="_blank",rel:t="noopener",download:s,variant:n="neon"})=>{const l="btn-icon inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-base-line",p={neon:"neon-btn hover:shadow-glow",default:"hover:bg-white/5"},h=s?`download="${s}"`:"";return`
    <a class="${l} ${p[n]}"
       href="${e}"
       target="${r}"
       rel="${t}"
       ${h}>
      ${i?k({name:i}):""}
      ${a}
    </a>
  `},L="/Portafolio/assets/imagen-DEYQTIh_.png",E=()=>{const{name:e,jobTitle:a,location:i,availability:r,hero:t,cv:s,socials:n}=d;return`
    <section class="py-14 md:py-20" aria-labelledby="hero-title">
      <div class="grid md:grid-cols-[340px_1fr] gap-8 items-center">
        <div class="order-1 md:order-1 relative flex justify-center md:justify-start md:-ml-8 lg:-ml-10" data-reveal>
          <div class="absolute -inset-10 md:-inset-14 rounded-[36px] blur-3xl opacity-60 pointer-events-none
                      bg-gradient-to-tr from-sky-400/20 via-fuchsia-400/15 to-transparent" aria-hidden="true"></div>
          <div class="relative w-[260px] md:w-[340px] aspect-square">
            <img
                src="${L}"
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
            ${r}
          </div>
        </div>
        <div class="order-2 md:order-2">
          <p class="text-sm text-neutral-400">${a} — ${t.subtitle} · ${i}</p>
          <h1 id="hero-title" class="mt-2 text-4xl md:text-5xl font-extrabold leading-[1.1] gradient-text">${t.title}</h1>
          <p class="mt-4 text-neutral-300 max-w-xl">${t.blurb}</p>
          <div class="mt-6 flex flex-wrap gap-3">
            ${c({href:s,label:"Download CV",icon:"file-document-outline",download:"cv.pdf"})}
            ${c({href:n.github,label:"GitHub",icon:"github"})}
            ${c({href:n.linkedin,label:"LinkedIn",icon:"linkedin"})}
            ${c({href:n.instagram,label:"Instagram",icon:"instagram"})}
            ${d.papers.map(l=>c({href:l.path,label:l.title,icon:"file-document-outline",download:l.download})).join("")}
          <div class="mt-4 text-xs text-neutral-400 hidden md:block">${r}</div>
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
  `},b=[{title:"SpaceOps Inventory Monitor — App stand-alone para controlar suministros",year:"2025",tags:["HTML","CSS","JavaScript","Chart.js"],summary:"Registra entradas y consumos, calcula días de cobertura y clasifica cada ítem en OK / Advertencia / Crítico. Incluye dashboard con KPIs (total, en riesgo, “más consumido – 30 días”), búsqueda y filtro de bajo stock, y detalle por ítem con historial y gráfico con anotaciones. Persiste datos en LocalStorage y usa arquitectura modular con repositorios/DI, lista para conectar a ERP/backend sin tocar la lógica.",links:[{label:"Ver Demo",url:"https://pepo2828.github.io/spaceops-inventory-monitor/"},{label:"Ver Código",url:"https://github.com/PEPO2828/spaceops-inventory-monitor"},{label:"Paper",url:"#"}]},{title:"AstroWater Forecaster (v2) — Simulador stand-alone de autonomía de agua",year:"2025",tags:["HTML","CSS","JavaScript","Chart.js"],summary:"Dos modos (Simular • Predecir días), parámetros editables (duración, tripulación, consumo, reciclaje, stock), KPIs/estados (Óptimo/Moderado/Crítico) y gráfica con umbral seguro. Basado en Clean Architecture + SOLID, con lógica ERP-ready; la demo corre de forma independiente (sin URL de ERP).",links:[{label:"Ver Demo",url:"https://pepo2828.github.io/COPERNICUS-Water-Supply-Forecasting-System-for-Space-Missions/"},{label:"Ver Código",url:"https://github.com/PEPO2828/COPERNICUS-Water-Supply-Forecasting-System-for-Space-Missions"},{label:"Paper",url:"#"}]},{title:"RutaTrack — Plataforma Inteligente de Rutas y Alertas",year:"2025",tags:["HTML","CSS","JavaScript","Leaflet"],summary:"Aplicación web para visualizar la ubicación en tiempo real de los camiones de basura, permitiendo a los residentes saber cuándo se acerca el camión y recibir alertas. Esto evita la acumulación de basura en las calles, reduciendo olores y desorden. El municipio puede monitorear las rutas, detectar retrasos y optimizar el servicio.",links:[{label:"Ver Demo",url:"https://pepo2828.github.io/Ruta-Track/"},{label:"Ver Código",url:"https://github.com/PEPO2828/Ruta-Track"}]},{title:"LATAM Fiscal Automation (SuiteScript) — Demo",year:"2025",tags:["SuiteScript","ERP","SQL"],summary:"Automations for PLE, SAT and SICORE with validations and runtime improvements.",metrics:["~30% faster runtime","+12 validations","Zero manual export steps"],links:[{label:"Case study",url:"#"},{label:"GitHub",url:"#"},{label:"Live",url:"#"}]},{title:"Resource Simulation (Unity) — IAC 2025",year:"2025",tags:["Unity"],summary:"Lightweight resource-management simulation for habitats (demo data).",metrics:["Used in IAC talk","Simple UI","Configurable scenarios"],links:[{label:"Video",url:"#"},{label:"GitHub",url:"#"}]},{title:"SOC dashboards & playbooks (docs/demo)",year:"2024–2025",tags:["ERP"],summary:"Visibility KPIs and response processes (public mock).",metrics:["Faster hand-offs","RACI defined"],links:[{label:"Docs",url:"#"}]}],A=e=>`${{HTML:"🌐",CSS:"🎨",JavaScript:"📜","Chart.js":"📊",Leaflet:"🗺️",SuiteScript:"💼",ERP:"🏭",SQL:"💾",Unity:"🎮"}[e]||""} ${e}`,y=e=>`
    <article class="tilt relative rounded-2xl border border-base-line card holo p-5 hover:shadow-[0_0_12px_rgba(56,189,248,.25)] transition">
      <div class="flex items-start justify-between gap-3">
        <h3 class="font-medium leading-tight">${e.title}</h3>
        <span class="text-xs text-neutral-400">${e.year}</span>
      </div>
      <p class="mt-2 text-sm text-neutral-300">${e.summary}</p>
      ${e.metrics?.length?`<div class='mt-3 flex flex-wrap gap-2 text-xs'>${e.metrics.map(a=>`<span class='px-2 py-1 rounded-full border border-base-line'>${a}</span>`).join("")}</div>`:""}
      <div class="mt-3 flex flex-wrap gap-2 text-xs">
        ${e.tags.map(a=>`<span class='px-2 py-1 rounded-full border border-base-line'>${A(a)}</span>`).join("")}
      </div>
      <div class="mt-4 flex flex-wrap gap-3 text-sm">
        ${e.links.map(a=>c({href:a.url,label:a.label,variant:"neon"})).join("")}
      </div>
    </article>
  `,I=()=>`
    <section id="work" class="py-10" aria-labelledby="work-title">
      <div class="flex items-end justify-between">
        <h2 id="work-title" class="text-2xl font-semibold tracking-tight">Selected work (case studies)</h2>
        <div class="flex gap-2 text-xs" role="tablist" aria-label="Filter work">
          ${["All",...new Set(b.flatMap(a=>a.tags))].map((a,i)=>`
            <button data-filter="${a}" role="tab" aria-selected="${i===0}"
              class="px-3 py-1.5 rounded-full border border-base-line hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-fuchsia-400">
              ${a}
            </button>
          `).join("")}
        </div>
      </div>
      <p class="mt-2 text-sm text-neutral-400">Short stories of what I built, why, and the impact.</p>
      <div id="projectGrid" class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        ${b.map(y).join("")}
      </div>
    </section>
  `,j=({title:e,items:a})=>`
    <article class="rounded-2xl border border-base-line card p-5" data-reveal>
      <h3 class="font-medium">${e}</h3>
      <ul class="mt-2 text-sm text-neutral-300 list-disc pl-5 space-y-1">
        ${a.map(i=>`<li>${i}</li>`).join("")}
      </ul>
    </article>
  `,M=()=>{const{services:e}=d;return`
    <section id="services" class="py-10" aria-labelledby="services-title">
      <h2 id="services-title" class="text-2xl font-semibold tracking-tight">What I Do</h2>
      <div class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        ${e.map(j).join("")}
      </div>
    </section>
  `},R=()=>{const{about:e}=d;return`
    <section id="about" class="py-10" aria-labelledby="about-title">
      <h2 id="about-title" class="text-2xl font-semibold tracking-tight">About</h2>
      <p class="mt-3 text-neutral-300 max-w-3xl" data-reveal>
        ${e.blurb}
      </p>
    </section>
  `},O=()=>{const{email:e,socials:a}=d;return`
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
  `},u=(e,a=document)=>a.querySelector(e),w=(e,a=document)=>Array.from(a.querySelectorAll(e));function H(){const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches,a=u("#spot");!e&&a&&window.addEventListener("pointermove",i=>{a.style.setProperty("--x",i.clientX/window.innerWidth*100+"%"),a.style.setProperty("--y",i.clientY/window.innerHeight*100+"%")}),(function(){const r=document.getElementById("hero-title");if(!r)return;const t=r.textContent.trim();if(e){r.classList.add("glitch"),r.setAttribute("data-text",t);return}r.textContent="";const s=document.createElement("span");s.className="typewriter-caret",s.setAttribute("aria-label",t),r.appendChild(s);let n=0,l=55;(function p(){n<t.length?(s.textContent+=t[n++],setTimeout(p,l)):(s.classList.remove("typewriter-caret"),r.classList.add("glitch"),r.setAttribute("data-text",t))})()})(),(function(){const i=document.getElementById("fx-stars");if(!i||e)return;const r=i.getContext("2d");let t=0,s=0,n=[];function l(){t=i.width=window.innerWidth,s=i.height=window.innerHeight}window.addEventListener("resize",l,{passive:!0}),l();const p=Math.min(140,Math.floor(t*s/16e3));function h(){n=Array.from({length:p},()=>({x:Math.random()*t,y:Math.random()*s,z:Math.random()*.7+.3,r:Math.random()*.9+.2,s:Math.random()*.5+.2}))}h();function v(){r.clearRect(0,0,t,s);for(const o of n){o.x+=o.s*o.z,o.y+=.02*o.z,(o.x>t+10||o.y>s+10)&&(o.x=-10,o.y=Math.random()*s*.8,o.z=Math.random()*.7+.3);const x=o.r*(1.2+o.z);r.beginPath(),r.arc(o.x,o.y,x,0,Math.PI*2);const g=r.createRadialGradient(o.x,o.y,0,o.x,o.y,x);g.addColorStop(0,"rgba(168,85,247,.7)"),g.addColorStop(1,"rgba(168,85,247,0)"),r.fillStyle=g,r.fill()}requestAnimationFrame(v)}requestAnimationFrame(v)})(),document.querySelectorAll(".neon-btn").forEach(i=>{i.addEventListener("pointermove",r=>{const t=i.getBoundingClientRect();i.style.setProperty("--mx",(r.clientX-t.left)/t.width*100+"%"),i.style.setProperty("--my",(r.clientY-t.top)/t.height*100+"%")})}),(function(){const i=document.querySelectorAll("[data-reveal]");if(e||!("IntersectionObserver"in window)){i.forEach(t=>t.classList.add("in"));return}const r=new IntersectionObserver(t=>{t.forEach(s=>{s.isIntersecting&&(s.target.classList.add("in"),r.unobserve(s.target))})},{rootMargin:"0px 0px -10% 0px",threshold:.08});i.forEach(t=>r.observe(t))})()}function D(){const{name:e,jobTitle:a,email:i,socials:r}=d,t={"@context":"https://schema.org","@type":"Person",name:e,jobTitle:a,image:"https://your-user.github.io/portrait.jpg",email:`mailto:${i}`,url:"https://your-user.github.io/",sameAs:[r.github,r.linkedin,r.instagram],knowsAbout:["SuiteScript","Oracle NetSuite","JavaScript","TypeScript","SQL","ERP integrations"]},s=document.createElement("script");s.type="application/ld+json",s.textContent=JSON.stringify(t,null,2),document.head.appendChild(s)}let f="";function N(e){w("header nav a").forEach(i=>{i.getAttribute("href")===`#${e}`?(i.classList.add("bg-white/10"),i.classList.remove("hover:bg-white/5")):(i.classList.remove("bg-white/10"),i.classList.add("hover:bg-white/5"))})}function G(){const e=w("main section"),a=new IntersectionObserver(i=>{i.forEach(r=>{r.isIntersecting&&(f=r.target.id,N(f))})},{rootMargin:"-50% 0px -50% 0px"});e.forEach(i=>{a.observe(i)})}function m(){return'<div class="mx-auto max-w-6xl px-5 my-10"><div class="h-px bg-gradient-to-r from-transparent via-base-line to-transparent"></div></div>'}function W(){const e=u("#app");e.innerHTML=`
    ${$(f)}
    <main id="top" class="mx-auto max-w-6xl px-5">
      ${E()}
      ${m()}
      ${C()}
      ${m()}
      ${I()}
      ${m()}
      ${M().replace('id="services"','id="what-i-do"')}
      ${m()}
      ${R()}
      ${m()}
      ${O()}
    </main>
    ${T()}
  `}function q(){const e=document.querySelectorAll('[role="tab"]'),a=u("#projectGrid");e.forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.filter;e.forEach(l=>l.setAttribute("aria-selected","false")),t.setAttribute("aria-selected","true");const n=s==="All"?b:b.filter(l=>l.tags.includes(s));a.innerHTML=n.map(y).join("")})});const i=u("#copyEmail"),r=u("#copiedMsg");i.addEventListener("click",()=>{navigator.clipboard.writeText(d.email).then(()=>{r.classList.remove("opacity-0"),setTimeout(()=>r.classList.add("opacity-0"),1400)})})}function F(){D(),W(),H(),q(),G();const e=u("#global-rocket-gif");if(e){const a=()=>{e.classList.remove("global-rocket-launching"),e.offsetWidth,e.classList.add("global-rocket-launching")};setTimeout(a,3e3),setInterval(a,5e3)}}document.addEventListener("DOMContentLoaded",F);
