"use strict";
const Advertisment = require("./../models/advertisment");
function sendAd () {
	return (req,res)=>{
     res.send(Advertisment.example);
	};
}

module.exports.sendAd = sendAd;