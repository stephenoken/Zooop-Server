"use strict";
const Advertisment = require("./../models/advertisment");
const mongoose = require('mongoose');
const prodAd = mongoose.model('Advertisment');

function sendAd () {
	return (req,res)=>{
     res.send(Advertisment.example);
	};
}

function saveDiscoverAd () {
    return (req, res)=>{
        var data = Object.assign(req.body,{"retailer_id":req.currentUser._id});
    	//var product = new prodAd(req.body);
    	// Save the product and check for errors
    	Advertisment.create(data,function(err, advertisment){
 			if(err){
 				console.log(err);
 			}
 			console.log("Advertisment added");
			console.log(advertisment);
			res.send(advertisment);
 		});
	};
}

function getDiscoverAds () {
	return (req, res)=> {
        prodAd.find(function(err, products) {
        	if (err)
        		res.send(err);

        	res.json(products);
        });
	};
}

module.exports.sendAd = sendAd;
module.exports.saveDiscoverAd = saveDiscoverAd;
module.exports.getDiscoverAds = getDiscoverAds;
