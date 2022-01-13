const chai = require('chai');
const chaiHttp = require('chai-http');
const {
  describe,
  it,
  before,
  after,
} = require('mocha');
const { expect } = require('chai');
const User = require('../../models/User');
const server = require('../testServer');

chai.use(chaiHttp);

const chaiAppServer = chai.request(server).keepOpen();
const should = chai.should();

describe('User try to access web', () => {
  after(() => {
    chaiAppServer.close();
    server.close();
  });

  const user = {
    username: 'test_user',
    password: '1123456',
  };

  // Checking existance of the test user (no multiple user for test)
  const exists = User.exists({ username: 'test_user' });
  if (exists) {
    User
      .deleteOne({ username: 'test_user' })
      .then(() => console.log('Cleaned test user'))
      .catch((err) => console.log(err));
  }

  describe('User try to acces by login', () => {
    it('shouldnt fin user', (done) => {
      chaiAppServer
        .post('/api/auth/login')
        .send(user)
        .end((err, res) => {
          res.should.have.status(401);
          expect(res.body.msg).to.eq('Authentication failed. User not found.');
          done();
        });
    });
  });
  describe('user tries to register', () => {
    it('shoud respond with an user created (200)', (done) => {
      chaiAppServer
        .post('/api/auth/register')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.msg).to.eq('Successful created new user.');
          done();
        });
    });
  });
  describe('user tries to register twice', () => {
    it('Api shouldnt allow user to register twice', (done) => {
      chaiAppServer
        .post('/api/auth/register')
        .send(user)
        .end((err, res) => {
          res.should.have.status(401);
          expect(res.body.msg).to.eq('User already exists');
          done();
        });
    });
  });
  describe('User tries to login with right credentials', () => {
    it('Should respond with welcome mesage (200)', (done) => {
      chaiAppServer
        .post('/api/auth/login')
        .send(user)
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.msg).to.eq('Welcome test_user!');
          done();
        });
    });
  });
});
