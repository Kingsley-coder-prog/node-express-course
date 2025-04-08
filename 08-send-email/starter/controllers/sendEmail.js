const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "leilani.little@ethereal.email",
      pass: "FDf7KuGKgCJAyGWsDn",
    },
  });
  let info = await transporter.sendMail({
    from: '"Block Gem" <kifeanyi216@gmail.com>',
    to: "bar@example.com",
    subject: "Hello Afrika",
    html: "<h2>Sending Emails with Node.js</h2>",
  });
  res.json(info);
};

module.exports = sendEmail;
