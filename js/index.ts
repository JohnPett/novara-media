import { Window, Module } from './d'

const setupModules = ({ selector, include }: Module) => {
  return Array.from(document.querySelectorAll(selector)).map((el: Element) => {
    const module = include(el) as { init: () => void }
    module.init()
    return module
  })
}

function onLoad() {
  new Swiper(".default-carousel", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

if (document.addEventListener) document.addEventListener('DOMContentLoaded', onLoad)
else (window as Window).attachEvent('onload', onLoad)
