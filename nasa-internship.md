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


{% raw %}
<style>
  :root {
    --carousel-width: min(100%, 1100px);   /* wider max */
    --carousel-height: min(85vh, 950px);   /* taller, fills most of screen */
    --dot-size: 14px;
    --dot-active-scale: 1.3;
  }

  .carousel {
    width: var(--carousel-width);
    margin: 2rem auto;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0,0,0,.12);
    background: #111;
  }

  .carousel__viewport {
    height: var(--carousel-height);
    position: relative;
    overflow: hidden;
  }

  .carousel__track {
    display: flex;
    height: 100%;
  }

  .carousel__slide {
    flex: 0 0 100%;
    position: relative;
    display: grid;
    place-items: center;
    background: #000;
  }

  /* no cropping — scales to fit */
  .carousel__slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    display: block;
    background: #000; /* letterbox color */
  }

  .carousel__caption {
    position: absolute;
    left: 0; right: 0; bottom: 0;
    padding: .85rem 1rem;
    background: linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,.55) 64%,rgba(0,0,0,.85) 100%);
    color: #fff;
    font: 500 15px/1.4 system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;
    text-shadow: 0 1px 2px rgba(0,0,0,.7);
  }

  .carousel__btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0,0,0,.45);
    border: none;
    color: #fff;
    width: 52px; height: 52px;
    border-radius: 999px;
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  .carousel__btn--prev { left: 15px; }
  .carousel__btn--next { right: 15px; }

  .carousel__dots {
    position: absolute;
    left: 0; right: 0; bottom: 14px;
    display: flex;
    gap: 10px;
    justify-content: center;
  }

  .carousel__dot {
    width: var(--dot-size);
    height: var(--dot-size);
    border-radius: 50%;
    background: rgba(255,255,255,.45);
    border: 0;
    cursor: pointer;
    transition: transform .15s ease, background .2s ease;
  }
  .carousel__dot[aria-current="true"] {
    background: #fff;
    transform: scale(var(--dot-active-scale));
  }

  /* keep arrows & dots on top */
  .carousel__btn, .carousel__dots { z-index: 5; }
  .carousel__caption { z-index: 2; }
</style>
{% endraw %}
