'use strict';

const chai = require("chai");
const chaiHttp = require('chai-http');
const expect = chai.expect;
const testData = require("./../fixtures/routes_test_data");
chai.use(chaiHttp);
//Run an instance of the server
process.env.NODE_ENV = 'test';
const server = require("./../../../server");

describe('API Routes',() =>{

  it('register a new user',(done) =>{
    //The done function allows the test to be run asynchronously
    chai.request(server)
      .post("/api/getInfo")//Set the HTTP method type
      .send(testData.userInfoData)//Send the data to the server
      .end((err,res)=>{//The response from the server
        // console.log(res);
        expect(res).to.have.status(201);
        expect(res).to.be.html;
        expect(res.text).to.be.equal("John has been created and likes Mongolian");
        done();
      });
  });

  it('return Mexican resturants with in the user\'s locality',(done) =>{
    chai.request(server)
      .get("/api/businessSearch")
      .query(testData.searchData)
      .end((err,res)=>{
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body["resturant1"]).to.contain({name:"Boojum"});
        done();
      });
  });

  it('return discover results', function (done) {
    chai.request(server)
      .get("/api/discoverSearch")
      .query(testData.discoverSearch)
      .end((err,res)=>{
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body["resturant1"]).to.contain({name:"Boojum"});
        done();
      });
  });
});
