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
    	var product = new prodAd(req.body);
    	res.send(product);
    	// Save the product and check for errors
    	product.save(function(err){
 			if(err){
 				console.log(err);
 			}
 			console.log("Product added");
 			console.log(product);
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
