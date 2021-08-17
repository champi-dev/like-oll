/* Work in progress */

const hiddenBtns = document.querySelectorAll('[title="like"]')
const waitFor = 10000
const likeBy = 10
const scrollBy = 2000

clickEl({element: hiddenBtns[0].parentElement})
// setInterval(() => hiddenBtns.forEach((btn, i) => (i <= likeBy) && clickLikeBtn(btn.parentElement)), waitFor) // [TODO]: Fix this line to like and scroll

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
    clickEl({
        element: btn
    })
    console.log('like')
    window.scrollTo(0, window.scrollY + scrollBy)
    
}
