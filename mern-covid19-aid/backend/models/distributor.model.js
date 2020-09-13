/*
*
*   distributor.model.js
*   mern-covid19-aid project
*   Zvei Eliezer Nir & Refael Knoll
*
*   Using mongoose to create scheme for "distributor" records in the MongoDB database
*
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const distributorSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    city: { type: String, required: true }
},{
    id: true
});

const Distributor = mongoose.model('Distributor', distributorSchema);
module.exports = Distributor;