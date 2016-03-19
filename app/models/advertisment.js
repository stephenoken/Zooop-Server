'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require("./user");
var AdSchema = new Schema({
  type:  {
    type: String,
    required: true
  },
  name:  {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tags:{
    type: []
  },
  imgUrl: {
    name: "imageUrl",
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  retailerId: {
    type: String,
    required: true
  }
});

AdSchema.statics.getRetialerAds = function (id,callback) {
  this.find({'retailerId':id},(err,adverts) => {
    if(err) callback(err,null);
    User.find({_id:id},(userErr,user)=>{
      const advertResults = adverts.map((advert)=>{
        return {
          adInfo: advert,
          shopInfo:{
            name: user.name,
            coordinates: user.location
          }
        };
      });
      callback(err,advertResults);
    });
  });
};

AdSchema.statics.getAndroidAds= function(callback){
  this.find((advertErr,adverts)=>{
    // Getting just the retailer ids in each advert
    const retailerIds = new Set(adverts.map((advert)=>{return advert.retailerId;}));
    //Where _id equals this id or this id.....
    User.find({_id:{$in:Array.from(retailerIds)}},'name location',(userErr,retailers)=>{
      //Some functional wizardry 😇
      const results = adverts.map((advert)=>{
        return {
          adInfo:advert,
          //Filters the array and return the first element
          shopInfo:retailers.filter(
            (retailer)=>{return retailer._id == advert.retailerId;}
          )[0]
        };
      });
      // console.log(results);
      callback(advertErr,results,userErr);
    });
  });
};
// compile User model
module.exports = mongoose.model('Advertisement', AdSchema);
