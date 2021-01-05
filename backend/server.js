//express init
const express = require("express");
const app = express();
const port = 8080;

var bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.urlencoded());

//firebase init
var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// test data for now, use MongoDB later
var testData = [
  {
    name: "song1",
    composer: "edward",
    progress: 50,
  },
  {
    name: "song2",
    composer: "daniel",
    progress: 80,
  },
  {
    name: "song3",
    composer: "eric",
    progress: 100,
  },
];

app.get("/test", (req, res) => {
  res.send(testData);
});

app.post("/add", (req, res) => {
  var data = {
    name: req.body.name,
    composer: req.body.composer,
    progress: 0,
  }
  testData.push(data);
  console.log(testData);
});

// app.post("/del", (req, res) => {
  
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
