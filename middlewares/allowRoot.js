const allowRoot = async (req, res, next) => {
  let { type } = req.decoded.user

  if (type === 'root') {
    next()
  } else {
    let result = {
      error: `Authentication error. Access forbidden.`,
      status: 403
    }
    res.status(403).send(result)
  }
}

module.exports = allowRoot
