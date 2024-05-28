import orderModel from "../models/ordermodel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

// Placing user order from frontend
const placeOrder = async(req,res) => {
    try {
        const newOrder = new orderModel({
            userId:req.body.userId,
            items:req.body.items,
            amoutnt:req.body.amoutnt,
            address:req.body.address
        })
        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});

        
    } catch (error) {
        
    }
}

export {placeOrder}