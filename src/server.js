const express = require('express')
const path = require('path')

const app = express()

app.use('/', express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routes/pages'))
app.use('/api', require('./routes/api'))

module.exports = {
  app
}
