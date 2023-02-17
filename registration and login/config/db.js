const mongoose = require('mongoose');
 
exports.dbConn = async ()=>{
    try{
        const dbURL = "mongodb+srv://Ganesh:ganesh_123@cluster0.pjt5yrm.mongodb.net/testdb?retryWrites=true&w=majority"; 
        await mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
        console.log('Database Connected');
    }
    catch(err){
        console.log(`Database connection error ${err.message}`);
    } 
}