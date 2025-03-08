import { sendEmail } from "../../../utils/emailSender";
import { TContact } from "./contact.interface";

const contactUs = async (payload: TContact) => {
  await sendEmail(
    "info.jhshakil@gmail.com",
    `<div>
    <h2>name: ${payload?.name}</h2>
    <p>comment: ${payload?.message}</p>
    </div>
    `,
    payload.subject,
    payload.email
  );

  return "";
};

export const ContactService = {
  contactUs,
};
