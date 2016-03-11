'use strict';

const chai = require("chai");
const expect = chai.expect;
const diggyBot = require("./../../../app/helpers/diggyBot");

describe('DiggyBotTest', function () {
  it('correctResponse', function () {
  		var result = diggyBot.react("Hey, what is up??");
  		console.log(result);
  });
});
