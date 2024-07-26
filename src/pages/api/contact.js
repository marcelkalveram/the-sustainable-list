import { sendMail } from "./sendgrid";

const handler = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  let response = { status: "", type: "unknown_error" };
  res.statusCode = 200;
  if (req.method === "POST") {
    if (!req.body) {
      response.status = "error";
      response.type = "no_body_provided";
    }
    if (!req.body.name) {
      response.status = "error";
      response.type = "no_body_name_provided ";
    }
    if (!req.body.email) {
      response.status = "error";
      response.type = "no_body_email_provided ";
    }
    if (!req.body.message) {
      response.status = "error";
      response.type = "no_body_message_provided ";
    }

    if (response.status === "error") {
      return res.end(JSON.stringify(response));
    }

    const responseMail = await sendMail(req.body, response);
    console.log(responseMail);
    return res.end(JSON.stringify(responseMail));
  }

  res.end(JSON.stringify(response));
};

export default handler;
