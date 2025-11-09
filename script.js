/* Lightweight interactions: reveal on scroll & mobile nav toggle & sticky nav shadow */
document.addEventListener('DOMContentLoaded', function(){
  const reveals = document.querySelectorAll('.reveal');
  const nav = document.querySelector('.nav-wrap');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  function revealOnScroll(){
    const windowH = window.innerHeight;
    reveals.forEach(r=>{
      const rect = r.getBoundingClientRect();
      if(rect.top < windowH - 80){
        r.classList.add('active');
      }
    });
  }
  revealOnScroll();
  window.addEventListener('scroll', revealOnScroll);

  // nav shadow when scrolled
  window.addEventListener('scroll', () => {
    if(window.scrollY > 20){
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

  // mobile nav toggle
  if(navToggle){
    navToggle.addEventListener('click', ()=> {
      navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.background = 'rgba(255,255,255,0.98)';
      navLinks.style.position = 'absolute';
      navLinks.style.right = '18px';
      navLinks.style.top = '60px';
      navLinks.style.padding = '12px';
      navLinks.style.borderRadius = '10px';
      navLinks.style.boxShadow = '0 8px 24px rgba(15,23,42,0.08)';
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(!href || href === '#') return;
      const target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
