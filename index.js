const express = require('express')
const app = express()
const port = 3000
//loading middleware into the app
///inbuilt middleware
//app.use(express.json());
//express.json()
//middlewarre logging , authentication, validation
//const loggingMiddleware = function(req,res,next){
  //  console.log('login happening')
    //next();
//}
//app.use(loggingMiddleware);

//const authMiddleware = function (req,res,next){
  //  console.log("authenticating")
    //next();
//}
//app.use(authMiddleware);

//const validateMiddleware = function(req,res,next){
 //   console.log("validating the response ");
   // res.send("chalo seedha ghar");
    //next();
    //we comment out next from here it wont go below
//}
//app.use(validateMiddleware);
//order is important middlewares shud be written before the router



const route=require("./routes/route")
//mounting the routes to the app
app.use('/api',route)





app.get('/', (req, res) => {
    console.log("i am a route handler");
    console.log(req.body);
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
