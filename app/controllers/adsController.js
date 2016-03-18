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
        Advertisment.find(function(err, adverts) {
        	if (err)
        		res.send(err);

						var discoverAds = adverts.map((advert)=>{
						// 	 Retailer.findOne({_id:advert.retailerId},(err,retailer)=>{
								return {
									adInfo: advert,
									shopInfo:{
										name: "Test",
										coordinates: "32424535354563,14253535453"
									}
								};
							});
							res.json(discoverAds);
						});
        // });
	};
}

module.exports.sendAd = sendAd;
module.exports.saveDiscoverAd = saveDiscoverAd;
module.exports.getDiscoverAds = getDiscoverAds;
