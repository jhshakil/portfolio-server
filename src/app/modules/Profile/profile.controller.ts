import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { ProfileServices } from "./profile.service";
import { sendResponse } from "../../../shared/sendResponse";

const getProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await ProfileServices.getProfile();

  sendResponse(res, {
    message: "Profile Get Successfully",
    data: result,
  });
});

const createProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await ProfileServices.createProfile(req.body);

  sendResponse(res, {
    message: "Profile Created Successfully",
    data: result,
  });
});

const updateProfile = catchAsync(async (req: Request, res: Response) => {
  const result = await ProfileServices.updateProfile(req.params.id, req.body);

  sendResponse(res, {
    message: "Profile Update Successfully",
    data: result,
  });
});

export const ProfileControllers = {
  getProfile,
  createProfile,
  updateProfile,
};
