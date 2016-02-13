"use strict";

const chai = require("chai");
const chaiHttp = require('chai-http');
const expect = chai.expect;
/*eslint-disable */
const should = chai.should();
/*eslint-enable */
const testData = require("./routes_test_data");
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
  it('servers login.html',(done) =>{
    chai.request(server)
      .get('/login')
      .end((err,res)=>{
        expect(res).to.have.status(200);
        res.should.be.html;
        done();
      });
  });
});

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
