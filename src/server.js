const express = require('express')
const path = require('path')
const hbs = require('express-hbs')

const app = express()

app.engine('hbs', hbs.express4({
  partialsDir: path.join(__dirname, '../views/partials'),
  layoutsDir: path.join(__dirname, '../views/layouts'),
  defaultLayout: path.join(__dirname, '../views/layouts/main.hbs')
}))

app.use('/', express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', require('./routes/pages'))
app.use('/api', require('./routes/api'))

module.exports = {
  app
}
