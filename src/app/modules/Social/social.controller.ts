import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { SocialServices } from "./social.service";

const getAllSocial = catchAsync(async (req: Request, res: Response) => {
  const result = await SocialServices.getAllSocial();

  sendResponse(res, {
    message: "Social Get Successfully",
    data: result,
  });
});

const createSocial = catchAsync(async (req: Request, res: Response) => {
  const result = await SocialServices.createSocial(req.body);

  sendResponse(res, {
    message: "Social Created Successfully",
    data: result,
  });
});

const updateSocial = catchAsync(async (req: Request, res: Response) => {
  const result = await SocialServices.updateSocial(req.params.id, req.body);

  sendResponse(res, {
    message: "Social Update Successfully",
    data: result,
  });
});
const deleteSocial = catchAsync(async (req: Request, res: Response) => {
  const result = await SocialServices.deleteSocial(req.params.id);

  sendResponse(res, {
    message: "Social Delete Successfully",
    data: result,
  });
});

export const SocialControllers = {
  getAllSocial,
  createSocial,
  updateSocial,
  deleteSocial,
};
