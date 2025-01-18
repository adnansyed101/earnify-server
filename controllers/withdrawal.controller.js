import Withdrawal from "../models/withdrawal.model.js";

export const createWithdrawal = async (req, res) => {
  const withdrawal = req.body;

  if (
    !withdrawal.withdrawalCoin ||
    !withdrawal.withdrawalAmount ||
    !withdrawal.paymentSystem ||
    !withdrawal.withdrawDate ||
    !withdrawal.status ||
    !withdrawal.workerEmail ||
    !withdrawal.worker
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  const newWithdrawal = new Withdrawal(withdrawal);

  try {
    await newWithdrawal.save();
    res.status(201).json({ success: true, data: newWithdrawal });
  } catch (err) {
    console.log("Error in creating widrawal: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
