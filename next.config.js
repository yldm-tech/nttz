const path = require('path')
const runtimeCaching = require('next-pwa/cache')

const withPWA = require('next-pwa')({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
})

module.exports = withPWA({
    webpack: (config) => {
        config.resolve.alias['@'] = path.resolve(__dirname);
        config.resolve.alias['@@'] = path.resolve(__dirname, './components');
        return config;
    },
    // pwa: {
    //     dest: 'public',
    //     runtimeCaching,
    // },
})