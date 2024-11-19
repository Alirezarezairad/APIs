import { Blog } from "../models/blogModel.js";

export const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    blog ? res.status(200).json(blog) : res.sendStatus(404);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

export const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);
    res.status(201).json(blog);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

export const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    blog ? res.status(200).json(blog) : res.sendStatus(404);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    blog ? res.status(200).json(blog) : res.sendStatus(404);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
};
