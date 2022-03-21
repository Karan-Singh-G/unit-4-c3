const mongoose = require("mongoose")

const connect=()=>{
    return mongoose.connect('mongodb+srv://karan:karansingh@cluster0.mcnbz.mongodb.net/Database?retryWrites=true&w=majority')
}
module.exports = connect