const responseTime = async (ctx, next) => {
    const start = Date.now();
    await next();
    const elapsed = Date.now() - start;
    ctx.set('X-Response-Time', `${elapsed}ms`);
};

module.exports = responseTime;
