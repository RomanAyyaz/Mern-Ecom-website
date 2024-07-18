require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.URI).then(()=>{
    console.log('Connected with Database')
}).catch((error)=>{
    console.log(error)
})