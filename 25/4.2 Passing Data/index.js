import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", (req, res) => {
  const data = {
    htmlContent: "<h1>Enter Your Name below</h1>",
  }
  console.log(data)
  res.render('index.ejs', data)
});

app.post("/submit", (req, res) => {
  const nameLength = req.body['fName'].length + req.body['lName'].length
  res.render('index.ejs',
  {name: nameLength})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
