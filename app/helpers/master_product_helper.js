'use strict';
const Product = require("./../models/master_product");
const retailerProduct = require("./../models/retailer_product");
var mongoose = require('mongoose');
function searchMasterProducts(object){
  Product.findOne({name:object.name},function(err, doc) {
        retailerProduct.findOne({name:object.name}, function(error,documen){
          if(documen != undefined)
          {
              console.log('Document already stored in store');
          }
          else {
               if(doc != undefined)
               {
                  saveDiscoverProduct(doc, object.retailerId)
               }
               else {
                 console.log('Details not found in master product store!!');
               }

          }
        });

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
