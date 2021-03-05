/*  Work in progress - still not working */

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
    let shouldStop = false

    els.forEach((element) => {
      const shouldShare = shouldStop === false && element.innerText === 'Compartir'

      if (shouldShare) {
        shouldStop = true
        clickEl({ element })
        initialShareConfirmation()
      }
    })
  }

  function initialShareConfirmation() {
    let els = document.querySelectorAll('span')

    els.forEach((element) => {
      const shouldShare = element.innerText === 'Compartir ahora (Personalizado)'

      if (shouldShare) {
        console.log('got you!')
        clickEl({ element })
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

/*
(() => {
    initialShareConfirmation()

    function initialShareConfirmation() {
    let els = document.querySelectorAll('span')

    els.forEach((element) => {
      const shouldShare = element.innerText === 'Compartir ahora (Personalizado)'

      if (shouldShare) {
        console.log('got you!')
        clickEl({ element })
      }
    })
  }
})() 
*/
