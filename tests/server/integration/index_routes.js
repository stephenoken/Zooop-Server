'use strict';

const chai = require("chai");
const expect = chai.expect;
const request = require('request');

const baseUrl = "http://localhost:5001";

describe('Index Routes',() => {
  it('serve index.html', (done) =>{
    request({
      method: 'get',
      url: `${baseUrl}/`
    },(err, res)=>{
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(res.headers["content-type"]).to.contain("text/html");
      done();
    });
  });
});
