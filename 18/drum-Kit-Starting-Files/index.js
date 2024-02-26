const handleCLick = () => {
let audio = new Audio(`sounds/tom-1.mp3`)
audio.play()
}

// for(let i = 0 ; i< document.querySelectorAll('.drum').length; i++){
//   let button = document.querySelectorAll('button')[i].addEventListener('click', handleCLick)
//   console.log(this)
// }

// or
/*

*/

// get all the class with the name of drum
var numberOfDrumButtons = document.querySelectorAll('.drum').length

// loop through through all those values
for(let i = 0 ; i < numberOfDrumButtons; i++){
  document.querySelectorAll('.drum')[i].addEventListener('click', function(){

    var buttonClicked = this.innerHTML
    // like a if else statement but will listen for what key was clicked
    switch (buttonClicked) {
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

    // this.style.color='white'
  })
}
