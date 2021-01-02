const express = require('express')
const app = express()
const port = 8080

// test data for now, use MongoDB later
var testData = [{
  name: 'song1',
  composer: 'edward',
  progress: 50
},
{
  name: 'song2',
  composer: 'daniel',
  progress: 80
},
{
  name: 'song3',
  composer: 'eric',
  progress: 100
}
]

app.get('/test', (req, res) => {
  res.send(testData);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})