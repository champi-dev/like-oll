(() => {
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

/* -- */
const getLikeBtns = () => document.querySelectorAll('[aria-label=Like]')
const likeAndScroll = () => {
    const currentLikeBtns = getLikeBtns()

    currentLikeBtns.forEach((btn, i) => {
        if (i + 1 === 10) { return }
        clickEl({ element: btn })
    })

    window.scrollTo(0, window.scrollY + 10000)
}

likeAndScroll()
setInterval(likeAndScroll, 60000)

})()
