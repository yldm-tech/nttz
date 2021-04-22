const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
    future: {
        webpack5: true,
    },
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        config.resolve.alias['@@'] = path.resolve(__dirname, './components');
        return config;
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
})