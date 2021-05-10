const path = require('path')

module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['media.graphcms.com'],
  },
  webpack: function(config) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['data'] = path.join(__dirname, 'data')
    config.resolve.alias['lib'] = path.join(__dirname, 'lib')
    return config
  },
}
