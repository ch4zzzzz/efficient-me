const path = require('path')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const PrerenderSPAPlugin = require('prerender-spa-plugin');
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;

module.exports = {
  publicPath: "/",
  assetsDir: "static",
  pages: {
    index: {
      entry: "./src/main.js",
      templage: './public/index.html',
      filename: 'index.html',
      title: 'efficient-me',
    }
  },
  chainWebpack: config => {
    config.plugins.delete('prefetch');
  },
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin(),
      new PrerenderSPAPlugin({
        // Required - The path to the webpack-outputted app to prerender.
        staticDir: path.join(__dirname, 'dist'),
        // Required - Routes to render.
        routes: [ '/', '/login/', '/task-list/'],
      })
    ]
  }

}

