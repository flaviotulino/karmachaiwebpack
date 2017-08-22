let config = {
    framework: 'mocha',
    //frameworkPath: require.resolve('mocha'),
    specs: ['./app/**/*.e2e.js'],
    onPrepare: function () {
        browser.driver.manage().window().setSize(1680, 1050);
        const chai = require('chai');
        const chaiAsPromised = require('chai-as-promised');

        chai.use(chaiAsPromised);
        expect = chai.expect;

    },
    mochaOpts: {
        reporter: "spec",
        timeout: 10000
    },
    directConnect: true
};

exports.config = config;