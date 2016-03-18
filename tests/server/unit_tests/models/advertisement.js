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
      User.create(user);
    });
    done();
  });

  afterEach(function (done) {
    userTestData.map((user)=>{
      User.remove({name:user.name},()=>{});
    });
    done();
  });

  it('find test user', function (done) {
    User.find({_id:"554b6fe1a42e7bbc1e932344"},(err,users)=>{
      expect(users).not.to.be.undefined;
      expect(users[0].name).to.be.equal("Test User");
      done();
    });
  });

  it('find advertisement that belongs to retailer', function (done) {

    done();
  });
});
