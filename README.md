# yet-another-nunjucks-koa-render
Allows nunjucks templates to koa 2.0

Create you nunjucks env and pass it to the render. It will be added to Koa
```
const Koa = require('koa')
const nunjucks = require('nunjucks')
const render = require('yet-another-nunjucks-koa-render')

const server = new Koa()

app.use( render(nunjucks.configure('./views'), {ext:'.html'}) )
```