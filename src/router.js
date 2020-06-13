const Router = require('@koa/router');
const { get } = require('./handlers');

const router = new Router();

router.get('/', get);

module.exports = router;
