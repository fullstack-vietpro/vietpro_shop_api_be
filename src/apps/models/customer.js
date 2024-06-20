const mongoose = require("../../common/database")();
const customerSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        unique: true,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
}, {timestamps: true});
const CustomerModel = mongoose.model("Customers", customerSchema, "customers");
module.exports = CustomerModel;