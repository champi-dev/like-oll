/*  
  Work in progress
  [TODO]:
    - Make sure that it doesn't share the same post always
    - Handle "Post has already been shared" error
*/

(async () => {
  const delayBy = 10000
  const scrollBy = 10000

  setInterval(shareThenScroll, delayBy)
  /*
  *
  *
  **** Utils
  *
  *
  */
  async function shareThenScroll () {
    await shareFlow()
    scroll()
  }

  async function shareFlow () {
    findByTextAndClick('Share')
    await sleep()

    findByTextAndClick('Review')
    await sleep()

    findByTextAndClick('Post')
    await sleep()
  }

  function scroll () {
    window.scrollTo(0, window.scrollY + scrollBy)
  }

  function findByTextAndClick(actionableText) {
    let els = document.querySelectorAll('span')

    els.forEach((element, i) => {
        const shouldShare = element.innerText === actionableText

        if (shouldShare) {
            clickEl({ element })
        }
    })
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

  function sleep () {
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000)
    })
  }
})()
