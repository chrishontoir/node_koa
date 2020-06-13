const logger = async (ctx, next) => {
    await next();
    const responseTime = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method}  ${ctx.url} - ${responseTime}`);
};

module.exports = logger;
