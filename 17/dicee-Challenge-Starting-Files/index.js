// image 1
var randomNumberSelector1 = Math.floor(Math.random() * 6) + 1

var randomeImage1 = 'dice' + randomNumberSelector1 + '.png'

var randomeSCR1 = 'images/' + randomeImage1

document.querySelectorAll('img')[0].setAttribute('src', randomeSCR1)
// image 2
var randomNumberSelector2 = Math.floor(Math.random() * 6) + 1

var randomeImage2 = 'dice' + randomNumberSelector2 + '.png'

var randomeSCR2 = 'images/' + randomeImage2

document.querySelectorAll('img')[1].setAttribute('src', randomeSCR2)

// selecting the winner
var h1 = document.querySelector('h1')

if(randomNumberSelector1 > randomNumberSelector2){
  h1.innerHTML = '🚩Player 1 WINS!'

}
else if(randomNumberSelector1 < randomNumberSelector2){
  h1.innerHTML = 'Player 2 WINS🚩'
}
else{
  h1.innerHTML = 'DRAW'
}
