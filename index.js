const express = require('express');
//used to add express or any other module to file 
const app = express()
//including express module and initiaising an app
//variable that stores oport number
const port=3000;

app.get('/',(req,res)=>{
    res.send('hello world!')
})
//start your app
app.listen(port,() => {
    console.log("application start ho chuki hai");
});
