const hiddenBtns = document.querySelectorAll('span.Hidden')
setInterval(() => hiddenBtns.forEach(clickLikeBtn), 1000)

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

function clickLikeBtn (btn) {
    if (btn.innerText === 'LIKE') {
        clickEl({
            element: btn
        })
    }
}
