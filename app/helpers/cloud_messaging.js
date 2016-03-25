// 'use strict';
//
// var request = require('request');
// const config = require('./../../config/index');
// const options = {
//   url: 'https://gcm-http.googleapis.com/gcm/send',
//   method:"POST",
//   headers:[
//     {
//       name: 'Authorization',
//       value: `key=${config.googleAPIKey}`
//     },
//     {
//       name: 'Content-Type',
//       value: 'application/json'
//     }
//   ]
// };
// console.log(config.googleAPIKey);
// function execute(body,cb) {
//   request.post(options,{form:body},cb);
// }
//
// execute({Hello:"World"},(error, response, body)=>{
//   console.log(error);
//   // console.log(response);
//   console.log(body);
// });

'use strict';
const gcm = require('node-gcm');
const config = require('./../../config/index');

function generateDiggy(data,regTokens) {
  var message = new gcm.Message();
  message.addNotification('title', 'Hello');
  message.addNotification('icon', 'ic_launcher');
  message.addNotification('body', 'World');
  message.addData(data);

  var sender = new gcm.Sender(config.googleAPIKey);

  sender.send(message, regTokens, function (err, response) {
    if(err) {
      console.error(err);
    } else {
      console.log(response);
    }
  });
}
generateDiggy({"Data1":"Info1"},["bk3RNwTe3H0:CI2k_HHwgIpoDKCIZvvDMExUdFQ3P1"]);
module.exports = generateDiggy;
