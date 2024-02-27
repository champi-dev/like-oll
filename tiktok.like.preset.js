/* Work in progress */

const waitFor = 10000
const scrollBy = 1000

const hiddenBtns = document.querySelectorAll('[data-e2e="like-icon"]')
clickLikeBtn(hiddenBtns[0].parentElement)

setInterval(() => {
    const hiddenBtns = document.querySelectorAll('[title="like"]')
    hiddenBtns.forEach(btn => clickEl({element: btn.parentElement}))
    window.scrollTo(0, window.scrollY + (scrollBy * hiddenBtns.length))
}, waitFor)

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
    
}
