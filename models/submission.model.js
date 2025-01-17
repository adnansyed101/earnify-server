import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  task: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Task",
  },
  buyerEmail: {
    type: String,
    required: true,
  },
  workerEmail: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  currentDate: {
    type: Date,
    required: true,
  },
  submissionDetail: {
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
