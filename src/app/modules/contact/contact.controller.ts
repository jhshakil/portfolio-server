import { catchAsync } from "../../../shared/catchAsync";
import { sendResponse } from "../../../shared/sendResponse";
import { ContactService } from "./contact.service";

const contactUs = catchAsync(async (req, res) => {
  await ContactService.contactUs(req.body);

  sendResponse(res, {
    message: "Email Send",
    data: "",
  });
});

export const ContactController = {
  contactUs,
};
