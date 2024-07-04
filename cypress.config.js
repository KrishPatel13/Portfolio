const { defineConfig } = require('cypress')

module.exports = defineConfig(
  {
    projectId: "nh4iu3",
    e2e: {
        baseUrl: 'http://localhost:3000',
        supportFile: false,
    },
  }
)

