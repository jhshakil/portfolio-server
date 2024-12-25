import { Project } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const getAllProject = async () => {
  const result = await prisma.project.findMany();

  return result;
};

const getProjectById = async (id: string) => {
  const result = await prisma.project.findUniqueOrThrow({
    where: {
      id,
    },
  });

  return result;
};

const createProject = async (payload: Project) => {
  const result = await prisma.project.create({
    data: payload,
  });

  return result;
};
const updateProject = async (id: string, payload: Project) => {
  const result = await prisma.project.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deleteProject = async (id: string) => {
  const result = await prisma.project.delete({
    where: {
      id,
    },
  });

  return result;
};

export const ProjectServices = {
  getAllProject,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
