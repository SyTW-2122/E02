const supertest = require('supertest');
const should = require('chai').should();
const app = require('../app');
// This agent refers to PORT where program is runninng.

// UNIT test begin

describe('SAMPLE unit test', async() => {
  // #1 should return home page

  const server = await supertest.agent('http://localhost:5000');
  it('should return 200', (done) => {
    server
      .get('/user(get-usr')
      .send({
        username: 'eric',
        password: '1234'
      })
      .expect(200)
      .end((err, res) => {
        res.status.should.equal(200);
        done();
      });
  });
});
