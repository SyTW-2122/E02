const User = require('../../models/User')
const app = require('../../server') // my express app
const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const should = chai.should();

describe('Auth', () => {
  beforeEach((done) => {
  });

  describe('User try to access web', () => {
    const user = {
      "email": "test_user",
      "password": "1123456",
    }
    it('it should register the user', (done) => {
      chai.request(app)
        .post('/api/auth/register')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          // expect(res.body.token).to.be.a("string")
          done();
        });
    });
  })
});
