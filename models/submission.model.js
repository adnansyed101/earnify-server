import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  taskId: {
    type: String,
    required: true,
  },
  taskTitle: {
    type: String,
    required: true,
  },
  payableAmount: {
    type: Number,
    required: true,
  },
  submissionDetails: {
    type: String,
    required: true,
  },
  currentDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  worker: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
  buyer: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Submission = mongoose.model("Submission", submissionSchema);

export default Submission;
