// src/functions/sendmail.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
exports.handler =  async (event, context, callback) => {
  const data = JSON.parse(event.body)
  const { email, phone } = data
  const body = Object.keys(data).map((k) => {
    return `${k}: ${data[k]}`
  }).join("<br><br>");
  const mail_to_send = {
    to: "mraquinn@gmail.com",
    from: email,
    subject: phone ? phone : 'New Entry from Contact Form',
    html: body,
  };
  try{
    await sgMail.send(mail_to_send)
    return {
      statusCode: 200,
      body: "Message sent successfully"
    }
  } catch(e){
    return {
      statusCode: e.code,
      body: e.message
    }
  }
};