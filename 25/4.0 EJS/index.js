import express from 'express'


const app = express()
const port = 3000

const today = new Date()
const day = today.getDay()
const dayNames = ['Sunday', 'Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const weekdayArr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
const weekendArr =['Sunday', 'Saturday']
let weekend = ''
let weekday = ''

if(weekdayArr.includes[dayNames[day]]) {
  weekday = weekday + dayNames[day]
}
else{
  weekend = weekend + dayNames[day]
}
console.log(weekday, weekend)

app.get('/', (req, res) => {
  res.render('index.ejs',
  {dayType: 'a weekend,',
   advice: "It's time to work hard"}
  )
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
