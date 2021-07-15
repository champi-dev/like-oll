(() => {
  const intervalTime = 30000 // 30s
  const likeBy = 2

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
        setTimeout(() => {
          if (i + 1 >= likeBy) { return }
          clickEl({ element: btn })
          console.log('like')
        }, 1000 * i)
    })

    window.scrollTo(0, window.scrollY + 10000)
}

likeAndScroll()
setInterval(likeAndScroll, intervalTime)
})()
