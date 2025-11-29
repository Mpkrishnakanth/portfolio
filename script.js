// Small vanilla JS for loading screen, smooth scrolling, and tiny text effects

document.addEventListener('DOMContentLoaded', function () {
  // Remove loading screen after short delay to reveal hero (simulate similar feel)
  setTimeout(()=> {
    const loader = document.getElementById('loading-screen');
    if(loader){ loader.style.transition = 'opacity 400ms ease'; loader.style.opacity = 0; setTimeout(()=>loader.remove(),450); }
  }, 900);

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', (e)=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        const el = document.querySelector(href);
        if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Small interactive flourish: hover tilt on profile photo (mobile safe)
  const photo = document.querySelector('.profile-photo');
  if(photo){
    photo.addEventListener('mousemove', e=>{
      const r = photo.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      photo.style.transform = `rotateX(${ -py * 6 }deg) rotateY(${ px * 6 }deg) scale(1.02)`;
      photo.style.transition = 'transform 120ms linear';
    });
    photo.addEventListener('mouseleave', ()=>{ photo.style.transform=''; photo.style.transition='transform 320ms ease'; });
  }
});
