const Koa = require('koa');
const views = require('koa-views');
const Router = require('koa-router');
const bodyParser = require('koa-body');
const path = require('path');
const config = require('config');
const mongoose = require('mongoose');
const serve = require('koa-static');

// mongoose.connect(config.get('databaseUrl'), {
//   useNewUrlParser: true,
// });

const app = new Koa();
const router = new Router();

app.use(bodyParser({
  multipart: true,
}));
app.use(views(path.join(__dirname, '/src/templates'), {
  extension: 'pug',
  map: {
    pug: 'pug',
  },
}));

app.use(serve(path.join(__dirname, '/src/public')));
router.use('/', require('./src/routes').routes());

app.use(router.routes());
app.listen(config.get('port'));
