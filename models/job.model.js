import mongoose from "mongoose";

const buyerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const jobSchema = new mongoose.Schema({
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
  buyer: buyerSchema,
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
