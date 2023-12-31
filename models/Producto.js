import mongoose, {model, Schema, models} from "mongoose";

const ProductoSchema = new Schema({
  title: {type:String, required:true},
  description: {type:String, required:true},
  price: {type: Number, required: true},  
  images: [{type: String}]   
});

export const Producto = models.Producto || model('Producto', ProductoSchema);