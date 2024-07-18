require('dotenv').config()
const nodemailer = require('nodemailer');
const Mailgen = require('mailgen');
const User = require('../../Models/UserModel')
const UserSignup = async (req, res) => {
    const { name, email, password } = req.body;
    const OTP = Math.floor(Math.random() * 10000);
    try {
      const RegisteredUser = new User({ name, email, password, otp: OTP });
      await RegisteredUser.save();
  
      // Generating email
      const emails = email;
      let config = {
        service: 'gmail',
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      };
  
      let transporter = nodemailer.createTransport(config);
  
      let MailGenerator = new Mailgen({
        theme: "default",
        product: {
          name: "Mailgen",
          link: 'https://mailgen.js/',
        },
      });
  
      let response = {
        body: {
          name: "Nodemailer",
          intro: "Your one-time OTP is:",
          table: {
            data: [{ item: OTP }],
          },
        },
      };
  
      let mail = MailGenerator.generate(response);
  
      let message = {
        from: process.env.EMAIL,
        to: emails,
        subject: "Your one-time OTP",
        html: mail,
      };
  
      transporter.sendMail(message)
        .then(() => {
          return res.status(201).json({ msg: "You should receive an email" });
        })
        .catch(error => {
          console.error("Error sending email:", error);
          return res.status(500).json({ error: "Failed to send OTP email" });
        });
  
    } catch (error) {
      console.error("Error in UserSignup:", error);
      return res.status(500).json({ error: "Server error. Please try again later." });
    }
  };
  
module.exports = {
    UserSignup
}