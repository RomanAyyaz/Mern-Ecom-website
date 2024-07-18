const User = require('../../Models/UserModel')
const DeleteUser = async(req,res)=>{
    const {id} = req.params
    await User.findByIdAndDelete(id)
    return res.status(200).json({Message:"User Deleted Successfully"})
}

module.exports ={
    DeleteUser
}