const app = require("../app");
const Post = require("../models/User");
const mongoose = require("mongoose");
const supertest = require("supertest");
const uri = 'mongodb+srv://torch-carrier:olympic!@torch.gzcmz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

describe("POST /api/auth/register", () => {
 
  describe("when passed a username and password", () => {
    test("should specify json as the content type in the http header", async () => {
      const post = await Post.create({ title: "Register attempt", content: {
        username: "username",
        password: "password",
      }})
      await supertest(app).get('/api/auth/register')
        .expect(200)
        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
          done();
        });
    })
  });
});

describe("POST /api/auth/login", () => {

});