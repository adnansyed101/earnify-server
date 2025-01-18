import mongoose from "mongoose";

const withdrawalSchema = new mongoose.Schema({
  withdrawalCoin: {
    type: Number,
    required: true,
  },
  withdrawalAmount: {
    type: Number,
    required: true,
  },
  paymentSystem: {
    type: String,
    required: true,
  },
  withdrawDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  workerEmail: {
    type: String,
    required: true,
  },
  worker: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Withdrawal = mongoose.model("Withdrawal", withdrawalSchema);

export default Withdrawal;
