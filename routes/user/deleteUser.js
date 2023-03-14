const User = require("../../models/UserModel")

module.exports = async (req, res) => {
    const {id} = req.params
    const user = await User.findByIdAndDelete(id)
    res.status(204).json(user)
}