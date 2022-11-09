const Tugas = require("../models/Tugas")

module.exports = {
  getAllTugas: async (req, res) => {
    const tugas = await Tugas.find().populate("user", "name")

    res.json({
      message: "success get data",
      data: tugas
    })
  },

  getTugasByID: (req, res) => {

  },

  addTugas: (req, res) => {
    const data = req.body
    const tugas = new Tugas(data)
    tugas.save()

    res.json({
      message: "tugas has been created"
    })
  },

  deleteTugasByID: (req, res) => {
 
  },

  updateTugasByID: (req, res) => {

  },
}