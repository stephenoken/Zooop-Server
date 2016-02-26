'use strict';

const chai = require("chai");
const expect = chai.expect;
const request = require('request');
const userData = require("./../fixtures/user");
const baseUrl = "http://localhost:5001";

describe('Authentication',()=>{

  it('should sign in a user with valid credentials', function(done) {
    request({
      method: 'POST',
      url: baseUrl + '/login',
      form: {
        'email': userData.email,
        'password': 'P@ssw0rd!'
      },
      json:true
    }, function(err, res, body) {
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      console.log(`body--> ${body}`);
      // expect(body)
      // body.email.should.equal(userFixture.email);
      // should.not.exist(body.password);
      // should.not.exist(body.passwordSalt);
      done();
    });
  });
});
