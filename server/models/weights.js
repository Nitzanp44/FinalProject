const mongoose = require("mongoose");

const weightsSchema = mongoose.Schema({
    ID:{ type: String, required: true, unique: true, index: true },
    macAdress:{ type: String, required: true, index: true },
}); 

module.exports = mongoose.model('weights', weightsSchema);