const mongoose = require("mongoose")
const landRoverSchema = mongoose.Schema({
    model: { type: String, minLength: 5 },
    price:  { type: Number, min: 100, max: 500000000 },
    color: String,
})
module.exports = mongoose.model("landRover",
    landRoverSchema)