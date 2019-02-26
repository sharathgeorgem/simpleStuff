function moveHand () {
  const secondHand = document.querySelector('.second-hand')
  const minHand = document.querySelector('.min-hand')
  const hourHand = document.querySelector('.hour-hand')

  const now = new Date()

  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hour = now.getHours()

  const secondDegree = 90 + seconds * 6 // (seconds/60) * 360
  const minDegree = 90 + minutes * 6
  const hourDegree = 90 + hour * 30 // (hour/12) * 360

  secondHand.style.transform = `rotate(${secondDegree}deg)`
  minHand.style.transform = `rotate(${minDegree}deg)`
  hourHand.style.transform = `rotate(${hourDegree}deg)`
}

setInterval(moveHand, 1000)
