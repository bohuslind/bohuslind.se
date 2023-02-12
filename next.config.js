const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  //assetPrefix: isProd ? '/bohuslind.se/' : '',
  images: {
    unoptimized: true,
  },
}
