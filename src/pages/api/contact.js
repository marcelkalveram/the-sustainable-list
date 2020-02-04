import { sendMail } from './sendgrid';

export default (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  let response = { status: 'error', type: 'unknown_error' };
  res.statusCode = 200;
  if (req.method === 'POST') {
    if (!req.body) {
      response.message = 'no_body_provided';
    }
    if (!req.body.name) {
      response.message = 'no_body_name_provided ';
    }
    if (!req.body.email) {
      response.message = 'no_body_email_provided ';
    }
    if (!req.body.message) {
      response.message = 'no_body_message_provided ';
    }
    response.type = '';
    response.status = 'success';
    sendMail(req.body);
    return res.end(JSON.stringify(response));
  }

  res.end(JSON.stringify(response));
};
