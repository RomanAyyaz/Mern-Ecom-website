const User = require('../../Models/UserModel')
const AllCustomers = async(req,res)=>{
    try {
        let Users = await User.find()
        res.status(200).json({Users:Users})
    } catch (error) {
        res.status(500).json({error:error})
    }
}

module.exports = {
    AllCustomers
}