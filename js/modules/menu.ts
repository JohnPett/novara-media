export function menu(el: HTMLElement) {
  function init() {
    let open = false

    el.addEventListener('click', () => {
      const drawer = document.querySelector('#drawer') as HTMLElement

      if (open) {
        drawer.style.transform = 'translateX(100%)'
      } else {
        drawer.style.transform = 'translateX(0)'
      }

      open = !open
    })
  }

  return { init }
}
