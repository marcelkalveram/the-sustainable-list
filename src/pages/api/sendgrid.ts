const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

interface SendMailRequestProps {
  name: string;
  email: string;
  message: string;
}

interface SendMailResponseProps {
  status: string;
  type: string;
}

export const sendMail = async (
  { name, email, message }: SendMailRequestProps,
  response: SendMailResponseProps,
): Promise<SendMailResponseProps> => {
  if (!process.env.SENDGRID_API_KEY) {
    response.status = "error";
    response.type = "invalid sendgrid API key";
  }
  if (!email || !message) {
    response.status = "error";
    response.type = "insufficient form data";
  }

  if (response.status === "error") {
    return response;
  }

  if (!name) {
    name = "unknown";
  }
  const msg = {
    to: "marcel.kalveram@googlemail.com",
    from: "mail@thesustainablelist.com",
    subject: "New message by " + name + "(" + email + ")",
    text: message,
  };
  try {
    await sgMail.send(msg);
    response.status = "success";
    response.type = "mail sent";
  } catch (error) {
    response.status = "error";
    response.type = "sendgrid error:, " + error;
  }
  return response;
};
