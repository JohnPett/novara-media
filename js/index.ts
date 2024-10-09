import { options } from './modules/options'
import { basket } from './modules/basket'
import { summary } from './modules/summary'
import { header } from './modules/header'
import { hero } from './modules/hero'
import { article } from './modules/article'
import { drawer } from './modules/drawer'
import { menu } from './modules/menu'
import { Window, Module } from './d'
import './tools/load'
import './tools/marquee'
import './tools/balance'

const setupModules = ({ selector, include }: Module) => {
  return Array.from(document.querySelectorAll(selector)).map((el: Element) => {
    const module = include(el) as { init: () => void }
    module.init()
    return module
  })
}

function onLoad() {
  setupModules({ selector: '#options', include: options })
  setupModules({ selector: '#basket', include: basket })
  setupModules({ selector: '#summary', include: summary })
  setupModules({ selector: '#hero', include: hero })
  setupModules({ selector: 'header', include: header })
  setupModules({ selector: 'article', include: article })
  setupModules({ selector: '#drawer', include: drawer })
  setupModules({ selector: '#menu', include: menu })
}

if (document.addEventListener) document.addEventListener('DOMContentLoaded', onLoad)
else (window as Window).attachEvent('onload', onLoad)
