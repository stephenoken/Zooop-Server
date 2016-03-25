"use strict";
const Advertisment = require("./../models/advertisment");
const Retailer = require("./../models/user");


function sendAd () {
	return (req,res)=>{
     res.send(Advertisment.example);
	};
}

function saveDiscoverAd () {

    return (req, res)=>{
        console.log(req.body);
        // var data = req.body;
        var data = Object.assign(req.body,{retailerId:req.user._id});
    	Advertisment.create(data,function(err, advertisment){
 			if(err){
 				console.log(err);
 			}
			res.send(advertisment);
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
