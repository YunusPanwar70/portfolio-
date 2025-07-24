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
        subject: 'Welcome to visit portfolio',
        text: 'Thank you for visiting my portfolio. Stay connected!'
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Email sent to ${email}`);
    } catch (error) {
        console.error('Error sending welcome email:', error);
    }
};

export const notifyAdminAboutNewUser = async (userName, userEmail) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.MY_EMAIL,
        subject: 'New User Registered',
        text: `A new user has registered:\n\nName: ${userName}\nEmail: ${userEmail}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Admin notified about: ${userEmail}`);
    } catch (error) {
        console.error('Error sending admin notification email:', error);
    }
};
