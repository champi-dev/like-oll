(() => {
/* Tiktok like preset */

const delay = 120000 // 2min
const likeBy = 30
const target = "[data-e2e='like-icon']"
const scrollBy = 15000 * likeBy

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
    if (i + 1 === likeBy) {return} // Only like the first 10
        setTimeout(() => {
            clickEl({
            element: likeBtns[i]
            })
            console.log('like')
        }, 1000 * (i + 1))
    })
  window.scrollTo(0, window.scrollY + scrollBy)
} 
})()
