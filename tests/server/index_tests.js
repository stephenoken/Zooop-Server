"use strict";

const chai = require("chai");
const chaiHttp = require('chai-http');
const expect = chai.expect;
/*eslint-disable */
const should = chai.should();
/*eslint-enable */

chai.use(chaiHttp);
//Run an instance of the server
const server = require("./../../backend_src/server");

describe('Sample Tests',()=> {
  it('perform basic maths',()=>{
    expect(2 + 2).to.be.equal(4);
  });
});

describe('Index Routes',() => {
  it('serve index.html', (done) =>{
    chai.request(server)
      .get('/')
      .end((err,res)=>{
        res.should.have.status(200);
        res.should.be.html;
        done();
      });
  });
});

var postData = {
  "firstName":"John",
  "lastName":"Appleseed",
  "facebookTokenAuth":"1235644bfgfgsgfbsfs433253h",
  "country":"Sweden",
  "favDish":"Mongolian"
};

describe('API Routes',() =>{
  it('it should respond with ACK to User login',(done) =>{
    //The done function allows the test to be run asynchronously
    chai.request(server)
      .post("/api/getInfo")//Set the HTTP method type
      .send(postData)//Send the data to the server
      .end((err,res)=>{//The response from the server
        // console.log(res);
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        expect(res.text).to.be.equal("John has been created and likes Mongolian");
        done();
      });
  });
});
