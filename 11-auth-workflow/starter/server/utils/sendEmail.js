const nodemailer = require("nodemailer");
const nodemailerConfig = require("./nodemailerConfig");

const sendEmail = async ({ to, subject, html }) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  // send mail with defined transport object
  return transporter.sendMail({
    from: '"The 10X Rule" <kifeanyi216@gmail.com>', // sender address
    to,
    subject,
    html,
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
};

module.exports = sendEmail;
