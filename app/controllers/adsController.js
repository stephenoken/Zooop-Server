"use strict";
const Advertisment = require("./../models/advertisment");
const mongoose = require('mongoose');


function sendAd () {
	return (req,res)=>{
     res.send(Advertisment.example);
	};
}

function saveDiscoverAd () {
    return (req, res)=>{ 
        console.log(req.body);
        var data = req.body;
    	//var product = new Advertisment(req.body);
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
        Advertisment.find(function(err, products) {
        	if (err)
        		res.send(err);

        	
            res.json(products);
        });
	};
}

module.exports.sendAd = sendAd;
module.exports.saveDiscoverAd = saveDiscoverAd;
module.exports.getDiscoverAds = getDiscoverAds;
