let config = {};
if (process.env.NODE_ENV === 'production') {
    config = require('./config-prod');
} else {
    config = require('./config-dev');
}

module.exports = config;
