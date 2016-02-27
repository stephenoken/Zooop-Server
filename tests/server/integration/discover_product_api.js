'use strict';

const chai = require("chai");
const expect = chai.expect;
const request = require('request');

const baseUrl = "http://localhost:5001/product";

describe('Product API', function () {
  it('post product to server', function (done) {
    request({
      method: 'POST',
      url: `${baseUrl}/new`,
      form: {name:"Black Tea"}
    },(err, res)=>{
      if (err) throw err;
      done();
    });
  });
});
