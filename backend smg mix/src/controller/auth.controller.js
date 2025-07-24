import User from '../models/user.models.js';
import { sendWelcomeEmail, notifyAdminAboutNewUser } from '../utils/sendEmail.js';

export const login = async (req, res) => {
    const { name, email } = req.body;
    console.log("Received login request:", req.body);
    try {
        if (!name || !email) {
            return res.status(400).json({ msg: 'Name and Email are required' });
        }

        let user = await User.findOne({ email });
        let isnewUser = false;

        if (!user) {
            user = new User({ name, email });
            await user.save();
            isnewUser = true;

            await notifyAdminAboutNewUser(name, email);
        }

        await sendWelcomeEmail(email);

        return res.status(200).json({ msg: isnewUser ? 'User registered and login successful' : 'Login successful', user });
    } catch (error) {
        console.log('Login user error', error);
        res.status(500).json({ msg: 'Login server error' });
    }
};