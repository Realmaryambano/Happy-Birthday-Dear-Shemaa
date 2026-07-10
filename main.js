// ============ shared site behaviour ============

(function initTheme(){
  const saved = localStorage.getItem('shemaa-theme');
  const theme = saved || 'light';
  document.documentElement.setAttribute('data-theme', theme);
})();

document.addEventListener('DOMContentLoaded', () => {
  // theme toggle
  const toggle = document.querySelector('.theme-toggle');
  const setIcon = () => {
    const t = document.documentElement.getAttribute('data-theme');
    if (toggle) toggle.textContent = t === 'dark' ? '🌙' : '☀️';
  };
  setIcon();
  if (toggle){
    toggle.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('shemaa-theme', next);
      setIcon();
    });
  }

  // mobile nav burger
  const burger = document.querySelector('.nav-burger');
  const links = document.querySelector('.nav-links');
  if (burger && links){
    burger.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
  }

  // mark active nav link
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === here) a.classList.add('active');
  });

  // ambient floating hearts
  const field = document.querySelector('.floaty-hearts');
  if (field){
    const glyphs = ['💗','💕','🌸','✨'];
    const count = window.innerWidth < 700 ? 10 : 18;
    for (let i=0; i<count; i++){
      const s = document.createElement('span');
      s.textContent = glyphs[Math.floor(Math.random()*glyphs.length)];
      s.style.left = Math.random()*100 + '%';
      s.style.fontSize = (1 + Math.random()*1.6) + 'rem';
      s.style.animationDuration = (10 + Math.random()*14) + 's';
      s.style.animationDelay = (Math.random()*14) + 's';
      field.appendChild(s);
    }
  }
});
