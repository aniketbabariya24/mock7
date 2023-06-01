const mongoose = require('mongoose');

const addressSchema=new mongoose.Schema({
  street: String,
  city: String,
  state: String,
  country: String,
  zip: String
})


const restaurantSchema=new mongoose.Schema({
 name:{
  type:String,
  required:true
 },
 address:addressSchema,
 menu:[
  {
      name:{
          type:String,
          required:true
      },
      description:{
          type:String,
          required:true
      },
      price:{
          type:Number,
          required:true,
      },
      image:String
  }
 ]
})


const RestaurantModel=mongoose.model("restaurant",restaurantSchema);


module.exports = { RestaurantModel };