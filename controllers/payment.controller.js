import Payment from "../models/payment.model.js";

export const createPayment = async (req, res) => {
  const payment = req.body;

  if (
    !payment.purchaseDate ||
    !payment.coinsPurchased ||
    !payment.amountPaid ||
    !payment.transID ||
    !payment.buyerEmail
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newPayment = new Payment(payment);

  try {
    await newPayment.save();
    res.status(201).json({ success: true, data: newPayment });
  } catch (err) {
    console.log("Error in creating payment: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
