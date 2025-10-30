(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const w="/Portafolio/assets/gif%20cohete-BD8Gx-D4.gif",S="/Portafolio/assets/ufo-DITnxERm.gif";document.getElementById("global-rocket-gif").src=w;document.getElementById("global-ufo-gif").src=S;const u={name:"Victor Huaman Simeon",jobTitle:"Software Developer",location:"Lima, Perú",availability:"Abierto a roles remotos/híbridos",email:"victorhuamansimeon@gmail.com",cv:"assets/docs/VictorHuaman_CV.pdf",socials:{github:"https://github.com/PEPO2828",linkedin:"https://www.linkedin.com/in/victor-raul-huaman-simeon-875800215/",instagram:"https://www.instagram.com/pepoovr?igsh=Z3NrbXowaWlhdGRw"},hero:{title:"Victor Huaman Simeon",subtitle:"Junior Full Stack Developer | Ponente Internacional (IAC 2025 Sídney) | Impulsando la Innovación con IA."},skills:["Frontend: HTML, CSS, JavaScript, TypeScript","Backend Logic: SuiteScript 2.0/2.1, SQL","Bases de Datos: SQL, JSON","Herramientas/Plataformas: Git, GitLab, Oracle NetSuite (LATAM), Power BI","Metodologías/Conceptos: Clean Architecture, SOLID, IA (Gemini CLI)"]},$=({name:t,width:o=18,height:a=18,style:i=""})=>`<iconify-icon icon="mdi:${t}" width="${o}" height="${a}" style="${i}" aria-hidden="true"></iconify-icon>`,c=({href:t,label:o,icon:a,target:i="_blank",rel:e="noopener",download:s,variant:r="neon"})=>{const l="btn-icon inline-flex items-center gap-2 px-4 py-2 rounded-2xl border border-base-line",p={neon:"neon-btn hover:shadow-glow",default:"hover:bg-white/5"},f=s?`download="${s}"`:"";return`
    <a class="${l} ${p[r]}"
       href="${t}"
       target="${i}"
       rel="${e}"
       ${f}>
      ${a?$({name:a}):""}
      ${o}
    </a>
  `},L="/Portafolio/assets/imagen-DEYQTIh_.png",k=()=>{const{name:t,location:o,availability:a,hero:i,cv:e,socials:s}=u;return`
    <section class="py-14 md:py-20" aria-labelledby="hero-title">
      <div class="grid md:grid-cols-[340px_1fr] gap-8 items-center">
        <div class="order-1 md:order-1 relative flex justify-center md:justify-start md:-ml-8 lg:-ml-10" data-reveal>
          <div class="absolute -inset-10 md:-inset-14 rounded-[36px] blur-3xl opacity-60 pointer-events-none
                      bg-gradient-to-tr from-sky-400/20 via-fuchsia-400/15 to-transparent" aria-hidden="true"></div>
          <div class="relative w-[260px] md:w-[340px] aspect-square">
            <img
                src="${L}"
                alt="${t} — portrait"
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
            ${a}
          </div>
        </div>
        <div class="order-2 md:order-2">
          <p class="text-sm text-neutral-400">${i.subtitle} · ${o}</p>
          <h1 id="hero-title" class="mt-2 text-4xl md:text-5xl font-extrabold leading-[1.1] gradient-text">${i.title}</h1>
          <p class="mt-4 text-neutral-300 max-w-xl">Ponente en IAC 2025 Sídney y Junior Full Stack Developer, comprometido con el aprendizaje continuo y el crecimiento en el desarrollo de soluciones innovadoras.</p>
          <div class="mt-6 flex flex-wrap gap-3">
            ${c({href:e,label:"Descargar CV",icon:"file-document-outline",download:"VictorHuaman_CV.pdf"})}
            ${c({href:s.github,label:"GitHub",icon:"github"})}
            ${c({href:s.linkedin,label:"LinkedIn",icon:"linkedin"})}
            ${c({href:"#contact",label:"Contáctame",target:"_self",icon:"email-outline"})}
          <div class="mt-4 text-xs text-neutral-400 hidden md:block">${a}</div>
        </div>
      </div>
    </section>
  `},E=({skill:t})=>`<span class="px-4 py-2 rounded-full border border-base-line">${t}</span>`,P=()=>{const{skills:t}=u;return`
    <section id="skills" class="py-10" aria-labelledby="skills-title">
      <h2 id="skills-title" class="text-2xl font-semibold tracking-tight">Skills</h2>
      <div class="mt-3 flex flex-wrap gap-2 text-base" data-reveal>
        ${t.map(o=>E({skill:o})).join("")}
      </div>
    </section>
  `},m=[{title:"Implementación de un Sistema ERP Basado en la Nube para la Gestión Optimizada de Inventario y Suministros en Estaciones Espaciales y Misiones de Larga Duración",year:"2025",tags:["HTML","CSS","JavaScript","Chart.js"],summary:"Desarrollé un sistema ERP basado en la nube para optimizar la gestión de inventario y suministros en misiones espaciales. La solución registra consumos, calcula cobertura y clasifica ítems críticos, presentando datos clave en un dashboard intuitivo. Diseñado con arquitectura modular (repositorios/DI) para fácil integración, demostrando habilidades en gestión de datos y desarrollo de interfaces.",image:"/Portafolio/assets/images/dashboard.gif",links:[{type:"demo",url:"https://pepo2828.github.io/spaceops-inventory-monitor/"},{type:"code",url:"https://github.com/PEPO2828/spaceops-inventory-monitor"},{type:"case-study",url:"/Portafolio/assets/docs/Implementation of a Cloud-Based ERP System for Optimized Inventory and Supply Management in Space Stations and Long-Duration Missions.pdf"}]},{title:"Pronóstico de escasez de agua en misiones espaciales utilizando simulación basada en escenarios dentro de sistemas ERP",year:"2025",tags:["HTML","CSS","JavaScript","Chart.js"],image:"/Portafolio/assets/images/water.gif",links:[{type:"demo",url:"https://pepo2828.github.io/COPERNICUS-Water-Supply-Forecasting-System-for-Space-Missions/"},{type:"code",url:"https://github.com/PEPO2828/COPERNICUS-Water-Supply-Forecasting-System-for-Space-Missions"},{type:"case-study",url:"/Portafolio/assets/docs/Forecasting water supply shortages in space missions using scenario - based simulation within erp systems.pdf"}]},{title:"RutaTrack — Plataforma Inteligente de Rutas y Alertas",year:"2025",tags:["HTML","CSS","JavaScript","Leaflet"],summary:"Desarrollé una aplicación web para la visualización en tiempo real de camiones de basura, empoderando a los residentes con alertas de proximidad y eliminando la acumulación de residuos. La plataforma permite a los municipios monitorear rutas, detectar retrasos y optimizar eficientemente el servicio de recolección.",image:"/Portafolio/assets/images/map route.gif",links:[{type:"demo",url:"https://pepo2828.github.io/Ruta-Track/"},{type:"code",url:"https://github.com/PEPO2828/Ruta-Track"}]}],C=t=>`${{HTML:"🌐",CSS:"🎨",JavaScript:"📜","Chart.js":"📊",Leaflet:"🗺️",SuiteScript:"💼",ERP:"🏭",SQL:"💾",Unity:"🎮"}[t]||""} ${t}`,x=t=>{const o=t.links.find(e=>e.type==="demo"),a=t.links.find(e=>e.type==="code"),i=t.links.find(e=>e.type==="case-study");return`
    <article class="tilt relative rounded-2xl border border-base-line card holo p-5 hover:shadow-[0_0_12px_rgba(56,189,248,.25)] transition">
      ${t.image?`<img src="${t.image}" alt="${t.title} thumbnail" class="w-full h-40 object-cover rounded-lg mb-4">`:""}
      <div class="flex items-start justify-between gap-3">
        <h3 class="font-medium leading-tight">${t.title}</h3>
        <span class="text-xs text-neutral-400">${t.year}</span>
      </div>
      <p class="mt-2 text-sm text-neutral-300">${t.summary}</p>
      ${t.metrics?.length?`<div class='mt-3 flex flex-wrap gap-2 text-xs'>${t.metrics.map(e=>`<span class='px-2 py-1 rounded-full border border-base-line'>${e}</span>`).join("")}</div>`:""}
      <div class="mt-3 flex flex-wrap gap-2 text-xs">
        ${t.tags.map(e=>`<span class='px-2 py-1 rounded-full border border-base-line'>${C(e)}</span>`).join("")}
      </div>
      <div class="mt-4 flex flex-wrap gap-3 text-sm">
        ${o?c({href:o.url,label:"Ver Demo (Frontend)",variant:"neon",icon:"play-circle-outline"}):""}
        ${a?c({href:a.url,label:"Código (GitHub)",variant:"neon",icon:"github"}):""}
        ${i?c({href:i.url,label:"Caso de Estudio (IAC Sídney)",variant:"neon",icon:"file-document-outline"}):""}
      </div>
    </article>
  `},I=()=>`
    <section id="work" class="py-10" aria-labelledby="work-title">
      <div class="flex items-end justify-between">
        <h2 id="work-title" class="text-2xl font-semibold tracking-tight">Proyectos</h2>
        <div class="flex gap-2 text-xs" role="tablist" aria-label="Filtrar trabajo">
          ${["All",...new Set(m.flatMap(o=>o.tags))].map((o,a)=>`
            <button data-filter="${o}" role="tab" aria-selected="${a===0}"
              class="px-3 py-1.5 rounded-full border border-base-line hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-fuchsia-400">
              ${o}
            </button>
          `).join("")}
        </div>
      </div>
      <p class="mt-2 text-sm text-neutral-400">Proyectos destacados: cómo transformé desafíos en soluciones con impacto.</p>
      <div id="projectGrid" class="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        ${m.map(x).join("")}
      </div>
    </section>
  `,M=()=>{const{email:t,socials:o}=u;return`
    <section id="contact" class="py-10" aria-labelledby="contact-title">
      <h2 id="contact-title" class="text-2xl font-semibold tracking-tight">Contacto</h2>
      <div class="mt-4 max-w-xl rounded-2xl border border-base-line card p-6" data-reveal>
        <p class="text-neutral-300">¡Conéctate para construir el futuro! Listo para aprender y contribuir desde el día uno. Disponibilidad inmediata - horario flexible.</p>
        <div class="mt-3 flex items-center gap-3">
          <a id="emailLink" class="underline decoration-dotted" href="mailto:${t}" aria-label="Email link">${t}</a>
          <button id="copyEmail" class="text-xs px-2 py-1 rounded-full border border-base-line hover:bg-white/5 neon-btn" type="button">Copy</button>
          <span id="copiedMsg" class="text-xs text-green-400 opacity-0 transition-opacity" aria-live="polite">Copied ✓</span>
        </div>
        <div class="mt-4 flex flex-wrap gap-3">
          ${c({href:o.linkedin,label:"LinkedIn",icon:"linkedin"})}
          ${c({href:o.github,label:"GitHub",icon:"github"})}
          ${c({href:o.instagram,label:"Instagram",icon:"instagram"})}
        </div>
      </div>
    </section>
  `},j=()=>{const{name:t}=u;return`
    <footer class="mx-auto max-w-6xl px-5 pb-12 text-xs text-neutral-500">
      © <span id="year">${new Date().getFullYear()}</span> ${t} — built with care by <b>pepo</b>.
    </footer>
  `},d=(t,o=document)=>o.querySelector(t),v=(t,o=document)=>Array.from(o.querySelectorAll(t));function A(){const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,o=d("#spot");!t&&o&&window.addEventListener("pointermove",a=>{o.style.setProperty("--x",a.clientX/window.innerWidth*100+"%"),o.style.setProperty("--y",a.clientY/window.innerHeight*100+"%")}),(function(){const i=document.getElementById("hero-title");if(!i)return;const e=i.textContent.trim();if(t){i.classList.add("glitch"),i.setAttribute("data-text",e);return}i.textContent="";const s=document.createElement("span");s.className="typewriter-caret",s.setAttribute("aria-label",e),i.appendChild(s);let r=0,l=55;(function p(){r<e.length?(s.textContent+=e[r++],setTimeout(p,l)):(s.classList.remove("typewriter-caret"),i.classList.add("glitch"),i.setAttribute("data-text",e))})()})(),(function(){const a=document.getElementById("fx-stars");if(!a||t)return;const i=a.getContext("2d");let e=0,s=0,r=[];function l(){e=a.width=window.innerWidth,s=a.height=window.innerHeight}window.addEventListener("resize",l,{passive:!0}),l();const p=Math.min(140,Math.floor(e*s/16e3));function f(){r=Array.from({length:p},()=>({x:Math.random()*e,y:Math.random()*s,z:Math.random()*.7+.3,r:Math.random()*.9+.2,s:Math.random()*.5+.2}))}f();function h(){i.clearRect(0,0,e,s);for(const n of r){n.x+=n.s*n.z,n.y+=.02*n.z,(n.x>e+10||n.y>s+10)&&(n.x=-10,n.y=Math.random()*s*.8,n.z=Math.random()*.7+.3);const b=n.r*(1.2+n.z);i.beginPath(),i.arc(n.x,n.y,b,0,Math.PI*2);const g=i.createRadialGradient(n.x,n.y,0,n.x,n.y,b);g.addColorStop(0,"rgba(168,85,247,.7)"),g.addColorStop(1,"rgba(168,85,247,0)"),i.fillStyle=g,i.fill()}requestAnimationFrame(h)}requestAnimationFrame(h)})(),document.querySelectorAll(".neon-btn").forEach(a=>{a.addEventListener("pointermove",i=>{const e=a.getBoundingClientRect();a.style.setProperty("--mx",(i.clientX-e.left)/e.width*100+"%"),a.style.setProperty("--my",(i.clientY-e.top)/e.height*100+"%")})}),(function(){const a=document.querySelectorAll("[data-reveal]");if(t||!("IntersectionObserver"in window)){a.forEach(e=>e.classList.add("in"));return}const i=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&(s.target.classList.add("in"),i.unobserve(s.target))})},{rootMargin:"0px 0px -10% 0px",threshold:.08});a.forEach(e=>i.observe(e))})()}function O(){const{name:t,jobTitle:o,email:a,socials:i}=u,e={"@context":"https://schema.org","@type":"Person",name:t,jobTitle:o,image:"https://your-user.github.io/portrait.jpg",email:`mailto:${a}`,url:"https://your-user.github.io/",sameAs:[i.github,i.linkedin,i.instagram],knowsAbout:["SuiteScript","Oracle NetSuite","JavaScript","TypeScript","SQL","ERP integrations"]},s=document.createElement("script");s.type="application/ld+json",s.textContent=JSON.stringify(e,null,2),document.head.appendChild(s)}let y="";function T(t){v("header nav a").forEach(a=>{a.getAttribute("href")===`#${t}`?(a.classList.add("bg-white/10"),a.classList.remove("hover:bg-white/5")):(a.classList.remove("bg-white/10"),a.classList.add("hover:bg-white/5"))})}function H(){const t=v("main section"),o=new IntersectionObserver(a=>{a.forEach(i=>{i.isIntersecting&&(y=i.target.id,T(y))})},{rootMargin:"-50% 0px -50% 0px"});t.forEach(a=>{o.observe(a)})}function D(){const t=d("#app");t.innerHTML=`

    <main id="top" class="mx-auto max-w-6xl px-5">
      ${k()}
      ${P()}
      ${I()}
      ${M()}
    </main>
    ${j()}
  `}function R(){const t=document.querySelectorAll('[role="tab"]'),o=d("#projectGrid");t.forEach(e=>{e.addEventListener("click",()=>{const s=e.dataset.filter;t.forEach(l=>l.setAttribute("aria-selected","false")),e.setAttribute("aria-selected","true");const r=s==="All"?m:m.filter(l=>l.tags.includes(s));o.innerHTML=r.map(x).join("")})});const a=d("#copyEmail"),i=d("#copiedMsg");a.addEventListener("click",()=>{navigator.clipboard.writeText(u.email).then(()=>{i.classList.remove("opacity-0"),setTimeout(()=>i.classList.add("opacity-0"),1400)})})}function z(){O(),D(),A(),R(),H();const t=d("#global-rocket-gif");if(t){const o=()=>{t.classList.remove("global-rocket-launching"),t.offsetWidth,t.classList.add("global-rocket-launching")};setTimeout(o,3e3),setInterval(o,5e3)}}document.addEventListener("DOMContentLoaded",z);
