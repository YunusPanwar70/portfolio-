import User from '../models/user.models.js';
import { sendWelcomeEmail, notifyAdminAboutNewUser } from '../utils/sendEmail.js';

export const contact = async (req, res) => {
    const { name, email, phone, subject, message } = req.body;
    console.log("Received login request:", req.body);
    try {
        if (![name, email, phone, subject, message].every(field => field && field.trim())) {
            return res.status(400).json({ msg: 'All fields are required' });
        }

        let user = await User.findOne({ email });
        let isnewUser = false;

        if (!user) {
            new User({ name, email, phone, subject, message });
            await user.save();
            isnewUser = true;
        }

        await sendWelcomeEmail(email);
        await notifyAdminAboutNewUser(name, email, phone, subject, message);

        return res.status(200).json({ msg: isnewUser ? 'User registered and login successful' : 'Login successful', user });
    } catch (error) {
        console.log('Login user error', error);
        res.status(500).json({ msg: 'Login server error' });
    }
};