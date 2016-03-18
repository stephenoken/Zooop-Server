"use strict";

process.env.NODE_ENV = "test";

const chai = require("chai");
const expect = chai.expect;
const mongoose = require("mongoose");
const config = require("./../../../../config/index");
mongoose.connect(config.mongodb.uri);

//Models
const User = require("./../../../../app/models/user");
const Advertisements = require("./../../../../app/models/advertisment");

//Test data
const userTestData = require('./../../fixtures/users');
describe('Advertisement Model', function () {
  beforeEach(function (done) {
    userTestData.map((user)=>{
      User.register(user);
    });
    done();
  });

  // afterEach(function (done) {
  //   userTestData.map((user)=>{
  //     User.remove({name:user.name},(err,u)=>{});
  //   });
  //   done();
  // });

  it('find test user', function (done) {
    User.find({},(err,users)=>{
      expect(users).not.to.be.undefined;
      console.log(users);
      expect(users[0].name).to.be.equal("Test User");
      done();
    });
  });
});
