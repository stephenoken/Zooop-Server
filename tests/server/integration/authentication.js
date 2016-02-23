'use strict';
const chai = require("chai");
const chaiHttp = require('chai-http');
const expect = chai.expect;
chai.use(chaiHttp);
//Run an instance of the server
process.env.NODE_ENV = 'test';
const server = require("./../../../server");
const userFixture = require('./../fixtures/user');

describe('Authentication', function () {

  var mongoose,
  User;

  before((done)=>{
    // server.on('listening',()=>{
    mongoose = server.get("mongoose");
    User = mongoose.model('User');
    User.create(userFixture,(err)=>{
      if (err) {
        console.log(`Test Mongo --> ${err}`);
      }
    });
    // });
    done();
  });

  // it('sign in a user with valid credentials', function (done) {
  //   chai.request(server)
  //     .post("/login")
  //     .send({
  //       "email": userFixture.email,
  //       "password": 'P@ssw0rd!'
  //     })
  //     .end((err,res)=>{
  //       console.log(err);
  //       expect(res).to.have.status(200);
  //       console.log(res);
  //       expect(res.body.email).to.equal(userFixture.email);
  //       done();
  //     });
  //
  // });
});
