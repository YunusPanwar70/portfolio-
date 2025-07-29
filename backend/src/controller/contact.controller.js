import Contact from '../models/contact.models.js';
import { sendWelcomeEmail, notifyAdminAboutNewContact } from '../utils/sendEmail.js';

export const submitcontactform = async (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    console.log("Received contact form:", req.body);

    try {
        if (!name || !email || !phone || !subject || !message) {
            return res.status(400).json({ msg: 'All fields are required' });
        }

        const contact = new Contact({
            name,
            email,
            phone,
            subject,
            message
        });

        // Save to database
        await contact.save();

        // Send emails in parallel
        await Promise.all([
            sendWelcomeEmail(email, name),
            notifyAdminAboutNewContact({ name, email, phone, subject, message })
        ]);

        return res.status(201).json({
            success: true,
            message: 'Thank you for your message! We will get back to you soon.',
            data: {
                id: contact._id,
                name,
                email,
                subject
            }
        });
    } catch (error) {
        console.log('Contact form error', error);
        res.status(500).json({ msg: 'Server error processing your request' });
    }
};