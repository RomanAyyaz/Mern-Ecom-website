const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true,
        trim:true
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    otp:{
        type:String,
    },
    role:{
        type:String,
        default:'user'
    }
},{timestamps:true})
UserSchema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password = await bcryptjs.hash(this.password,10)
    }
    next()
})
const User = mongoose.model("User",UserSchema)
module.exports = User