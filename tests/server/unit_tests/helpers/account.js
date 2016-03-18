'use strict';

const chai = require("chai");
const expect = chai.expect;
const bodyHelper = require("./../../../../app/helpers/req_body");

describe('New User', function () {
  it('parse form body request', function () {
    var req = {
      "email" : "test@test.com",
      "password" : "test",
      "password_confirm" : "test",
      "first_name" : "Joe",
      "last_name" : "Blogs",
      "business_name" : "Coffee Haus",
      "business_type" : "Cafe",
      "location" : "53.3437651,-6.2505505999999995"
    };
    var result = bodyHelper.parseBody(req);
    expect(result.name).to.equal("Joe Blogs");
    expect(result.businessName).to.equal("Coffee Haus");
    expect(result.businessType).to.equal("cafe");
    expect(result.first_name).to.not.equal("Joe");
    expect(result.last_name).to.not.equal("Blogs");
  });
});
