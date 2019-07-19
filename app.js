const Koa = require('koa');
const views = require('koa-views');
const Router = require('koa-router');
const path = require('path');
const serve = require('koa-static');

const app = new Koa();
const router = new Router();

app.use(views(path.join(__dirname, '/src/templates'), {
  extension: 'pug',
  map: {
    pug: 'pug',
  },
}));

app.use(serve(path.join(__dirname, '/src/public')));
router.use('/', require('./src/routes').routes());

app.use(router.routes());
const PORT = process.env.PORT || 3000;
app.listen(PORT);
