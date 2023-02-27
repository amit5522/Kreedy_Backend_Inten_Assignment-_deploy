const express = require('express');
const app = express();
const cors =require('cors');


//setting cors
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

//configure dot env
const dotenv = require("dotenv");
dotenv.config({ path: "server/config/.env" });

//middleware parses incoming requests with JSON
app.use(express.json({limit: '50mb'}));

//cookies parser 
const cookieParser = require('cookie-parser')
app.use(cookieParser());

//route setup
const userRoute = require('./Routes/userRoute')
app.use('/api/v1',userRoute);



//handeling req and res
app.get('/',(req,res)=>{
    res.status(200).json({
     success:true,
     msg:"Server is Working fine"
    });
})



module.exports=app;