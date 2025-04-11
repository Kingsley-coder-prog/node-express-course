const nodemailer = require("nodemailer");

const sendEmail = async () => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: "lacey.kiehn48@ethereal.email",
      pass: "bpcxche4pfqpsNum8W",
    },
  });

  async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: '"The 10X Rule" <kifeanyi216@gmail.com>', // sender address
      to: "user@user.com", // list of receivers
      subject: "Sample Email", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Sample Email?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  main().catch(console.error);
};

module.exports = sendEmail;
