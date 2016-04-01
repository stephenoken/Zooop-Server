'use strict';

const chai = require("chai");
const expect = chai.expect;
const gcm = require('./../../../../app/helpers/cloud_messaging');
const testMessage = require("./../../fixtures/gcm_messages");
const clientTestData = require("./../../fixtures/clients");

describe('GCM', function () {
  it('should send GCM message to specific user', function (done) {
    gcm.generateDiggy(testMessage,[clientTestData[0]._id],(err,response)=>{
      expect(response).not.to.be.null;
      expect(response.success).to.be.equal(1);
      expect(response.failure).to.be.equal(0);
      done();
    });
  });
});
