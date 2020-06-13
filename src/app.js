const Koa = require('koa');
const { logger, responseTime } = require('./middleware');
const router = require('./router');

const app = new Koa();
const port = 3000;

app.use(logger);
app.use(responseTime);

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});