'use strict';

process.env.NODE_ENV = "test";

const chai = require("chai");
const expect = chai.expect;

//Models
const Client = require('./../../../../app/models/client');

const clientTestData = require("./../../fixtures/clients");

describe('CLient Model', function () {
  beforeEach(function (done) {
    clientTestData.map((client)=>{
      Client.create(client);
    });
    done();
  });

  afterEach(function (done) {
    Client.remove({},()=>{});
    done();
  });

  it('can create a new client', function (done) {
    Client.create({
      name: 'Harpreet Harpitson5',
      preferences: 'French',
      _id: 'fdfhdgfg'
    },(err,client)=>{
      console.log(err);
      expect(err).to.be.equal(null);
      expect(client).not.to.be.equal(null);
      expect(client.name).to.be.equal("Harpreet Harpitson5");
      done();
    });
  });
});
