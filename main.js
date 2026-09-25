document.documentElement.classList.add('js');

function autoGrow(el) {
  el.style.height = 'auto';
  el.style.height = el.scrollHeight + 'px';
}
document.querySelectorAll('.form-group textarea').forEach(el => {
  el.addEventListener('input', () => autoGrow(el));
});
const growVisible = () => document.querySelectorAll('.form-group textarea:not([style*="display: none"])').forEach(el => {
  if (el.offsetParent !== null) autoGrow(el);
});
if (typeof window.showStep === 'function') {
  const originalShowStep = window.showStep;
  window.showStep = function (step) {
    originalShowStep(step);
    growVisible();
  };
} else {
  growVisible();
}

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
