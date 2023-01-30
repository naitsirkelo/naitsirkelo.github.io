const CracoLessPlugin = require('@semantic-ui-react/craco-less');

module.exports = {
    plugins: [
    {plugin: CracoLessPlugin}],
    webpack: {
        configure: (webpackConfig) => {
          webpackConfig.module = {
            rules: []
          };
    
          return webpackConfig;
        }
      }
    /*
    webpack: {
        configure: {
            module: {
                rules: [
                    {
                        type:"javascript/auto",
                        test: /\.mjs$/,
                    include: /node_modules/,
                    }
                ]
            }
        }
    }
    */
}