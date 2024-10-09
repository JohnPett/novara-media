import { Window, Module } from './d'

const setupModules = ({ selector, include }: Module) => {
  return Array.from(document.querySelectorAll(selector)).map((el: Element) => {
    const module = include(el) as { init: () => void }
    module.init()
    return module
  })
}

function onLoad() {
  console.log('DOM fully loaded and parsed')
}

if (document.addEventListener) document.addEventListener('DOMContentLoaded', onLoad)
else (window as Window).attachEvent('onload', onLoad)
