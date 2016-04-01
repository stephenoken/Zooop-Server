'use strict';
const gcm = require('node-gcm');
const config = require('./../../config/index');

function generateDiggy(data,regTokens,cb) {
  var message = new gcm.Message();
  message.addNotification('title', 'Hello');
  message.addNotification('icon', 'ic_launcher');
  message.addNotification('body', 'World');
  message.addData(data);

  var sender = new gcm.Sender(config.googleAPIKey);

  sender.send(message, regTokens, function (err, response) {
    if(err) {
      cb(err,null);
    } else {
      cb(err,response);
    }
  });
}
// generateDiggy({"message": "This is your server"},["dENd5zZ-Ki0:APA91bHp1JUd2xhzMtR1JJDWA0Gk2OyJuM755iQRQkx37HZ95Y2_Uc14AgOAj68uHSffQ4C7liPck8Jwkb2ALe_noj8MJx94I8TftLRTTcTh_ryEV0LichvqEv7br9KLIasFrlS4Kaxf"]);
module.exports.generateDiggy = generateDiggy;
