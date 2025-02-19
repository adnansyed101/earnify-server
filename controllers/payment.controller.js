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

export const getUserPayments = async (req, res) => {
  const email = req.query.email;
  const decodedEmail = req.user?.email;

  if (decodedEmail !== email) {
    return res.status(401).send({ message: "Unauthorized Access" });
  }

  try {
    const payments = await Payment.find({ buyerEmail: email });
    res.status(201).json({ success: true, data: payments });
  } catch (err) {
    console.log("Error in getting payment: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};