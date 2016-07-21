'use strict';

var path = require('path'),
    bunyan = require('bunyan'),
    emoji = require('node-emoji'),
    koa = require('koa'),
    compress = require('koa-compress'),
    logger = require('koa-logger'),
    serve = require('koa-static'),
    route = require('koa-route'),
    app = module.exports = koa();

global.log = bunyan.createLogger({ name: 'klarismo' });

var homepage = require('./controllers/homepage');

app.context.port = process.env.PORT || 2000;

app.use(logger());
app.use(compress());
app.use(serve(path.join(__dirname, '..', 'public')));
app.use(require(path.join(__dirname, '..', 'config', '404.js')));
require(path.join(__dirname, '..', 'config', 'rendering.js'))(app);

app.use(route.get('/', homepage.home));

if (!module.parent) {
  app.listen(app.context.port);
  log.info('Uplio is listening on port %s %s', app.context.port, emoji.get('grimacing'));
}

app.on('error', function (err, ctx) {
  log.error('Server error', err, ctx);
});