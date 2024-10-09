import { Window } from '../d'

function onLoad() {
    const marquee = document.querySelector('[data-marquee') as HTMLElement
    marquee.innerHTML = marquee.innerHTML.repeat(10)
}

if (document.addEventListener) document.addEventListener('DOMContentLoaded', onLoad)
else (window as Window).attachEvent('onload', onLoad)


