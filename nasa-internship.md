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




<!-- === NASA PROJECT CAROUSEL (CSS-ONLY, SCROLL-SNAP) === -->
<div class="snap-carousel" aria-label="NASA Gallery">

  <figure><img src="/nasa-pics/frame.HEIC" alt="Frame"><figcaption>Frame</figcaption></figure>
  <figure><img src="/nasa-pics/frame2.HEIC" alt="Frame 2"><figcaption>Frame 2</figcaption></figure>
  <figure><img src="/nasa-pics/frameandpiping.HEIC" alt="Frame and Piping"><figcaption>Frame & Piping</figcaption></figure>
  <figure><img src="/nasa-pics/frameinposition.JPG" alt="Frame in Position"><figcaption>Frame in Position</figcaption></figure>
  <figure><img src="/nasa-pics/grouppic.HEIC" alt="Group Picture"><figcaption>Group Picture</figcaption></figure>
  <figure><img src="/nasa-pics/headshot.2025.img" alt="Headshot"><figcaption>Headshot</figcaption></figure>
  <figure><img src="/nasa-pics/inaction.HEIC" alt="In Action"><figcaption>In Action</figcaption></figure>
  <figure><img src="/nasa-pics/indetailblueprints.heic" alt="In Detail Blueprints"><figcaption>In Detail Blueprints</figcaption></figure>
  <figure><img src="/nasa-pics/initialblueprint.JPG" alt="Initial Blueprint"><figcaption>Initial Blueprint</figcaption></figure>
  <figure><img src="/nasa-pics/pipeline%20connectors.JPG" alt="Pipeline Connectors"><figcaption>Pipeline Connectors</figcaption></figure>
  <figure><img src="/nasa-pics/piping.JPG" alt="Piping"><figcaption>Piping</figcaption></figure>
  <figure><img src="/nasa-pics/piping2.JPG" alt="Piping 2"><figcaption>Piping 2</figcaption></figure>
  <figure><img src="/nasa-pics/pipingconnected.HEIC" alt="Piping Connected"><figcaption>Piping Connected</figcaption></figure>
  <figure><img src="/nasa-pics/presentationpic.HEIC" alt="Presentation"><figcaption>Presentation</figcaption></figure>
  <figure><img src="/nasa-pics/raspberrypi.HEIC" alt="Raspberry Pi"><figcaption>Raspberry Pi</figcaption></figure>
  <figure><img src="/nasa-pics/raspberrypiearduino.HEIC" alt="Raspberry Pi & Arduino"><figcaption>Raspberry Pi + Arduino</figcaption></figure>
  <figure><img src="/nasa-pics/abstractdigital.jpg" alt="Abstract Digital"><figcaption>Abstract Digital</figcaption></figure>
  <figure><img src="/nasa-pics/algaesamples.HEIC" alt="Algae Samples"><figcaption>Algae Samples</figcaption></figure>
  <figure><img src="/nasa-pics/algaeupclose.HEIC" alt="Algae Up Close"><figcaption>Algae Up Close</figcaption></figure>
  <figure><img src="/nasa-pics/arduinosaudtered.HEIC" alt="Arduino Soldered"><figcaption>Arduino Soldered</figcaption></figure>
  <figure><img src="/nasa-pics/brainstormforidea.PNG" alt="Brainstorm for Idea"><figcaption>Brainstorm for Idea</figcaption></figure>
  <figure><img src="/nasa-pics/code.HEIC" alt="Code"><figcaption>Code</figcaption></figure>
  <figure><img src="/nasa-pics/conceptofwiring.jpg" alt="Concept of Wiring"><figcaption>Concept of Wiring</figcaption></figure>

</div>

<style>
  .snap-carousel{
    display:flex; gap:10px; overflow:auto;
    scroll-snap-type:x mandatory;
    padding:10px; border-radius:16px;
    background:#111; box-shadow:0 8px 30px rgba(0,0,0,.12);
  }
  .snap-carousel figure{
    flex:0 0 85vw; max-width:980px;
    margin:0; position:relative;
    scroll-snap-align:center;
    border-radius:16px; overflow:hidden;
    background:#000;
  }
  .snap-carousel img{
    display:block; width:100%; height:auto;
    aspect-ratio:16/9; object-fit:cover;
  }
  .snap-carousel figcaption{
    position:absolute; left:0; right:0; bottom:0;
    padding:.75rem .9rem;
    color:#fff; font:500 14px/1.4 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
    background:linear-gradient(180deg,rgba(0,0,0,0) 0%, rgba(0,0,0,.55) 60%, rgba(0,0,0,.85) 100%);
    text-shadow:0 1px 2px rgba(0,0,0,.7);
  }
  @media (min-width:900px){ .snap-carousel figure{ flex:0 0 70vw; } }
</style>
<!-- === /NASA PROJECT CAROUSEL === -->
