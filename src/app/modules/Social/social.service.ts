import { Social } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const getAllSocial = async () => {
  const result = await prisma.social.findMany();

  return result;
};

const createSocial = async (payload: Social) => {
  const result = await prisma.social.create({
    data: payload,
  });

  return result;
};

const updateSocial = async (id: string, payload: Social) => {
  const result = await prisma.social.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

const deleteSocial = async (id: string) => {
  const result = await prisma.social.delete({
    where: {
      id,
    },
  });

  return result;
};

export const SocialServices = {
  getAllSocial,
  createSocial,
  updateSocial,
  deleteSocial,
};
