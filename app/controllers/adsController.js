"use strict";
const Advertisment = require("./../models/advertisment");
const Retailer = require("./../models/user");
const GCM = require('./../helpers/cloud_messaging');

function sendAd () {
	return (req,res)=>{
     res.send(Advertisment.example);
	};
}

function saveDiscoverAd () {

    return (req, res)=>{
        // var data = req.body;
        var data = Object.assign(req.body,{retailerId:req.user._id});
    	Advertisment.create(data,function(err, advertisment){
 			if(err){
 				console.log(err);
 			}
			if (advertisment.type == "Diggy") {
				console.log("Sending Notification");
				GCM.generateDiggy({message:advertisment.description},["dENd5zZ-Ki0:APA91bHp1JUd2xhzMtR1JJDWA0Gk2OyJuM755iQRQkx37HZ95Y2_Uc14AgOAj68uHSffQ4C7liPck8Jwkb2ALe_noj8MJx94I8TftLRTTcTh_ryEV0LichvqEv7br9KLIasFrlS4Kaxf"],(err,response)=>{
					res.send(response);
				});
			}else{
				res.send(advertisment);

			}
 		});
	};
}

function getDiscoverAds () {
	return (req, res)=> {
		Advertisment.getRetialerAds(req.user._id,(err,adverts)=>{
			if(err)res.send(err);
			res.json(adverts);
		});
	};
}

function getAndroidAds() {
	return(req,res)=>{
		Advertisment.getAndroidAds((err,adverts)=>{
			res.json(adverts);
		});
	};
}
module.exports.sendAd = sendAd;
module.exports.saveDiscoverAd = saveDiscoverAd;
module.exports.getDiscoverAds = getDiscoverAds;
module.exports.getAndroidAds = getAndroidAds;
