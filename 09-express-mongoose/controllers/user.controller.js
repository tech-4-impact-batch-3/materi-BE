const bcrypt = require('bcrypt');
const User = require("../models/user")

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const users = await User.find({}, "-__v -password")

      res.json({
        message: "success get data user",
        data: users
      })
    } catch (error) {
      console.log(error);
    }
  },

  getUserByID: (req, res) => {

  },

  addUser: (req, res) => {
    const data = req.body

    const saltRounds = 10
    const hash = bcrypt.hashSync(data.password, saltRounds);
    data.password = hash

    const user = new User(data)

    // console.log(user)
    user.save()

    res.json({
      message: "data has been created!!",
    })
  },

  deleteUserByID: (req, res) => {
 
  },

  updateUserByID: (req, res) => {

  },

  login: async (req, res) => {
    const data = req.body

    const user = await User.findOne({email: data.email})


    const checkPwd = bcrypt.compareSync(data.password, user.password)

    if (checkPwd) {
      res.json({
        message: "anda berhasil login",
        token: "kasih token di sini"
      })
    } else {
      res.json({
        message: "lu siapa???",
      })
    }
  },
}