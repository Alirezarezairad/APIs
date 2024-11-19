import { Router } from "express";

import {
  getSingleBlog,
  getAllBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogControllers.js";

export const blogRouter = Router();

blogRouter.route("/").get(getAllBlogs).post(createBlog);
blogRouter
  .route("/:id")
  .get(getSingleBlog)
  .patch(updateBlog)
  .delete(deleteBlog);
