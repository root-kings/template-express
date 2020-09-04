let router = require('express').Router()

router.use('/api/auth', require('./auth'))
router.use('/api/users', require('./user'))
router.use('/api/utils', require('./util'))

router.get('/api', (req, res) => {
  res.send('Please read documentation for the API.')
})

router.get('/', (req, res) => {
  res.redirect('/api')
})

module.exports = router
