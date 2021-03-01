
const delay = 30000
const target = "[aria-label='Me gusta']"
const scrollBy = 1000

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

  clickEl({
      element: likeBtns[0]
   })

  window.scrollTo(0, window.scrollY + scrollBy)
}