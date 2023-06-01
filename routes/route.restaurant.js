const express=require("express");
const { allrestaurants, allrestaurantsID, addrestaurants, addMenu, restaurantmenu, deletemenu } = require("../controller/restaurant.controller");
const restaurantRouter=express.Router();

restaurantRouter.post('/restaurants/add',addrestaurants)
restaurantRouter.get('/restaurants',allrestaurants)
restaurantRouter.get('/restaurants/:id',allrestaurantsID)
restaurantRouter.get('/restaurants/:id/menu',restaurantmenu)
restaurantRouter.post('/restaurants/:id/menu',addMenu)
restaurantRouter.delete('/restaurants/:id/menu/:menuid',deletemenu)

module.exports=restaurantRouter