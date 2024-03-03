let gameStart = false
let level = 0
let nextSequence = []
let userPressedPattern = []
let colorChoice = ['green', 'red', 'yellow', 'blue']


$(document).keypress(function() {
  if(!gameStart){
    $('#level-title').text('Level ' + level)
    pattern()
    gameStart = true
  }
})

$('.btn').on('click', function() {
  let userChoice = $(this).attr('id')
  userPressedPattern.push(userChoice)
  playSound(userChoice)
  animate(userChoice)
  checkAnswer(userPressedPattern.length - 1)
})

const animate = (color) => {
  $('#' + color).addClass('pressed')

  setTimeout(() => {
    $('#' + color).removeClass('pressed')
  }, 100);
}

const playSound = (name) => {
  const audio = new Audio('sounds/' + name + '.mp3')
  audio.play()
}

const pattern = () => {
  userPressedPattern = []
  level++

  $('#level-title').text('Level ' + level)

  let randomeChoice = Math.floor(Math.random() * 4)
  let color = colorChoice[randomeChoice]

  nextSequence.push(color)

  $('#' + color).fadeIn(100).fadeOut(100).fadeIn(100)
  playSound(color)
}

const checkAnswer = (level) => {
  if(nextSequence[level] === userPressedPattern[level]){
    if(userPressedPattern.length === nextSequence.length){
      setTimeout(() => {
        pattern()
      }, 1000);
    }
  }

  else{
    playSound('wrong')
    $('body').addClass('game-over')
    $('#level-title').text('Game Over, Press Any Key to Restart')

    setTimeout(function() {
      $('body').removeClass('game-over')
    }, 200);

    startOver()
  }
}

const reStart = () => {
  level = 0
  userPressedPattern = []
  nextSequence = []
  gameStart = false
}
