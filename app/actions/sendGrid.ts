import sgMail from "@sendgrid/mail";

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

type SendMailRequestProps = {
  name: string;
  email: string;
  message: string;
};

type SendMailResponseProps = {
  status: string;
  type: string;
};

export const sendMail = async ({
  name,
  email,
  message,
}: SendMailRequestProps): Promise<SendMailResponseProps> => {
  const response = {
    status: "error",
    type: "Unknown error",
  };

  if (!process.env.SENDGRID_API_KEY) {
    response.type = "Invalid API key";
  }

  const msg = {
    to: "marcel.kalveram@gmail.com",
    from: "mail@thesustainablelist.com",
    subject: "New message by " + name + "(" + email + ")",
    text: message,
  };

  try {
    await sgMail.send(msg);
    response.status = "success";
    response.type = "Mail Sent";
  } catch (error) {
    response.type = "Sendgrid error:, " + error;
  }

  return response;
};
