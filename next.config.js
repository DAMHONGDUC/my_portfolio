/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  i18n,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  optimizeFonts: false,
  trailingSlash: false,
  swcMinify: true,
}

module.exports = nextConfig
