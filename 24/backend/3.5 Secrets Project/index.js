import express from "express";
import {dirname} from 'path'
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
const port = 3000;
// const password = 'ILoveProgramming'
let userIsAuth = false

app.use(bodyParser.urlencoded({extended:true}))

// const passwordCheck = (req, res, next) => {
//   if(password === req.body['password']){
//     res.sendFile(__dirname + '/public/secret.html')
//   }else{
//     res.sendFile(__dirname + '/public/index.html')
//   }

//   next()
// }

// or
const passwordCheck = (req, res, next) => {
  const password = 'ILoveProgramming'
  if(password === req.body['password']){
    userIsAuth = true
  }
  next()
}


app.use(passwordCheck)

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.post('/check', (req,res) => {
  if(userIsAuth){
    res.sendFile(__dirname + '/public/secret.html')
      }else{
        res.sendFile(__dirname + '/public/index.html')

  }
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
