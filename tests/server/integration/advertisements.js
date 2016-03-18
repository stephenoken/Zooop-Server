'use strict';

const chai = require("chai");
const expect = chai.expect;
const request = require('request');

const baseUrl = "http://localhost:5001/adverts-api";

describe('Advertisements', function () {

  after(function () {

  });

  // it('create ads', function (done) {
  //   request({
  //     method: 'POST',
  //     url: `${baseUrl}/create-discover-ad`,
  //     form: {
  //       name:  "New Mocha",
  //       description: "Made with beas shipped all the way from Arabia",
  //       taste:"Bitter Sweet",
  //       type: 'coffee',
  //       dietaryTags:["Coffee","Mocha"],
  //       retailerId: "112345"
  //     }
  //   },(err, res, body)=>{
  //     expect(res.statusCode).to.equal(200);
  //     done();
  //   });
  // });
});
