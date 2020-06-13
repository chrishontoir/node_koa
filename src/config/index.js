const config = process.env.NODE_ENV === 'prod'
    ? require('./config.prod.json')
    : require('./config.dev.json');

module.exports = config;