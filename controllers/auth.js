const jwt = require('jsonwebtoken')

const User = require('../models/user').model

exports.login_post = async (req, res) => {
  const { email, password, type } = req.body

  User.findOne({ email, password, type })
    .lean()
    .then(user => {
      if (user) {
        // Create a token
        const payload = { user }
        const options = {
          expiresIn: process.env.JWT_EXPIRES,
          issuer: process.env.JWT_ISSUER
        }
        const secret = process.env.JWT_SECRET
        const token = jwt.sign(payload, secret, options)

        return res.send({
          status: true,
          token,
          user
        })
      } else {
        return res.send({
          status: false
        })
      }
    })
    .catch(err => {
      console.error(err)
      return res.status(500).send({ err })
    })
}

exports.login_status_get = (req, res) => {
  res.send({ success: true })
}
