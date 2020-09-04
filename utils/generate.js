const uniqueString = require('unique-string')

exports.key = () => {
  return uniqueString().substr(Math.floor(Math.random() * 16), 16)
}

exports.secret = () => {
  return uniqueString()
}
