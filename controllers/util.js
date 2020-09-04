const User = require('../models/user').model

exports.checkUsernameAvailability = (req, res) => {
  const { username } = req.query

  User.findOne({ username })
    .then(doc => {
      if (doc) return res.send(false)
      else return res.send(true)
    })
    .catch(err => {
      console.error({ err })
      return res.status(500).send({ err })
    })
}

exports.checkEmailAvailability = (req, res) => {
  const { email } = req.query

  User.findOne({ email })
    .then(doc => {
      if (doc) return res.send(false)
      else return res.send(true)
    })
    .catch(err => {
      console.error({ err })
      return res.status(500).send({ err })
    })
}
