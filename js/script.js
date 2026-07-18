
const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('.main-nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const counters=document.querySelectorAll('.counter');
const cio=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,target=+el.dataset.target;let n=0;const step=Math.max(1,Math.ceil(target/30));const t=setInterval(()=>{n=Math.min(target,n+step);el.textContent=n;if(n>=target)clearInterval(t)},35);cio.unobserve(el)}),{threshold:.5});
counters.forEach(e=>cio.observe(e));
const topBtn=document.querySelector('.to-top');
addEventListener('scroll',()=>topBtn?.classList.toggle('show',scrollY>500));
topBtn?.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
