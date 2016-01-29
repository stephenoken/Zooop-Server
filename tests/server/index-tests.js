"use strict";

const chai = require("chai");
const chaiHttp = require('chai-http');
const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);
//Run an instance of the server
var server = require("./../../server");

describe('Sample Tests', function () {
  it('perform basic maths',()=>{
    expect(2 + 2).to.be.equal(4);
  });
});

describe('Index Routes', function () {
  it('serve index.html', function (done) {
    chai.request(server)
      .get('/')
      .end((err,res)=>{
        res.should.have.status(200);
        res.should.be.html;
        done();
      });
  });
});
