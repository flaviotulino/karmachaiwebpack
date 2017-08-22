const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);

// Overwrite the expect variable to use chai as promise
expect = chai.expect;


// Set the webpack context
const testsContext = require.context('./app', true, /spec.js$/);
testsContext.keys().forEach(testsContext);