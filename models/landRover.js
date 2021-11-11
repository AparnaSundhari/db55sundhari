const mongoose = require("mongoose")
const landRoverSchema = mongoose.Schema({
    model: String,
    price: Number,
    color: String,
})
module.exports = mongoose.model("landRover",
    landRoverSchema)