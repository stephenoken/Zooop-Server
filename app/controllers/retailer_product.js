'use strict';
const MasterProductHelper = require("./../helpers/master_product_helper");

function newRetailerProduct(){
    return (req,res)=>{
      var data = {
        name: req.body.name,
        retailerId: req.user._id
      }
      MasterProductHelper.searchMasterProducts(data);
      res.send('success')
    };
}

module.exports.newRetailerProduct = newRetailerProduct;
