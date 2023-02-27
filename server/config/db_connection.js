const mongoose = require('mongoose')

const db_connection = async(URL) => {
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(URL, {
            useNewUrlParser: true, useUnifiedTopology: true
        });
        console.log("Mongodb connected with server : localhost");
    } catch (error) {
        console.log("Error in db connection : " + error.message);
    }

}

module.exports=db_connection;