import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { SkillServices } from "./skill.service";

const getAllSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillServices.getAllSkill();

  sendResponse(res, {
    message: "Skill Get Successfully",
    data: result,
  });
});

const createSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillServices.createSkill(req.body);

  sendResponse(res, {
    message: "Skill Created Successfully",
    data: result,
  });
});

const updateSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillServices.updateSkill(req.params.id, req.body);

  sendResponse(res, {
    message: "Skill Update Successfully",
    data: result,
  });
});
const deleteSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillServices.deleteSkill(req.params.id);

  sendResponse(res, {
    message: "Skill Deleted Successfully",
    data: result,
  });
});

export const SkillControllers = {
  getAllSkill,
  createSkill,
  updateSkill,
  deleteSkill,
};
