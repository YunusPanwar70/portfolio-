// import Message from '../models/msg.models.js';
// import { sendThankYouEmail, notifyAdminAboutMessage } from '../utils/sendEmailMsg.js';

// export const getMesg = async (req, res) => {
//     const { name, email, phoneNo, msg } = req.body;
//     try {
//         if (!name || !email || !phoneNo || !msg) {
//             return res.status(400).json({ msg: 'All Field are required' });
//         }
//         const newMesg = new Message({ name, email, phoneNo, msg });
//         await newMesg.save();

//         await sendThankYouEmail(email);

//         await notifyAdminAboutMessage(name, email, phoneNo, msg);

//         res.status(201).json({ msg: 'Message sent successfully' });

//     } catch (error) {
//         console.log('Message controller error', error);
//         res.status(500).json({ msg: 'Message server error' });
//     }
// };
"use strict";