import mongoose from "mongoose";
import toJSON from "./plugins/toJSON";

// ORDER SCHEMA
const orderSchema = new mongoose.Schema(
    {
        productId: {
            type: String,
            required: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        size: {
            type: String,
            required: true,
            enum: ["XS", "S", "M", "L", "XL"],
        },
        phoneNumber: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },
        city: {
            type: String,
            required: true,
            trim: true,
        },
        governorate: {
            type: String,
            required: true,
            trim: true,
        },
        address: {
            type: String,
            required: true,
            trim: true,
        },
        postalCode: {
            type: String,
            required: true,
            trim: true,
        },
        payOnDelivery: {
            type: Boolean,
            default: false,
        },
        total: {
            type: Number,
            required: true,
            min: 0,
        },
        status: {
            type: String,
            enum: ["pending", "confirmed", "shipped", "delivered", "cancelled"],
            default: "pending",
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
    }
);

orderSchema.plugin(toJSON);

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
