likeOll()

function likeOll () {
  setInterval(() => {
    const likeBtns = document.querySelectorAll("[aria-label='Me gusta']")

    likeBtns.forEach(btn => {
      clickEl({
        element: btn
      })
    })
   
    window.scrollTo(0, window.scrollY + 1000)
  }, 3000)
  
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
