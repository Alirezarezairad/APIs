import mongoose from "mongoose";
const blogSchema = new mongoose.Schema({
  title: String,
  author: [String],
  price: Number,
  message: String,
  date: Date,
  content: {
    headline: String,
    text: String,
    thema: String,
  },
});

export const Blog = mongoose.model("Blog", blogSchema);
