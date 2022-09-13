import mongoose from 'mongoose';
const { Schema } = mongoose;

export const Category = new Schema({
  name:String,
  parent:String
  
});

export const CategoryModel = mongoose.model('Category', Category);
