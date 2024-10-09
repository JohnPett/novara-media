import { Header } from "../d"

export function header(el: HTMLElement): Header {
  function init() {
    const subscribeHeight = document.querySelector('#signup')?.getBoundingClientRect().height ?? 0

    window.addEventListener('scroll', () => {
      if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - subscribeHeight - el.offsetHeight)) {
        el.style.transform = 'translateY(100%)'
      } else {
        el.style.transform = 'translateY(0)'
      }
    })
  }

  return { init }
}
