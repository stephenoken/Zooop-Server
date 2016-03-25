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
