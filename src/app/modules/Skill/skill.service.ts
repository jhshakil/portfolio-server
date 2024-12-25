import { Skill } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const getAllSkill = async () => {
  const result = await prisma.skill.findMany();

  return result;
};

const createSkill = async (payload: Skill) => {
  const result = await prisma.skill.create({
    data: payload,
  });

  return result;
};
const updateSkill = async (id: string, payload: Skill) => {
  const result = await prisma.skill.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};
const deleteSkill = async (id: string) => {
  const result = await prisma.skill.delete({
    where: {
      id,
    },
  });

  return result;
};

export const SkillServices = {
  getAllSkill,
  createSkill,
  updateSkill,
  deleteSkill,
};
