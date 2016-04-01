'use strict';

// process.env.NODE_ENV = "test";
const chai = require("chai");
const expect = chai.expect;

const gcm = require('./../../../../app/helpers/cloud_messaging');
const testMessage = require("./../../fixtures/gcm_messages");
const clientTestData = require("./../../fixtures/clients");
// const mongoose = require("mongoose");
// const config = require("./../../../../config/index");
const Client = require("./../../../../app/models/client");

// mongoose.connect(config.mongodb.uri);

describe('GCM', function () {
  beforeEach(function (done) {
    clientTestData.map((client)=>{
      Client.create(client);
    });
    done();
  });

  afterEach(function (done) {
    clientTestData.map((client)=>{
      Client.remove(client,()=>{});
    });
    done();
  });

  it('have clients loaded in the db', function (done) {
    Client.find({},(err,clients)=>{
      expect(clients).to.be.Array;
      expect(clients.length).to.be.equal(3);
      done();
    });
  });
  it('send GCM message to specific user', function (done) {
    gcm.generateDiggy(testMessage,['Mexican'],(err,response)=>{
      expect(response).not.to.be.null;
      expect(response.success).to.be.equal(1);
      expect(response.failure).to.be.equal(1);
      done();
    });
  });
});
