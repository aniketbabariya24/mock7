const express = require("express");
const app = express();
require("dotenv").config();



app.use(express.json());


app.get("/", (req, res) =>
  res.send(
    `<h1 style="text-align:Center;color:blue">Welcome in Mock 7</h1>`
  )
);


const orderRouter=require('./routes/route.order')
const userRouter=require('./routes/route.user')
const restaurantRouter=require('./routes/route.restaurant')


app.use('/api',userRouter) 
app.use('/api',orderRouter)
app.use('/api',restaurantRouter)


const {dbconnetion}= require('./configs/db')
app.listen(8080, async () => {
  try {
    await dbconnetion;
    console.log(`Connected to Database`);
    console.log(`Server listening on 8080`);
  } catch (error) {
    console.log(`Error while connecting to ${error.message}`);
  }
});
