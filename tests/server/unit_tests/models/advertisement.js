"use strict";

process.env.NODE_ENV = "test";

const chai = require("chai");
const expect = chai.expect;
const mongoose = require("mongoose");
const config = require("./../../../../config/index");
mongoose.connect(config.mongodb.uri);

//Models
const User = require("./../../../../app/models/user");
const Advertisement = require("./../../../../app/models/advertisment");

//Test data
const userTestData = require('./../../fixtures/users');
const advertTestData = require('./../../fixtures/advertisements');
describe('Advertisement Model', function () {
  beforeEach(function (done) {
    userTestData.map((user)=>{
      User.create(user);
    });
    advertTestData.map((advert)=>{
      Advertisement.create(advert);
    });
    done();
  });

  afterEach(function (done) {
    userTestData.map((user)=>{
      User.remove({name:user.name},()=>{});
    });
    advertTestData.map((advert)=>{
      Advertisement.remove(advert,()=>{});
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

  it('find adverts', function (done) {
    Advertisement.find({},(err,adverts)=>{
      expect(adverts.length).to.be.equal(3);
      done();
    });
  });

  it('find advertisement that belongs to retailer', function (done) {
    Advertisement.getRetialerAds("554b6fe1a42e7bbc1e932344",(err,adverts)=>{
      expect(adverts).to.be.array;
      expect(adverts.length).to.be.equal(2);
      const advert = adverts[0];
      expect(advert.adInfo.name).to.equal('Advert1');
      expect(advert.shopInfo).not.be.undefined;
      done();
    });
  });

  it('find retialer of advertisements', function (done) {
    Advertisement.getAndroidAds((err,adverts)=>{
      expect(adverts.length).to.be.equal(3);
      const advert = adverts[0];
      expect(advert.adInfo.name).to.have.equal('Advert1');
      expect(advert.shopInfo).not.be.undefined;
      expect(advert.shopInfo.name).to.equal("Test User");
      done();
    });
  });
});
