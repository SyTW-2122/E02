const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = require('chai');
const User = require('../../models/User');
const app = require('../../server');
const should = chai.should();

describe('Auth', () => {
  describe('User try to access web', () => {
    const user = {
      username: 'test_user',
      password: '1123456',
    };
    it('it should register the user', (done) => {
      chai.request(app)
        .post('/api/auth/register')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.msg).to.eq('Successful created user.');
          done();
        });
    });
    it('it should dont allow registering twice', (done) => {
      chai.request(app)
        .post('/api/auth/register')
        .send(user)
        .end((err, res) => {
          res.should.have.status(401);
          expect(res.body.msg).to.eq('User already exists');
          done();
        });
    });
  });
});
