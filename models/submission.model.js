import mongoose from "mongoose";

const buyerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const workerSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

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
  worker: workerSchema,
  buyer: buyerSchema,
});
