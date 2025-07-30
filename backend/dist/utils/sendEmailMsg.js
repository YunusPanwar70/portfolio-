// // Make sure this is at the top
// import nodemailer from 'nodemailer';
// import dotenv from 'dotenv';

// dotenv.config();
// const email_user = process.env.EMAIL_USER;
// const email_pass = process.env.EMAIL_PASS;

// // THIS WAS MISSING
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: email_user,
//         pass: email_pass
//     }
// });

// // Email to user
// export const sendThankYouEmail = async (email) => {
//     if (!email) {
//         console.error("No user email provided for thank-you message.");
//         return;
//     }

//     const mailOptions = {
//         from: email_user,
//         to: email,
//         subject: 'Thanks for contacting',
//         text: 'Thank you for contacting me. I will talk to you soon!'
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         console.log(`Thank-you email sent to: ${email}`);
//     } catch (error) {
//         console.error('Error sending thank-you email:', error.message);
//     }
// };

// // Email to admin (you)
// export const notifyAdminAboutMessage = async (name, email, phoneNo, message) => {
//     const mailOptions = {
//         from: email_user,
//         to: process.env.MY_EMAIL,
//         subject: '📩 New Contact Message Received',
//         text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phoneNo}\nMessage:\n${message}`
//     };

//     try {
//         await transporter.sendMail(mailOptions);
//         console.log(`Admin notified about message from: ${email}`);
//     } catch (error) {
//         console.error('Error notifying admin about message:', error.message);
//     }
// };
"use strict";