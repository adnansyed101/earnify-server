import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  purchaseDate: {
    type: Date,
    required: true,
  },
  coinsPurchased: {
    type: Number,
    required: true,
  },
  amountPaid: {
    type: Number,
    required: true,
  },
  transID: {
    type: String,
    required: true,
  },
  buyerEmail: {
    type: String,
    required: true,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;
