---
layout: page 
title: NASA Internship 
permalink: /nasa-internship/
cover-img: /assets/img/nasa-logo-web-rgb-bg.png
---

{: .box-success}
Space Grant Connsortium 

Over the summer semester of my freshman year of college I was accepted into the NASA California Space Grant Consortium, the CaSGC.  

During these three months, my group and I were given three parameters: our subject must be related to a NASA objective, and our project must be built within $300 budget we are being provided while involving some type of microelectronic device. 

We revolved our invention around the Artimus Mission, where they are trying to make Mars habitiable while also giving alternatives to promote Green Science practices. Our main focus was renewable energy. We created an alge bio reactor system using the Isochyrysis Galbana strain of algae. Our goal was to create and mass produce the algae for the purpose of fuel and or any other desired products by utilizing water, nutrients, and sunlight to counter the oil farming, a limited resource, on Mars. 

Our system was made witha two part frame and a hard tubing system. To keep within our budget, we used reclaimed wood and pcv tubing. It consisted of a stand holding teh rubes at a 30 degree angle to optimize the amount of sunlight recieved. The two section system was desgined to optimize transportbility and replacement if needed.The acessibility and the ease of the design and the componets made it an affordable and begginer friendly alternative. 

Our use of microelectronics came into play when we created a code with three main sections to moniteor our algae growth. Our microelectronic of choice was an Arduino raspberry pi. The three sections were the Global declarations, setup function,and the main loop. My code is available to view on my GitHub profile. Those esentially gave us the temperature reading in both celcius and fahrenheit on a serial monitor refreshing every second. We also had installed a pH reader and a fish tank filter  to monitor the levels to maximize the algae growth.  

The tubing system had flow in and out to keep the water circulating using the fish tank filter and the angle of the frame. The constant movement of the water would help regulate movement and discourage clumping that would cause a build up preventing that water flow. We started with about a teaspoon of pregrown algae, and by the time of presentation we had over a gallon of our self grown algae.

How we would have liked to improve our project given either more time or a larger budget would have been actually converting our algae into a fuel source of some kind, as well as expanding the electronic componets to also read the amount of light recieved at all times.





{% raw %}
<script>
(function(){
  const root = document.getElementById('nasa-carousel');
  if (!root) return;

  const viewport = root.querySelector('.carousel__viewport');
  const track    = root.querySelector('.carousel__track');
  const slides   = Array.from(root.querySelectorAll('.carousel__slide'));
  const prev     = root.querySelector('[data-action="prev"]');
  const next     = root.querySelector('[data-action="next"]');
  const dotsWrap = root.querySelector('.carousel__dots');

  // Make sure slides are full viewport width
  function sizeSlides(){
    const w = viewport.clientWidth;
    slides.forEach(s => s.style.flex = `0 0 ${w}px`);
  }
  sizeSlides();
  window.addEventListener('resize', sizeSlides);

  // Build dots
  slides.forEach((_, idx) => {
    const b = document.createElement('button');
    b.className = 'carousel__dot'; b.type='button';
    b.setAttribute('aria-label', `Go to slide ${idx+1}`);
    b.addEventListener('click', () => go(idx));
    dotsWrap.appendChild(b);
  });

  let i = 0;
  function updateDots(){
    dotsWrap.querySelectorAll('.carousel__dot').forEach((d, idx) =>
      d.setAttribute('aria-current', idx===i ? 'true' : 'false'));
    slides.forEach((s, idx) => s.setAttribute('aria-hidden', idx===i ? 'false' : 'true'));
  }

  function go(n){
    i = (n + slides.length) % slides.length;
    viewport.scrollTo({ left: i * viewport.clientWidth, behavior: 'smooth' });
    updateDots();
  }
  const nextF = () => go(i+1);
  const prevF = () => go(i-1);

  // Buttons + keyboard
  next.addEventListener('click', nextF);
  prev.addEventListener('click', prevF);
  root.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') nextF();
    if (e.key === 'ArrowLeft')  prevF();
  });

  // Sync index if user swipes manually
  let snapTimer = null;
  viewport.addEventListener('scroll', () => {
    clearTimeout(snapTimer);
    snapTimer = setTimeout(() => {
      i = Math.round(viewport.scrollLeft / viewport.clientWidth);
      updateDots();
    }, 80);
  });

  // Enable horizontal scroll snapping (safety if CSS is stripped)
  track.style.display = 'flex';
  viewport.style.overflowX = 'auto';
  viewport.style.scrollSnapType = 'x mandatory';
  slides.forEach(s => s.style.scrollSnapAlign = 'center');

  // Init
  go(0);
})();
</script>
{% endraw %}
