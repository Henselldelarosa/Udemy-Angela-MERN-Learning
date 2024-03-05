import express from 'express'

const port = 3000

const app = express()

app.get("/", (req, res) => {
  res.send("<h1>Home</h1>")
})

app.get("/contact", (req, res) => {
  res.send("<h1>Contact</h1>")
})

app.get("/about", (req, res) => {
  res.send("<h1>About</h1>")
})

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`)
})
