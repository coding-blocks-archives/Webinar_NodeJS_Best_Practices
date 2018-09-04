const route = require('express').Router()

route.use('/articles', require('./articles'))
route.use('/users', require('./users'))

module.exports = route
