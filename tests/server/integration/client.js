'use strict';

const chai = require("chai");
const expect = chai.expect;
const request = require('request');
const testData = require("./../fixtures/routes_test_data");

const Client = require("./../../../app/models/client");
const baseUrl = "http://localhost:5001/clients";

describe('Client Android Routes', function () {
  it('post user gcm and food preferences', function (done) {
    request({
      method: 'POST',
      url: `${baseUrl}/new-info`,
      form: testData.clientData
    },(err,res,body)=>{
      expect(res.statusCode).to.be.equal(200);
      const result = JSON.parse(body);
      console.log(result);
      expect(result.status).to.be.equal("success");
      Client.remove({_id:result.clientId},()=>{
        done();
      });
    });
  });
  it('returns an error when passed incomplete data', function (done) {
    request({
      method: 'POST',
      url: `${baseUrl}/new-info`,
      form: testData.clientData
    },(err,res,body)=>{
      expect(res.statusCode).to.be.equal(200);
      const result = JSON.parse(body);
      expect(result.status).to.be.equal("error");
      done();
    });
  });
});
