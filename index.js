
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

function getNumber() {
  const limit = 10
  const numbers = Array(limit).fill(null).map(() => {

    return {
      lhf: Math.floor(Math.random() * 10),
      rhs: Math.floor(Math.random() * 10)
    }
  })
  return {
    data: {
      numbers
    }
  }
}
app.get('/', (req, res) => {
  res.status(200)
  res.write('hello')
  res.end()
})

app.get('/numbers', (req, res) => {
  res.status(200)
  const data = getNumber()
  res.json(data)
  res.end()
})

let PORT = process.env.PORT || 3000;
app.listen(PORT)
