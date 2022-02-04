require('dotenv').config()
const express = require('express')
const routes = require('./backend/src/routes')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

if ( process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))

  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT
app.listen(PORT, () => console.log('running...'))