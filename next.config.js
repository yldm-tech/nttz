const path = require('path')
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')

module.exports = withPWA({
    distDir: 'out',
    future: {
        webpack5: true,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    pwa: {
        dest: 'public',
        runtimeCaching,
    },
})