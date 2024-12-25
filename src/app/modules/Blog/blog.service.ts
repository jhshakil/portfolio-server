import { Blog } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const getAllBlog = async () => {
  const result = await prisma.blog.findMany();

  return result;
};

const getBlogById = async (id: string) => {
  const result = await prisma.blog.findUniqueOrThrow({
    where: {
      id,
    },
  });

  return result;
};

const createBlog = async (payload: Blog) => {
  const result = await prisma.blog.create({
    data: payload,
  });

  return result;
};

const updateBlog = async (id: string, payload: Blog) => {
  const result = await prisma.blog.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteBlog = async (id: string) => {
  const result = await prisma.blog.delete({
    where: {
      id,
    },
  });

  return result;
};

export const BlogServices = {
  getAllBlog,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
