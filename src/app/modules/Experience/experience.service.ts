import { Experience } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const getAllExperience = async () => {
  const result = await prisma.experience.findMany({
    orderBy: {
      priority: "asc",
    },
  });

  return result;
};

const createExperience = async (payload: Experience) => {
  const result = await prisma.experience.create({
    data: payload,
  });

  return result;
};
const updateExperience = async (id: string, payload: Experience) => {
  const result = await prisma.experience.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deleteExperience = async (id: string) => {
  const result = await prisma.experience.delete({
    where: {
      id,
    },
  });

  return result;
};

export const ExperienceServices = {
  getAllExperience,
  createExperience,
  updateExperience,
  deleteExperience,
};
