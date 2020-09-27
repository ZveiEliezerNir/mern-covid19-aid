/*
*
*   target.model.js
*   mern-covid19-aid project
*   Zvei Eliezer Nir & Refael Knoll
*
*   Using mongoose to create scheme for "target" records in the MongoDB database
*
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const targetSchema = new Schema({
    address: { type: String, required: true },
    city: { type: String, required: true },
    date: { type: Date, required: true },
    longitude: { type: Number, required: true },
    latitude: { type: Number, required: true }
}, {
    id: true,
    timestamps: true
});

const Target = mongoose.model('Target', targetSchema);
module.exports = Target;