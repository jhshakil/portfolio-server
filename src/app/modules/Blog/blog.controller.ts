import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { BlogServices } from "./blog.service";

const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.getAllBlog();

  sendResponse(res, {
    message: "Blog Get Successfully",
    data: result,
  });
});

const getBlogById = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.getBlogById(req.params.id);

  sendResponse(res, {
    message: "Blog Get Successfully",
    data: result,
  });
});

const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.createBlog(req.body);

  sendResponse(res, {
    message: "Blog Created Successfully",
    data: result,
  });
});

const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.updateBlog(req.params.id, req.body);

  sendResponse(res, {
    message: "Blog Update Successfully",
    data: result,
  });
});
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogServices.deleteBlog(req.params.id);

  sendResponse(res, {
    message: "Blog Delete Successfully",
    data: result,
  });
});

export const BlogControllers = {
  getAllBlog,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
