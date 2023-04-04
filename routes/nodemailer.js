const express = require("express");
const nodemailer = require("nodemailer");
const cron = require("node-cron");
require("dotenv").config();

// test email message options
const mailer = ({ propertyValue, liveInProperty, userInputs }) => {
  const mailOptions = {
    from: `${userInputs[0]} <${userInputs[1]}>`,
    to: "josiahonche78@gmail.com",
    subject: "I want to buy a house",
    html: `
    <div style="width: 100%; background-color: #fff; padding: 5rem 0">
    <div style="max-width: 700px; margin: 0 auto; background-color: #fff; margin: 0 auto">
    <div style="width: 100%; background-color: #000; padding: 20px 0">
    <a href="${process.env.CLIENT_URL}" ><img src="https://antonik116.sg-host.com/wp-content/uploads/2023/03/Logo-White-1.png" style="width: 100%; height: 70px; object-fit: contain" /></a>


    </div>
    <div style="width: 100%; gap: 10px: padding: 30px 0; display: grid">
    <h1 style="font-size: 1.15rem; margin: 15px 20px">Here are the new customer details</h1>

    <div style="font-size: .8rem; margin: 0 30px"><p>Will you live in this property?: <b>${liveInProperty}</b></p>
    <p>What is your current property Value?: <b>${propertyValue}</b></p>
    
    <p>name: <b>${userInputs[0]}</b></p>
    <p>email: <b>${userInputs[1]}</b></p>
    <p>number: <b>${userInputs[2]}</b></p>
    <p>state: <b>${userInputs[3]}</b></p></div>
    </div>
    </div>
    </div>`,
  };

  // var doc = new jsPDF();

  // doc.text(`your need: ${yourNeed}`, 10, 10);
  // doc.text(`live in property: ${liveInProperty}`, 10, 20);
  // doc.text(`name: ${userInputs[0]}`, 10, 30);
  // doc.text(`email: ${userInputs[1]}`, 10, 40);
  // doc.text(`number: ${userInputs[2]}`, 10, 50);
  // doc.out;
  // doc.save("newReg.pdf");

  // transport info for nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "itssimpleweb11@gmail.com",
      pass: "otnsgorxefwawapi",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log("Error Occurs", err);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = mailer;
