likeOll()

function likeOll () {
  let counter = 1

  setInterval(() => {
    const likeBtn = document.querySelectorAll("[aria-label='Me gusta']")[counter - 1]
    console.log('likeBtn', likeBtn.textContent + '' + counter)
    clickEl({
        element: likeBtn
    })
    window.scrollTo(0, counter * 2000)
    counter +=1
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
