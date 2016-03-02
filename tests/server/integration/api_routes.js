'use strict';

const chai = require("chai");
const expect = chai.expect;
const request = require('request');
const testData = require("./../fixtures/routes_test_data");

const baseUrl = "http://localhost:5001/api";

describe('API Routes',() =>{

  it('return Mexican resturants with in the user\'s locality',(done) =>{
    request({
      method: 'GET',
      url: `${baseUrl}/businessSearch`,
      form: testData.searchData
    },(err, res,body)=>{
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(res.headers["content-type"]).to.contain("application/json");
      expect(JSON.parse(body)["resturant1"]).to.contain({name:"Boojum"});
      done();
    });
  });

  it('return discover results', function (done) {
    request({
      method: 'GET',
      url: `${baseUrl}/discoverSearch`,
      form: testData.discoverSearch
    },(err, res,body)=>{
      if (err) throw err;
      expect(res.statusCode).to.equal(200);
      expect(res.headers["content-type"]).to.contain("application/json");
      expect(JSON.parse(body)["resturant1"]).to.contain({name:"Boojum"});
      done();
    });
  });
});
