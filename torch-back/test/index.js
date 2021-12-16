// test goes here
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

require('./api/auth.test');
