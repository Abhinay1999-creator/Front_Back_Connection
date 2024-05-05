const User = require("../models/userModel")

const home = async (req, res) => {
    try {
        res.json({ message: "Welcome to home page" })
    } catch (error) {
        res.json(error)
    }
}

const register = async (req, res) => {
    try {
        console.log(req.body)
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: "Email already exists" })
        }

        const userCreated = await User.create({ username, email, phone, password })

        res.status(200).json({userCreated})
    } catch (error) {
        res.status(500).json("server Error")
    }
}


module.exports = { home, register }