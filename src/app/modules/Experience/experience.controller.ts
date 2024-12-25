import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { ExperienceServices } from "./experience.service";

const getAllExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceServices.getAllExperience();

  sendResponse(res, {
    message: "Experience Get Successfully",
    data: result,
  });
});

const createExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceServices.createExperience(req.body);

  sendResponse(res, {
    message: "Experience Created Successfully",
    data: result,
  });
});

const updateExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceServices.updateExperience(
    req.params.id,
    req.body
  );

  sendResponse(res, {
    message: "Experience Update Successfully",
    data: result,
  });
});
const deleteExperience = catchAsync(async (req: Request, res: Response) => {
  const result = await ExperienceServices.deleteExperience(req.params.id);

  sendResponse(res, {
    message: "Experience Delete Successfully",
    data: result,
  });
});

export const ExperienceControllers = {
  getAllExperience,
  createExperience,
  updateExperience,
  deleteExperience,
};
