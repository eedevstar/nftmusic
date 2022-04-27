module.exports = {
  reactStrictMode: true,
  env: {
    API_HOST: process.env.API_HOST,
  },
  styledComponents: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}
