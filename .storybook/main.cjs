const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite"
  },
  features: {
    storyStoreV7: true,
    interactionsDebugger: true
  },
  async viteFinal(config, {configType}) {
    const teste = process.env.FLOW
    console.log(teste)
    
    if (teste === 'PUBLISH') {
      config.base = '/react-design-system/'
    }
    console.log(config)
    return config
    
  }
}