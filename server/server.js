const app = require('./app');
const db_connection = require('./config/db_connection');




//databse connection
const URL=`mongodb+srv://${process.env.db_username}:${process.env.db_password}@cluster0.r6tgwgw.mongodb.net/?retryWrites=true&w=majority`
db_connection(URL);



const PORT=process.env.PORT||8000;
//creating server
app.listen(PORT,()=>{
    console.log(`Server is runing on PORT : ${PORT}`);
})