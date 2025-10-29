
import { $ } from './dom.js';

export function initEffects() {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Spotlight
  const spotlight = $('#spot');
  if (!reduceMotion && spotlight) {
    window.addEventListener('pointermove', (e) => {
      spotlight.style.setProperty('--x', (e.clientX / window.innerWidth * 100) + '%');
      spotlight.style.setProperty('--y', (e.clientY / window.innerHeight * 100) + '%');
    });
  }

  // Typewriter then glitch
  (function typeHeroName() {
    const titleEl = document.getElementById('hero-title');
    if (!titleEl) return;
    const full = titleEl.textContent.trim();
    if (reduceMotion) {
      titleEl.classList.add('glitch');
      titleEl.setAttribute('data-text', full);
      return;
    }
    titleEl.textContent = "";
    const span = document.createElement('span');
    span.className = 'typewriter-caret';
    span.setAttribute('aria-label', full);
    titleEl.appendChild(span);
    let i = 0, speed = 55;
    (function step() {
      if (i < full.length) {
        span.textContent += full[i++];
        setTimeout(step, speed);
      } else {
        span.classList.remove('typewriter-caret');
        titleEl.classList.add('glitch');
        titleEl.setAttribute('data-text', full);
      }
    })();
  })();

  // Starfield
  (function () {
    const cv = document.getElementById('fx-stars');
    if (!cv || reduceMotion) return;
    const ctx = cv.getContext('2d');
    let W = 0, H = 0, stars = [];
    function resize() { W = cv.width = window.innerWidth; H = cv.height = window.innerHeight; }
    window.addEventListener('resize', resize, { passive: true });
    resize();
    const N = Math.min(140, Math.floor((W * H) / 16000));
    function init() {
      stars = Array.from({ length: N }, () => ({ x: Math.random() * W, y: Math.random() * H, z: Math.random() * 0.7 + 0.3, r: Math.random() * 0.9 + 0.2, s: Math.random() * 0.5 + 0.2 }));
    }
    init();
    function tick() {
      ctx.clearRect(0, 0, W, H);
      for (const st of stars) {
        st.x += st.s * st.z;
        st.y += 0.02 * st.z;
        if (st.x > W + 10 || st.y > H + 10) {
          st.x = -10;
          st.y = Math.random() * H * 0.8;
          st.z = Math.random() * 0.7 + 0.3;
        }
        const r = st.r * (1.2 + st.z);
        ctx.beginPath();
        ctx.arc(st.x, st.y, r, 0, Math.PI * 2);
        const g = ctx.createRadialGradient(st.x, st.y, 0, st.x, st.y, r);
        g.addColorStop(0, 'rgba(168,85,247,.7)');
        g.addColorStop(1, 'rgba(168,85,247,0)');
        ctx.fillStyle = g;
        ctx.fill();
      }
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  })();

  // Neon halo pointer-follow
  document.querySelectorAll('.neon-btn').forEach(b => {
    b.addEventListener('pointermove', (e) => {
      const r = b.getBoundingClientRect();
      b.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      b.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });

  // Scroll reveal
  (function () {
    const targets = document.querySelectorAll('[data-reveal]');
    if (reduceMotion || !('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('in'));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: .08 });
    targets.forEach(el => io.observe(el));
  })();
}
