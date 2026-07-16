
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);});}
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>reveal.observe(el));
const topBtn=document.querySelector('.back-to-top');
window.addEventListener('scroll',()=>topBtn?.classList.toggle('show',window.scrollY>450));
topBtn?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));
