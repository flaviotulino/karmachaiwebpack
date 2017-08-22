// Set the webpack context
const testsContext = require.context('./app', true, /spec.js$/);
testsContext.keys().forEach(testsContext);

// Set chai to use chai-as-promised and expose it
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

const expect = chai.expect;

export {expect};