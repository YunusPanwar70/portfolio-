import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

export const sendWelcomeEmail = async (email) => {
    console.log("Sending welcome email to:", email);

    if (!email) {
        console.error("No email provided for welcome email");
        return;
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thanks to visit portfolio',
        text: 'When i free then ill contact to you!'
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${email}`);
    } catch (error) {
        console.error('Error sending welcome email:', error);
    }
};

export const notifyAdminAboutNewUser = async (userName, userEmail, userPhone, userSubject, userMessage) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.MY_EMAIL,
        subject: 'New User Contact With You',
        text: `A new user has Contact with you \n Name: ${userName} \n Email: ${userEmail} \n Phone: ${userPhone} \n Subject: ${userSubject} \n Message: ${userMessage}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Admin notified about: ${userEmail}`);
    } catch (error) {
        console.error('Error sending admin notification email:', error);
    }
};
