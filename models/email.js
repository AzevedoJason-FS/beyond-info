const mongoose = require("mongoose");

const emailSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Email", emailSchema);