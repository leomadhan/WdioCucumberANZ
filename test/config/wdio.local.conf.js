const { config } = require('./wdio.shared.conf')

exports.config = {
    ...config,
    ...{
      services: ['selenium-standalone'],
      capabilities: [
          {
            maxInstances: 5,
            browserName: 'chrome',
            'goog:chromeOptions': {
                //headless: true
            }
        }, 
       /* {
          browserName: 'internet explorer',
          maxInstances: 1,
          timeouts: { "implicit": 5000 },
        } */     

        // {
        //   maxInstances: 5,
        //   browserName: 'safari',
        // },

      ]
    }
}
