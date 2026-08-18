const mongoose = require("mongoose");

const postDBconnection = async () => {
    try{
        await mongoose.connect(process.env.mongoose);
        console.log("Database Connected Successfully");
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
};


module.exports = postDBconnection;