const gameStart = false
let level = 0
let nextPattern = []

// $('div.btn').on('click', function(){
//   let audio = new Audio('sounds/wrong.mp3')
//   audio.play()
// })

$(document).keypress(function() {

  if(!gameStart){
    $('#level-title').text(`Level ${level + 1}`)
    gameStart = true
  }
})

// if(!gameStart){
//   $('div.btn').on('click', function(){
//     let audio = new Audio('sounds/wrong.mp3')
//     audio.play()
//   })

//   $('#level-title').text('Game Over Press Any Key to Restart')
// }
