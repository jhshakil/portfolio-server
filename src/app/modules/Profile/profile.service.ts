import { Profile } from "@prisma/client";
import { prisma } from "../../../shared/prisma";

const getProfile = async () => {
  const result = await prisma.profile.findMany();

  return result;
};

const createProfile = async (payload: Profile) => {
  const result = await prisma.profile.create({
    data: payload,
  });

  return result;
};
const updateProfile = async (id: string, payload: Profile) => {
  const result = await prisma.profile.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

export const ProfileServices = {
  getProfile,
  createProfile,
  updateProfile,
};
