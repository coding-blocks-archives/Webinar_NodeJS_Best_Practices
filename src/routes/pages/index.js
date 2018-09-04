const route = require('express').Router()

route.use('/articles', require('./articles'))

module.exports = route
