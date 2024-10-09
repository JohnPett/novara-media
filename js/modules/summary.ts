import { BasketItem, Summary } from "../d"

export function summary(el: HTMLImageElement): Summary {
  function init() {
    const basket = JSON.parse(sessionStorage.getItem('basket') ?? '{}')
    if (!basket.length) return
    el.style.display = 'block'
    let total = 0
    const wrapper = document.querySelector('#summary > div') as HTMLElement
    basket.forEach((item: BasketItem) => {
      total += parseInt(item.price) * parseInt(item.quantity)
      wrapper.innerHTML += `
        <div class="flex justify-between min-w-prose">
          <span class="flex">
            <img src="${item.image}" alt="${item.title}" class="w-20 aspect-[9/16] mr-5 object-cover block">
            ${item.quantity}x ${item.size} ${item.title}
          </span>
          <span class="ml-10">£${parseInt(item.price) * parseInt(item.quantity)}</span>
        </div>
      `
    })
    wrapper.innerHTML += `
      <hr>
      <div class="flex justify-between">
        <h6>Total</h6>
        <strong>£${total}</strong>
      </div>
    `
  }

  return { init }
}
