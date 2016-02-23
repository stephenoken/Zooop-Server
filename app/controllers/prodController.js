"use strict";
const Product = require("./../models/product");

function storeProduct () {
	return (req, res)=>{

		var category = req.body.category;
		var name = req.body.name;
		var origin = req.body.origin;
		var taste = req.body.taste;
		var tags = req.body.tags;

		var prod = new Product({ 
			category: category,
			name: name,
			properties:[
				origin, 
				taste, 
				[tags]
			]
		});
		res.send(prod);

		prod.save(function(err){
 			if(err){
 				console.log(err);
 			}
 			console.log("Product added");
 		});
	};	
}
module.exports.storeProduct = storeProduct;