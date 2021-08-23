const path = require('path')
const cacheExpire = 60*60*24*365

module.exports = {
  webpack5: true,
  images: {
    domains: ['media.graphcms.com'],
  },
  webpack: function(config) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['data'] = path.join(__dirname, 'data')
    config.resolve.alias['lib'] = path.join(__dirname, 'lib')
    return config
  },
  async headers() {
    return [
      {
        source: '/channel',
        headers: [
          {
            key: 'Pragma',
            value: 'public',
          },
          {
            key: 'CUSTOM-HEADER-FOOL',
            value: 'FUGGABUGGER'
          },
          {
            key: 'Cache-Control',
            value: `public, maxage=${cacheExpire}`,
          },
          {
            key: 'Expires',
            value: new Date(Date.now() + cacheExpire).toUTCString(),
          },
        ]
      }
    ]
  },
}
