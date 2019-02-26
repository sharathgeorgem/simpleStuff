const divs = document.querySelectorAll('div')

function print (e) {
  console.log(this.classList.value)
  e.stopPropagation()
}

divs.forEach(div => div.addEventListener('click', print, {
  capture: false
}))
