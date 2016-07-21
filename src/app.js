'use strict';

import path from 'path';
import bunyan from 'bunyan';
import emoji  from 'node-emoji';
import koa from 'koa';
import compress from 'koa-compress';
import logger from 'koa-logger';
import serve from 'koa-static';
import route from 'koa-route';

global.log = bunyan.createLogger({name: 'klarismo'});

const
  app       = module.exports = koa(),
  homepage  = require('./controllers/homepage');

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

app.on('error', (err, ctx) => {
  log.error('Server error', err, ctx);
});
