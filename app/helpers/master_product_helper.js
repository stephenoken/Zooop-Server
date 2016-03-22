'use strict';
const Product = require("./../models/master_product");
const retailerProduct = require("./../models/retailer_product");
var mongoose = require('mongoose');
function searchMasterProducts(object){
  Product.findOne({name:object.name},function(err, doc) {
        saveDiscoverProduct(doc, object.retailerId)
  });
}

function saveDiscoverProduct(object, retailerId) {
    var name = object.name;
    var category = object.category;
    var taste = object.properties.taste;
    var origin = object.properties.origin;
    var dietaryTags = object.properties.dietaryTags;
    var newProd = mongoose.model('DiscoverProduct', retailerProduct);
    var product = new newProd({
                                retailerId: retailerId,
                                name: name,
                                properties: {
                                  taste:taste,
                                  dietaryTags:dietaryTags,
                                  category: category
                                }
                          });

    product.save(function(err){
              		if(err){
              			console.log(err);
              		}
              		console.log("Product added");
              	});
}

module.exports.searchMasterProducts = searchMasterProducts;
