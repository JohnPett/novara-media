import { Window } from '../d'
import imagesLoaded from 'imagesloaded'
import FontFaceObserver from 'fontfaceobserver'


function onLoad() {
    const font = new FontFaceObserver('Geist-Regular')
    font.load().then(() => {
        imagesLoaded(document.body, () => document.body.style.opacity = '1')
    })
}

if (document.addEventListener) document.addEventListener('DOMContentLoaded', onLoad)
else (window as Window).attachEvent('onload', onLoad)

