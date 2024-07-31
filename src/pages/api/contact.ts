import { sendMail } from "./sendgrid";

interface HandlerRequestProps {
  method: string;
  body: {
    name: string;
    email: string;
    message: string;
  };
}

interface HandlerResponseProps {
  statusCode: number;
  setHeader: Function;
  end: Function;
}

interface ResponseProps {
  status: string;
  type: string;
}

const handler = async (req: HandlerRequestProps, res: HandlerResponseProps) => {
  res.setHeader("Content-Type", "application/json");
  let response: ResponseProps = { status: "", type: "unknown_error" };
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
    return res.end(JSON.stringify(responseMail));
  }

  res.end(JSON.stringify(response));
};

export default handler;
