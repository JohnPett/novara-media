import { randomColour } from "../tools/colours"
import { randomNumber } from "../tools/random"
import { shapes } from "../tools/shapes"

export function article(el: HTMLElement) {
  function init() {
    const gradients = [...el.querySelectorAll('[aria-hidden="true"]')]

    function setGradient(gradient) {
      gradient.style.transform = `scale(${randomNumber(30, 50)})`
      gradient.style.filter = `blur(${randomNumber(2, 4)}px`
      gradient.style.top = `${randomNumber(20, 70)}%`
      gradient.style.left = `${randomNumber(20, 70)}%`
      gradient.innerHTML = shapes[Math.floor(Math.random() * shapes.length)]
    }

    if (gradients.length > 0) {
      gradients.forEach((gradient: Element) => {
        setGradient(gradient)
      })
      el.style.setProperty('background-color', randomColour())
    }
  }

  return { init }
}
