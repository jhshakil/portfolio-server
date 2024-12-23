import * as bcrypt from "bcrypt";
import { prisma } from "../../../shared/prisma";
import { generateToken } from "../../../helpers/jwtHelper";
import config from "../../../config";
import { Secret } from "jsonwebtoken";

const createUser = async (payload: any) => {
  const hashedPassword: string = await bcrypt.hash(payload.password, 12);

  const userData = {
    email: payload.email,
    password: hashedPassword,
  };

  const createUserData = await prisma.user.create({
    data: userData,
  });

  const accessToken = generateToken(
    {
      email: createUserData.email,
      role: createUserData.role,
    },
    config.jwt.jwt_secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = generateToken(
    {
      email: createUserData.email,
      role: createUserData.role,
    },
    config.jwt.refresh_token_secret as Secret,
    config.jwt.refresh_token_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const UserServices = {
  createUser,
};
