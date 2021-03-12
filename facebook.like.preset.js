(() => {
/* Facebook like preset */

const delay = 1800000 // 30 min
const target = "[aria-label='Me gusta']"
const scrollBy = 15000

clickManyEls()
setInterval(clickManyEls, delay)

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

function clickManyEls () {
  const likeBtns = document.querySelectorAll(target)
    likeBtns.forEach((btn, i) => {
    if (i + 1 === 10) {return} // Only like the first 10
        setTimeout(() => {
            clickEl({
            element: likeBtns[i]
            })
        }, 1000 * (i + 1))
    })
  window.scrollTo(0, window.scrollY + scrollBy)
} 
})()
