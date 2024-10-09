import { Basket } from "../d"

export function basket(el: HTMLElement): Basket {
  function basketHandler() {
    console.log('basket')
    const submit = document.querySelector('[type="submit"]') as HTMLInputElement
    submit.blur()
    el.focus()
    setCount()
  }

  function setCount() {
    const basket = JSON.parse(sessionStorage.getItem('basket') ?? '[]')
    const count = el.querySelector('#count') as HTMLElement
    if (basket.length < 10 && basket.length > 0) {
      count.innerHTML = basket.length
      return
    }
    if (basket.length > 9) {
      count.innerHTML = '<span class="text-[10px]">+</span>'
    }
  }

  function init() {
    document.addEventListener('basket', () => basketHandler())
    setCount()
  }

  return { init }
}
