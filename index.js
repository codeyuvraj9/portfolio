const express = require('express');
const app = express();
const port = 5000;


const path = require("path");

const mongoDB = require("./db");
mongoDB();

var cors = require('cors')
app.use(cors())
app.use(express.json());

//Available Routes
app.use('/api/review', require('./Routes/UserReview'));

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "frontend", "build")));
  res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})