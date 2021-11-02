import mongoose from "mongoose";

const productoSchema = new mongoose.Schema({
    name: String,
    precio: Number,
    stock: Number,
    registerDate: { type: Date, default:Date.now}
});

const producto = mongoose.model("productos", productoSchema);

export default producto