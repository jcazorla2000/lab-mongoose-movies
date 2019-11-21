const {Schema, model} = require("mongoose")

const celebritySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    occupation: {
        type: String,
        required: true
    },
    catchPhrase: {
        type: String,
        required: true
    }
})

module.exports = model("Celebrity", celebritySchema)