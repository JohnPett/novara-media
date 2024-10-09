import { Window } from '../d'
import textBalancer from 'text-balancer'
import FontFaceObserver from 'fontfaceobserver'

function onLoad() {
    const font = new FontFaceObserver('Geist-Regular')
    font.load().then(() => {
        textBalancer.balanceText('h2, h3, h4, h5, h6, p:not(.no-balance)')
    })
}

if (document.addEventListener) document.addEventListener('DOMContentLoaded', onLoad)
else (window as Window).attachEvent('onload', onLoad)
