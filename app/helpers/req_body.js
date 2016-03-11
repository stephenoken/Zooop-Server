'use strict';
const _ = require('lodash');

function parse(request) {
  Object.assign(request,{
    name:`${request.first_name} ${request.last_name}`,
    businessName: request.business_name,
    businessType: request.business_type.toLowerCase()
  });
  return _.pick(request,"name","email","password","businessName","businessType","location");
}

module.exports.parseBody = parse;
