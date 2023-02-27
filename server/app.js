const express = require('express');
const app = express();
const cors =require('cors');
const path =require('path')

//setting cors
app.use(cors({
    origin: '*',
    credentials: true,
}));



//middleware parses incoming requests with JSON
app.use(express.json({limit: '50mb'}));

//cookies parser 
const cookieParser = require('cookie-parser')
app.use(cookieParser());

//route setup
const userRoute = require('./Routes/userRoute')
app.use('/api/v1',userRoute);



//initalized frontend
app.use(express.static(path.join(__dirname,'../client/build')));

app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,'../client/build/index.html'))
})



module.exports=app;