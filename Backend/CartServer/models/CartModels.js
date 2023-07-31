import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const CartSchema = new Schema({

    Order_ID: {
        type: String,
        required: true
    },
    Seller_ID: {
        type: String,
        required: true
    },
    Customer_Name: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    Phone_No: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        lowercase: true
    },
    Total_Amount: {
        type: String,
        required: true,
    },

    Delivary: {
        type: String,
        required: true,
    },

},{timestamps:true})

export default mongoose.model("Cart",CartSchema);

