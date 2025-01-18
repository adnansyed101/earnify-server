import Payment from "../models/payment.model.js";
import Submission from "../models/submission.model.js";
import Task from "../models/task.model.js";
import User from "../models/user.model.js";
import Withdrawal from "../models/withdrawal.model.js";

export const getWorkerOverView = async (req, res) => {
  const email = req.query.email;

  try {
    const submissionCount = await Submission.countDocuments({
      workerEmail: email,
    });
    const pendingSubmissionsCount = await Submission.countDocuments({
      workerEmail: email,
      status: "pending",
    });
    const acceptedSubmissions = await Submission.find({
      workerEmail: email,
      status: "accepted",
    })
      .populate("buyer")
      .populate("task");

    const totalEarning = await Submission.aggregate([
      { $match: { workerEmail: email, status: "accepted" } },
      {
        $lookup: {
          from: "tasks",
          localField: "task",
          foreignField: "_id",
          as: "taskDetails",
        },
      },
      {
        $unwind: "$taskDetails",
      },
      {
        $group: {
          _id: null,
          totalPayableAmount: { $sum: "$taskDetails.payableAmount" },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      data: {
        submissionCount,
        pendingSubmissionsCount,
        totalEarning: totalEarning[0] || { totalPayableAmount: 0 },
        acceptedSubmissions,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getBuyerOverView = async (req, res) => {
  const email = req.query.email;

  try {
    const totalPayments = await Payment.aggregate([
      { $match: { buyerEmail: email } },
      {
        $group: {
          _id: null,
          totalPaid: { $sum: "$amountPaid" },
        },
      },
    ]);

    const overview = await Task.aggregate([
      { $match: { buyerEmail: email } },
      {
        $group: {
          _id: null,
          countOfTasks: { $sum: 1 },
          totalRequiredWorkers: { $sum: "$requiredWorkers" },
        },
      },
    ]);

    const submissions = await Submission.find({ buyerEmail: email })
      .populate("worker")
      .populate("task");

    res
      .status(201)
      .json({ success: true, data: { totalPayments, overview, submissions } });
  } catch (err) {
    console.log("Error in getting payment: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const getAdminOverview = async (req, res) => {
  try {
    const totalWorker = await User.countDocuments({ role: "Worker" });
    const totalBuyer = await User.countDocuments({ role: "Buyer" });
    const totalAvailableCoin = await User.aggregate([
      {
        $group: {
          _id: null,
          totalCoins: { $sum: "$coin" },
        },
      },
    ]);
    const totalPayment = await Withdrawal.aggregate([
      { $match: { status: "accepted" } },
      {
        $group: {
          _id: null,
          totalPaid: { $sum: "$withdrawalAmount" },
        },
      },
    ]);
    const pendingPayments = await Withdrawal.find({ status: "pending" });

    res.status(201).json({
      success: true,
      data: {
        totalWorker,
        totalBuyer,
        totalAvailableCoin,
        totalPayment,
        pendingPayments,
      },
    });
  } catch (err) {
    console.log("Error in getting payment: " + err.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
