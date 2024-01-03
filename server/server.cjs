// server.js
const express = require("express"); // Use require, not import
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require('cors');


const app = express(); // Use const app = express();, not import app from express();
// const port = process.env.PORT || 5174;

app.use(cors()); 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure Nodemailer with your email service details
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pandherarashpreet@gmail.com",
    pass: "",
  },
});

// Define a route to handle form submissions
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Create email content
  const mailOptions = {
    from: "pandherarashpreet@gmail.com",
    to: "pandherarashpreet@gmail.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Email not sent" });
    } else {
      console.log("Email sent: " + info.response);
      res.json({ success: true, message: "Email sent successfully" });
    }
  });
});


app.get("/send-email",  (req, res) => {
  res.send("hello");
})

// Start the server
app.listen(5174, () => {
  console.log(`Server is running on port ${5174}`);
});