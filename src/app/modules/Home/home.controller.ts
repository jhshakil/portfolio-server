import { Request, Response } from "express";
import { catchAsync } from "../../../shared/catchAsync";
import { HomeServices } from "./home.service";
import { sendResponse } from "../../../shared/sendResponse";

const getAllHomeData = catchAsync(async (req: Request, res: Response) => {
  const result = await HomeServices.getAllHomeData();

  sendResponse(res, {
    message: "Home Data Get Successfully",
    data: result,
  });
});

export const HomeControllers = {
  getAllHomeData,
};
