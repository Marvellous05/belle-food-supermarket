/* =========================================================
   BELLE FOOD & SUPERMARKET
   EASY SETTINGS: edit only the values below.
   ========================================================= */
const SITE = {
  logo: "assets/logo.png",
  whatsapp: "2349119006385",
  maps: "https://maps.app.goo.gl/nxdAizw2jKDqEXv66",

  frozen_image: "assets/frozenImage.jpg",
  location_image: "assets/storeDay.jpg",
  belle_food: "assets/storeDay.jpg",
  fresh_tasty: "assets/jollof.jpg",
  good_food: "assets/noodles.jpg",
  always_here: "assets/storeNight.jpg",
  banga: "assets/banga.jpg"
};

const VIDEO_ROOT = "assets/";
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function applyConfig(){

  // LOGO
  document.querySelectorAll("[data-logo]").forEach(img => {
    img.src = SITE.logo;
  });

  // FROZEN FOODS
  document.querySelectorAll("[data-frozen-image]").forEach(img => {
    img.src = SITE.frozen_image;
  });

  // LOCATION
  document.querySelectorAll("[data-location-image]").forEach(img => {
    img.src = SITE.location_image;
  });

  // BELLE FOOD
  document.querySelectorAll("[data-belle-food]").forEach(img => {
    img.src = SITE.belle_food;
  });

  // FRESH & TASTY
  document.querySelectorAll("[data-fresh-tasty]").forEach(img => {
    img.src = SITE.fresh_tasty;
  });

  // GOOD FOOD
  document.querySelectorAll("[data-good-food]").forEach(img => {
    img.src = SITE.good_food;
  });

  // 24/7 ALWAYS HERE
  document.querySelectorAll("[data-always-here]").forEach(img => {
    img.src = SITE.always_here;
  });

  // STARCH & BANGA
  document.querySelectorAll("[data-banga]").forEach(img => {
    img.src = SITE.banga;
  });

  // MAPS
  const maps = document.getElementById("maps");
  if (maps) maps.href = SITE.maps;

  // YEAR
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
}

function setupVideos(){
  const videos=[...document.querySelectorAll("video[data-video]")];
  videos.forEach(video=>{
    const source=document.createElement("source");
    source.src=VIDEO_ROOT+video.dataset.video;
    source.type="video/mp4";
    video.appendChild(source);
    video.muted=true;
    video.defaultMuted=true;
    video.loop=true;
    video.playsInline=true;
    video.addEventListener("loadeddata",()=>video.closest(".media,.food-media,.super-media")?.classList.add("is-loaded"),{once:true});
    video.addEventListener("error",()=>video.closest(".media,.food-media,.super-media")?.classList.remove("is-loaded"));
  });

  const hero=document.querySelector(".hero-video");
  if(hero){ hero.play().catch(()=>{}); }

  const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
      const v=entry.target;
      if(entry.isIntersecting){
        v.play().catch(()=>{});
      }else if(!v.classList.contains("hero-video")){
        v.pause();
      }
    });
  },{rootMargin:"180px 0px",threshold:.08});
  videos.forEach(v=>observer.observe(v));
}

function setupNav(){
  const menu=document.querySelector(".menu");
  const mobile=document.querySelector(".mobile-nav");
  if(!menu||!mobile) return;
  menu.addEventListener("click",()=>{
    const open=mobile.classList.toggle("open");
    menu.setAttribute("aria-expanded",String(open));
    mobile.setAttribute("aria-hidden",String(!open));
  });
  mobile.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
    mobile.classList.remove("open");
    menu.setAttribute("aria-expanded","false");
    mobile.setAttribute("aria-hidden","true");
  }));
}

function openWhatsApp(message){
  const digits=SITE.whatsapp.replace(/\D/g,"");
  if(!digits || digits.includes("XXXXXXXX")){
    showToast("Add Belle Food's WhatsApp number in script.js first.");
    return;
  }
  window.open(`https://wa.me/${digits}?text=${encodeURIComponent(message)}`,"_blank","noopener");
}

function setupOrders(){
  document.querySelectorAll(".wa").forEach(btn=>btn.addEventListener("click",()=>{
    const type=btn.dataset.type;
    openWhatsApp(type==="restaurant" ? "Hello Belle Food! I would like to order food. Please share today's available options and prices." : "Hello Belle Food! I would like to place a supermarket order. Please let me know what's available and the prices.");
  }));
  document.querySelectorAll(".dish").forEach(btn=>btn.addEventListener("click",()=>{
    openWhatsApp(`Hello Belle Food! I would like to order ${btn.dataset.item}. Please confirm availability and price.`);
  }));
}

function showToast(text){
  const toast=document.querySelector(".toast");
  if(!toast) return;
  toast.textContent=text;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer=setTimeout(()=>toast.classList.remove("show"),2800);
}

function setupReveal(){
  const items=[...document.querySelectorAll(".reveal")];
  if(reduceMotion){items.forEach(x=>x.classList.add("visible"));return;}
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.08,rootMargin:"0px 0px -35px"});
  items.forEach(x=>observer.observe(x));
}

applyConfig();
setupVideos();
setupNav();
setupOrders();
setupReveal();
