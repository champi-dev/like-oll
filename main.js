
const delay = 30000
const target = "[aria-label='Me gusta']"

likeOll()

function likeOll () {
  clickManyEls()
  setInterval(clickManyEls, delay)
  
  function clickManyEls () {
    const likeBtns = document.querySelectorAll(target)

    likeBtns.forEach(btn => {
      clickEl({
        element: btn
      })
    })
   
    window.scrollTo(0, window.scrollY + 1000)
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
}
