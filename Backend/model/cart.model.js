const mongoose=require("mongoose")

const CartSchema=mongoose.Schema({
    img:String,
    title:String,
    desc:String,
    price:String,
    category:String,
    strikedOffPrice:String,
    userid:String,
    quantity:Number,
},{
    versionKey:false
})

const CartModel=mongoose.model("Cart",CartSchema)

module.exports={CartModel}