const dodger = document.getElementById('dodger')

//dodger.style.bottom = '380px'

function moveDodger(event) {
  const keycode = event.which
  console.log(keycode)
  if (keycode === 37) {
    //this is left arrow key
    let oldLeft = dodger.style.left
    
    if (oldLeft === '0px') {
      return
    }
    
    console.log(oldLeft)
    oldLeft = parseInt(oldLeft, 10)
    
    dodger.style.left = (oldLeft - 10) + 'px'
    } else if (keycode === 39) {
    moveDodgerRight(event)
  }
    //figure out where it is
}

function moveDodgerRight(event) {
  if (event.which === 39) {
    let oldLocation = dodger.style.left
    
    if (oldLocation === '400px') {
      return 
    }
    
    oldLocation  = parseInt(oldLocation, 10)
    
    dodger.style.left = (oldLocation + 10) +'px'
  }
}

document.addEventListener('keydown', moveDodger)