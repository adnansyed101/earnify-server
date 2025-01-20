import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  toEmail: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
});

const Notification = mongoose.model("Notfication", notificationSchema);

export default Notification;
