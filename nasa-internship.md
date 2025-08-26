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

We revolved our invention around the Artimus Mission, where they are trying to make Mars habitiable while also giving alternatives to promote Green Science practices. Our main focus was accesible renewable energy. We created an alge bio reactor system using the Isochyrysis Galbana strain of algae. Our goal was to create and mass produce the algae for the purpose of fuel and or any other desired products by utilizing water, nutrients, and sunlight to counter the oil farming, a limited resource, on Mars. 

Our system was made witha two part frame and a hard tubing system. To keep within our budget, we used reclaimed wood and pcv tubing. It consisted of a stand holding the tubes at a 30 degree angle to optimize the amount of sunlight recieved. The two section system was desgined to optimize transportbility and replacement if needed.The acessibility and the ease of the design and the componets made it an affordable and begginer friendly alternative. 

Our use of microelectronics came into play when we created a code with three main sections to moniteor our algae growth. Our microelectronic of choice was an Arduino raspberry pi. The three sections were the Global declarations, setup function,and the main loop. My code is available to view on my GitHub profile. Those esentially gave us the temperature reading in both celcius and fahrenheit on a serial monitor refreshing every second. We also had installed a pH reader and a fish tank filter  to monitor the levels to maximize the algae growth.  

The tubing system had flow in and out to keep the water circulating using the fish tank filter and the angle of the frame. The constant movement of the water would help regulate movement and discourage clumping that would cause a build up preventing that water flow. We started with about a teaspoon of pregrown algae, and by the time of presentation we had over a gallon of our self grown algae.

How we would have liked to improve our project given either more time or a larger budget would have been actually converting our algae into a fuel source of some kind though application, as well as expanding the electronic componets to also read the amount of light recieved at all times.


<!-- ====== NASA INTERNSHIP CAROUSEL (15 slides, fixed arrows) ====== -->
<div class="carousel" id="nasa-carousel" aria-roledescription="carousel" aria-label="NASA Gallery">
  <div class="carousel__viewport">
    <div class="carousel__track" role="group" aria-live="polite">

      <div class="carousel__slide" aria-label="1 of 15">
        <img src="{{ '/initialblueprint.JPG' | relative_url }}" alt="Initial Blueprint">
        <div class="carousel__caption">Initial Blueprint</div>
      </div>

      <div class="carousel__slide" aria-label="2 of 15">
        <img src="{{ '/brainstormforidea.PNG' | relative_url }}" alt="Brainstorm for Idea">
        <div class="carousel__caption">Brainstorm for Idea</div>
      </div>

      <div class="carousel__slide" aria-label="3 of 15">
        <img src="{{ '/indetailblueprints.jpeg' | relative_url }}" alt="In-Detail Blueprints">
        <div class="carousel__caption">In-Detail Blueprints</div>
      </div>

      <div class="carousel__slide" aria-label="4 of 15">
        <img src="{{ '/conceptofwiring.jpg' | relative_url }}" alt="Concept of Wiring">
        <div class="carousel__caption">Concept of Wiring</div>
      </div>

      <div class="carousel__slide" aria-label="5 of 15">
        <img src="{{ '/raspberrypiearduino.jpeg' | relative_url }}" alt="Raspberry Pi + Arduino">
        <div class="carousel__caption">Raspberry Pi + Arduino</div>
      </div>

      <div class="carousel__slide" aria-label="6 of 15">
        <img src="{{ '/pipeline%20connectors.JPG' | relative_url }}" alt="Pipeline Connectors">
        <div class="carousel__caption">Pipeline Connectors</div>
      </div>

      <div class="carousel__slide" aria-label="7 of 15">
        <img src="{{ '/piping.JPG' | relative_url }}" alt="Piping">
        <div class="carousel__caption">Piping</div>
      </div>

      <div class="carousel__slide" aria-label="8 of 15">
        <img src="{{ '/piping2.JPG' | relative_url }}" alt="Piping 2">
        <div class="carousel__caption">Piping 2</div>
      </div>

      <div class="carousel__slide" aria-label="9 of 15">
        <img src="{{ '/frameinposition.JPG' | relative_url }}" alt="Frame in Position">
        <div class="carousel__caption">Frame in Position</div>
      </div>

      <div class="carousel__slide" aria-label="10 of 15">
        <img src="{{ '/filter.jpeg' | relative_url }}" alt="Filter">
        <div class="carousel__caption">Filter</div>
      </div>

      <div class="carousel__slide" aria-label="11 of 15">
        <img src="{{ '/algaesamples.jpeg' | relative_url }}" alt="Algae Samples">
        <div class="carousel__caption">Algae Samples</div>
      </div>

      <div class="carousel__slide" aria-label="12 of 15">
        <img src="{{ '/algaeupclose.jpeg' | relative_url }}" alt="Algae Up Close">
        <div class="carousel__caption">Algae Up Close</div>
      </div>

      <div class="carousel__slide" aria-label="13 of 15">
        <img src="{{ '/presentationpic.jpeg' | relative_url }}" alt="Presentation">
        <div class="carousel__caption">Presentation</div>
      </div>

      <div class="carousel__slide" aria-label="14 of 15">
        <img src="{{ '/inaction.jpeg' | relative_url }}" alt="In Action">
        <div class="carousel__caption">In Action</div>
      </div>

      <div class="carousel__slide" aria-label="15 of 15">
        <img src="{{ '/grouppic.jpeg' | relative_url }}" alt="Group Picture">
        <div class="carousel__caption">Group Picture</div>
      </div>

    </div>
  </div>

  <!-- buttons & dots are now OUTSIDE the scrolling viewport -->
  <button class="carousel__btn carousel__btn--prev" aria-label="Previous" data-action="prev">&#10094;</button>
  <button class="carousel__btn carousel__btn--next" aria-label="Next" data-action="next">&#10095;</button>
  <div class="carousel__dots"></div>
</div>

{% raw %}
<style>
  :root { --carousel-width:min(100%,980px); --carousel-aspect:16/9; --dot-size:12px; --dot-active-scale:1.25; }
  .carousel{width:var(--carousel-width);margin:1.5rem auto;position:relative;border-radius:16px;overflow:hidden;box-shadow:0 8px 30px rgba(0,0,0,.12);background:#111}
  .carousel__viewport{aspect-ratio:var(--carousel-aspect);position:relative;overflow:hidden}
  .carousel__track{display:flex;height:100%}
  .carousel__slide{flex:0 0 100%;position:relative;display:grid;place-items:center;background:#000}
  .carousel__slide img{width:100%;height:100%;object-fit:cover;display:block}
  .carousel__caption{position:absolute;left:0;right:0;bottom:0;padding:.75rem .9rem;background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.55) 64%,rgba(0,0,0,.8) 100%);color:#fff;font:500 14px/1.4 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;text-shadow:0 1px 2px rgba(0,0,0,.7)}

  .carousel__btn{position:absolute;top:50%;transform:translateY(-50%);background:rgba(0,0,0,.45);border:none;color:#fff;width:44px;height:44px;border-radius:999px;display:grid;place-items:center;cursor:pointer}
  .carousel__btn--prev{left:10px}.carousel__btn--next{right:10px}
  .carousel__dots{position:absolute;left:0;right:0;bottom:10px;display:flex;gap:8px;justify-content:center}

  .carousel__dot{width:var(--dot-size);height:var(--dot-size);border-radius:50%;background:rgba(255,255,255,.45);border:0;cursor:pointer;transition:transform .15s ease,background .2s ease}
  .carousel__dot[aria-current="true"]{background:#fff;transform:scale(var(--dot-active-scale))}

  /* keep arrows & dots above everything even while scrolling */
  .carousel__btn, .carousel__dots { z-index: 5; }
  .carousel__caption { z-index: 2; }
</style>

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

  function sizeSlides(){
    const w = viewport.clientWidth;
    slides.forEach(s => s.style.flex = `0 0 ${w}px`);
  }
  sizeSlides();
  window.addEventListener('resize', sizeSlides);

  // build dots
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

  // controls & keyboard
  next.addEventListener('click', nextF);
  prev.addEventListener('click', prevF);
  root.addEventListener('keydown', e => {
    if (e.key==='ArrowRight') nextF();
    if (e.key==='ArrowLeft')  prevF();
  });

  // sync on manual swipe/scroll
  let snapTimer = null;
  viewport.addEventListener('scroll', () => {
    clearTimeout(snapTimer);
    snapTimer = setTimeout(() => {
      i = Math.round(viewport.scrollLeft / viewport.clientWidth);
      updateDots();
    }, 80);
  });

  // enable snap scrolling
  track.style.display = 'flex';
  viewport.style.overflowX = 'auto';
  viewport.style.scrollSnapType = 'x mandatory';
  slides.forEach(s => s.style.scrollSnapAlign = 'center');

  go(0);
})();
</script>
{% endraw %}
<!-- ====== /NASA INTERNSHIP CAROUSEL ====== -->
