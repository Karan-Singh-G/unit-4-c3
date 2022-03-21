const mongoose =require("mongoose");
const { stringify } = require("querystring");

const userScheme = new mongoose.SchemaType({
    firstName:{type:String,required:true},
    lastName:{ type: String,required:true},
    age:{type:Number,require:true},
    email:{type:String,required:false},

})

const User = mongoose.model("user",userSchema);
module.export =User