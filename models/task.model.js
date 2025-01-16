import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  taskDetail: {
    type: String,
    required: true,
  },
  requiredWorkers: {
    type: Number,
    required: true,
  },
  payableAmount: {
    type: Number,
    required: true,
  },
  completionDate: {
    type: Date,
    required: true,
  },
  submissionInfo: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  buyer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Task = mongoose.model("Task", taskSchema);

export default Task;
