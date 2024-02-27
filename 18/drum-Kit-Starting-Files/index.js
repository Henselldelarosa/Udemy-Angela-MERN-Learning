const handleCLick = () => {
let audio = new Audio(`sounds/tom-1.mp3`)
audio.play()
}

var numberOfDrumButtons = document.querySelectorAll('.drum').length

// loop through through all those values
for(let i = 0 ; i < numberOfDrumButtons; i++){
  document.querySelectorAll('.drum')[i].addEventListener('click', function(){

    var buttonClicked = this.innerHTML
    keyPressed(buttonClicked)
    buttonAnimation(buttonClicked)
  })
}


// ! Lesson 144

const keyPressed = (key) => {
     // like a if else statement but will listen for what key was clicked
     switch (key) {
      case 'w':{
      let audio = new Audio('sounds/tom-1.mp3')
      audio.play()
      break;
      }

      case 'a':{
        let audio = new Audio('sounds/tom-2.mp3')
        audio.play()
        break
      }

      case 's':{
        let audio = new Audio('sounds/tom-3.mp3')
        audio.play()
        break;
      }

      case 'd':{
        let audio = new Audio('sounds/tom-4.mp3')
        audio.play()
        break;
      }

      case 'j':{
        let audio = new Audio('sounds/snare.mp3')
        audio.play()
        break;
      }

      case 'k':{
        let audio = new Audio('sounds/crash.mp3')
        audio.play()
        break;
      }

      case 'l':{
        let audio = new Audio('sounds/kick-bass.mp3')
        audio.play()
        break;
      }

      default: console.log(buttonClicked)
    }
}

document.addEventListener('keydown', function(e){
  keyPressed(e.key)
  buttonAnimation(e.key)
})

const buttonAnimation = (currentKey) => {
  
  let activeButton = document.querySelector('.' + currentKey)
  activeButton.classList.add("pressed")

  setTimeout(() => {
    activeButton.classList.remove('pressed')
  }, 100);
}
