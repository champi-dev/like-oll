/*  Work in progress  */

(() => {
  initialShare()
  /*
  *
  *
  **** Utils
  *
  *
  */
  function initialShare() {
    let els = document.querySelectorAll('span')

    els.forEach((element, i) => {
        const shouldShare = element.innerText === 'Compartir'

        if (shouldShare) {
            clickEl({ element })
            setTimeout(initialShareConfirmation, 1000)
        }
    })
  }

  function initialShareConfirmation() {
    let els = document.querySelectorAll('span')

    els.forEach((element) => {
      const shouldShare = element.innerText === 'Compartir ahora (Personalizado)'

      if (shouldShare) {
        clickEl({ element })
        console.log('shared successfully')
      }
    })
  }

  function clickEl({ selector, element }) {
    const el = element || document.querySelector(selector)
    const { x, y } = el.getBoundingClientRect()

    el.dispatchEvent(
      new MouseEvent('click', {
        clientX: x,
        clientY: y,
        isTrusted: true,
        bubbles: true
      }))
  }
})()
