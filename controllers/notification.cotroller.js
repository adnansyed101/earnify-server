import Notification from "../models/notification.model.js";

export const createNotification = async (req, res) => {
  const notification = req.body;

  if (!notification.message || !notification.toEmail || !notification.time) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newNotification = new Notification(notification);

  try {
    await newNotification.save();
    res.status(201).json({ success: true, data: newNotification });
  } catch (err) {
    console.log("Error in creating notification: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getUserNotifications = async (req, res) => {
  const email = req.query.email;

  try {
    const notifications = await Notification.find({ toEmail: email });
    res.status(200).json({ success: true, data: notifications });
  } catch (err) {
    console.log("Error in finding user: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
