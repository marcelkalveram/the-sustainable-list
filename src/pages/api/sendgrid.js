const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendMail = ({ name, email, message }) => {
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error('now API key defined');
  }
  if (!email || !message) {
    throw new Error('insufficient form data');
  }
  if (!name) {
    name = 'unknown';
  }
  const msg = {
    to: 'marcel.kalveram@googlemail.com',
    from: 'mail@thesustainablelist.com',
    subject: 'New message by ' + name + '(' + email + ')',
    text: message,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };
  sgMail.send(msg);
};
