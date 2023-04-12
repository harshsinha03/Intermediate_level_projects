const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/notebook?directConnection=true&tls=false&readPreference=primary"

const connectToMongo = async ()=>{
    try {
        await mongoose.connect(mongoURI)
        console.log("Connected to database successfully")
    } catch(error){
        console.log(error);
    }

}

module.exports = connectToMongo;