const co = require('co')
const _ = require('lodash')

module.exports = function (nunjucks, opts) {
  opts = opts || {}
  opts.ext = opts.ext || ''

  return co.wrap(function * (ctx, next) {
    ctx.render = function (view, context) {
      return new Promise(function (resolve, reject) {
        nunjucks.render(view + opts.ext, _.merge({}, ctx.state, context), function (err, body) {
          if (err) { return reject(err) }

          ctx.body = body
          resolve()
        })
      })
    }

    yield next()
  })
}
