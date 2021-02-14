module.exports = {
  productionSourceMap: false,

  configureWebpack: (config) => {
    config.resolve.extensions = ['*', '.js', '.vue', '.json', '.scss'];
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/global.scss";',
      },
    },
  },

  publicPath: process.env.NODE_ENV === 'production' ? '/vue-travel-materialize/' : '/',
};
