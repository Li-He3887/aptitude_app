const DotenvFlow = require('dotenv-flow-webpack')
const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})
const withSourceMaps = require('@zeit/next-source-maps')()

const nextConfig = {
  webpack: (config, options) => {
    // Perform customizations to webpack config
    // Important: return the modified config
    config.plugins.push(new DotenvFlow())

    if (!options.isServer) {
      config.resolve.alias['@sentry/node'] = '@sentry/browser'
    }

    return config
  }
}

module.exports = withPlugins(
  [[withSourceMaps], [withBundleAnalyzer], [withImages]],
  nextConfig
)
