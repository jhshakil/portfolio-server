import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { ProjectServices } from "./project.service";

const getAllProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.getAllProject();

  sendResponse(res, {
    message: "Project Get Successfully",
    data: result,
  });
});

const getProjectById = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.getProjectById(req.params.id);

  sendResponse(res, {
    message: "Project Get Successfully",
    data: result,
  });
});

const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.createProject(req.body);

  sendResponse(res, {
    message: "Project Created Successfully",
    data: result,
  });
});

const updateProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.updateProject(req.params.id, req.body);

  sendResponse(res, {
    message: "Project Update Successfully",
    data: result,
  });
});
const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.deleteProject(req.params.id);

  sendResponse(res, {
    message: "Project Delete Successfully",
    data: result,
  });
});

export const ProjectControllers = {
  getAllProject,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
};
