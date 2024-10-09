import { BasketItem, Options } from "../d"

export function options(el: HTMLFormElement): Options {
  const url = new URL(window.location.href);
  const params = new URLSearchParams(url.search);
  const quantity = el.querySelector('#quantity') as HTMLInputElement
  const price = el.querySelector('#price') as HTMLParagraphElement
  const total = el.querySelector('#total') as HTMLParagraphElement
  const firstInput = el.querySelector('input') as HTMLInputElement
  const size = el.querySelector('#size') as HTMLInputElement

  function setUrl() {
    const newUrl = `${window.location.pathname}?${params.toString()}`
    window.history.pushState({}, '', newUrl)
  }

  function setQueryString() {
    const size = params.get('size') || firstInput.id
    const quantity = params.get('quantity') || '1'
    params.set('size', size)
    params.set('quantity', quantity)
    setUrl()
  }

  function setQuantity() {
    total && quantity &&
      (total.innerHTML = `<span>${params.get('quantity')}</span>x ${params.get('size')} ${global['title']}`)
    if (!quantity) return
    const quantityValue = parseInt(params.get('quantity') ?? '') || 0
    quantity.defaultValue = quantityValue.toString()
  }

  function updateQuantity(e: Event) {
    params.set('quantity', (e.target as HTMLInputElement)?.value ?? '')
    setQuantity()
    setUrl()
  }

  function setChecked() {
    const input = el.querySelector(`#${params.get('size')}`) as HTMLInputElement
    input.setAttribute('checked', 'checked')
  }

  function setPrice() {
    if (price) {
      const item = el.querySelector(`[for="${params.get('size')}"]`) as HTMLInputElement
      const value = item ? parseInt(item?.getAttribute('data-price') ?? '') : 0
      const quantity = parseInt(params.get('quantity') ?? '') || 0
      price.innerHTML = `£${(value * quantity).toFixed(2)}`
    }
  }

  function setSize() {
    if (!size) return
    size.value = params.get('size') ?? ''
  }

  function updateSize(e: Event) {
    params.set('size', (e.target as HTMLInputElement)?.value ?? '')
    setQuantity()
    setUrl()
  }

  function radioHandler() {
    const radios = el.querySelectorAll('[type="radio"]')
    for (const radio of radios) {
      radio.addEventListener('change', (e) => {
        updateSize(e)
        setPrice()
      })
    }
  }

  function numberHandler() {
    const number = el.querySelector('[type="number"]')
    if (!number) return
    number.addEventListener('change', (e) => {
      updateQuantity(e)
      setPrice()
    })
  }

  function setBasket() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const json = Array.from(urlParams.entries()).reduce((acc, [key, value]) => {
      acc[key] = value
      return acc
    }, {})

    const item = el.querySelector(`[for="${params.get('size')}"]`) as HTMLInputElement
    const price = item ? parseInt(item?.getAttribute('data-price') ?? '') : '0'
    json['title'] = global['title']
    json['price'] = price
    json['image'] = global['image']

    const basketArray: object[] = []
    basketArray.push(json)
    const basket = JSON.parse(sessionStorage.getItem('basket') as string)
    basket?.forEach((item: BasketItem) => basketArray.push(item))
    sessionStorage.setItem('basket', JSON.stringify(basketArray))

    const event = new Event("basket")
    document.dispatchEvent(event)
  }

  function submitHandler() {
    const submit = document.querySelector('[type="submit"]') as HTMLInputElement
    if (!submit) return
    submit.addEventListener('click', (event) => {
      event.preventDefault()
      setBasket()
    })
  }

  function init() {
    radioHandler()
    numberHandler()
    submitHandler()
    setQueryString()
    setQuantity()
    setChecked()
    setPrice()
    setSize()
  }

  return { init }
}
