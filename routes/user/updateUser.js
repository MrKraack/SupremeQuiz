const User = require("../../models/UserModel")

module.exports = async (req, res) => {
    const {id} = req.params
    const user = await User.findOneAndUpdate({_id:id}, {
        ...req.body
    })
    const updatedUser = await User.findById({_id:id})
    res.status(200).json(updatedUser)
}