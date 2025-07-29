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

export const sendWelcomeEmail = async (email, name) => {
    console.log("Sending welcome email to:", email);

    if (!email) {
        console.error("No email provided for welcome email");
        return;
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Welcome to visit portfolio',
        text: `Dear ${name},\n\nThank you for contacting me through my portfolio. I appreciate your message and will get back to you soon!\n\nBest regards,\n[Your Name]`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Welcome email sent to ${email}`);
    } catch (error) {
        console.error('Error sending welcome email:', error);
    }
};

export const notifyAdminAboutNewContact = async (contactDetails) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.MY_EMAIL,
        subject: 'New Contact Form Submission',
        text: `New contact form submission received:\n\n
               Name: ${contactDetails.name}\n
               Email: ${contactDetails.email}\n
               Phone: ${contactDetails.phone}\n
               Subject: ${contactDetails.subject}\n
               Message: ${contactDetails.message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`Admin notified about new contact from: ${contactDetails.email}`);
    } catch (error) {
        console.error('Error sending admin notification email:', error);
    }
};