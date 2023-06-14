const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    dob:String,
    location:String,
    password:String,
},{
    versionKey:false
})


const UserModel = mongoose.model("user", userSchema)

// const blacklistTokenSchema=new mongoose.Schema({
//     token:String,
// })

// const BlacklistToken=mongoose.model("BlacklistToken",blacklistTokenSchema)

module.exports = {
    UserModel,
    // BlacklistToken
}