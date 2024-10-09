// js/index.ts
var onLoad = function() {
  new Swiper(".default-carousel", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
};
if (document.addEventListener)
  document.addEventListener("DOMContentLoaded", onLoad);
else
  window.attachEvent("onload", onLoad);
