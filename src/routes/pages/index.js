const route = require('express').Router()

route.use((req, res, next) => {
  if (req.user) {
    res.locals.username = req.user.username
  }
  next()
})

route.use('/articles', require('./articles'))
route.use('/auth', require('./auth'))

module.exports = route
