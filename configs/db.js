const mongoose = require("mongoose");
require("dotenv").config();
console.log(process.env.dbURL)
const connection = mongoose.connect('mongodb+srv://pralhadbhandari:pralhadsai14@cluster0.nvw9tal.mongodb.net/?retryWrites=true&w=majority');

module.exports = { connection };
