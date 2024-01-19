import mongoose from 'mongoose'

const oredrItemSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },
    quantity: {
        type:Number,
        required: true
    }
})

const orderSchema = new  mongoose.Schema({
    orderprice:{
        type:Number,
        required:true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    orderitem: {
        type:[oredrItemSchema]
    },
    address: {
        type: String,
        required:true,

    },

    status: {
        type: String,
        enum: ["PENDING","CANCELLED","DELIVERED"],
        default: "PENDING"

    }
},{timestamps:true})


export const Order = mongoose.model("Order",orderSchema)