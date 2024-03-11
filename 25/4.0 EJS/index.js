import express from 'express'


const app = express()
const port = 3000

const today = new Date()
const day = today.getDay()

let message = 'a weekday'
let advice = "It's time to work hard"

if(day === 0 || day === 6) {
  message = "the weekend"
  advice =  "It's time to have some fun"
}

console.log(today)

app.get('/', (req, res) => {
  res.render('index.ejs',
  {dayType: `${message}`,
   advice: `${advice}`}
  )
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
