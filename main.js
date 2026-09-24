document.documentElement.classList.add('js');

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

const process = document.querySelector('.process');
if (process) {
  if (reduceMotion || !('IntersectionObserver' in window)) {
    process.classList.add('is-visible');
  } else {
    const io = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        process.classList.add('is-visible');
        io.disconnect();
      }
    }, { threshold: 0.35 });
    io.observe(process);
  }
}

function setupExploreItem(item) {
  const frame = item.querySelector('.explore-frame');
  const img = frame.querySelector('img');
  const measure = () => {
    const distance = Math.max(0, img.offsetHeight - frame.clientHeight);
    item.style.setProperty('--shift', `-${distance}px`);
    item.style.setProperty('--dur', `${Math.max(1.5, distance / 260)}s`);
  };
  if (img.complete) measure(); else img.addEventListener('load', measure, { once: true });
  window.addEventListener('resize', measure);
}
document.querySelectorAll('.explore-item').forEach(setupExploreItem);

const stack = document.querySelector('.stack');
if (stack && finePointer && !reduceMotion) {
  stack.addEventListener('pointermove', e => {
    const r = stack.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    stack.style.setProperty('--tilt-x', `${(-y * 6).toFixed(2)}deg`);
    stack.style.setProperty('--tilt-y', `${(x * 8).toFixed(2)}deg`);
  });
  stack.addEventListener('pointerleave', () => {
    stack.style.setProperty('--tilt-x', '0deg');
    stack.style.setProperty('--tilt-y', '0deg');
  });
}

const reviewsSection = document.getElementById('reviewsHome');
if (reviewsSection) {
  const SUPABASE_URL = 'https://nrzaakdjghgtptuclpdi.supabase.co';
  const SUPABASE_KEY = 'sb_publishable_4Pi83zAwUj714AfVb91Kvw_R2I9mRbS';
  const escapeHtml = str => {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  };
  fetch(`${SUPABASE_URL}/rest/v1/avis?select=nom,note,commentaire,created_at&order=created_at.desc&limit=3`, {
    headers: { apikey: SUPABASE_KEY, Authorization: `Bearer ${SUPABASE_KEY}` }
  })
    .then(res => (res.ok ? res.json() : []))
    .then(data => {
      if (!data.length) return;
      document.getElementById('reviewsHomeList').innerHTML = data.map(avis => {
        const note = Math.max(0, Math.min(5, Number(avis.note) || 0));
        return `
        <figure class="home-review">
          <span class="home-review-stars" aria-label="${note} sur 5">${'★'.repeat(note)}${'☆'.repeat(5 - note)}</span>
          <blockquote>${escapeHtml(avis.commentaire)}</blockquote>
          <figcaption>${escapeHtml(avis.nom)}</figcaption>
        </figure>`;
      }).join('');
      reviewsSection.hidden = false;
    })
    .catch(() => {});
}
