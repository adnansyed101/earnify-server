import User from "../models/user.model.js";

export const verifyAdmin = async (req, res, next) => {
  const email = req.user?.email;
  const user = await User.findOne({ email });

  if (!user || user?.role !== "Admin") {
    return res
      .status(403)
      .send({ message: "Forbidden Access! Admin Only Actions!" });
  }

  next();
};

export const verifyBuyer = async (req, res, next) => {
  const email = req.user?.email;
  const user = await User.findOne({ email });

  if (!user || user?.role !== "Buyer") {
    return res
      .status(403)
      .send({ message: "Forbidden Access! Buyer Only Actions!" });
  }
  next();
};

export const verifyWorker = async (req, res, next) => {
  const email = req.user?.email;
  const user = await User.findOne({ email });
  if (!user || user?.role !== "Worker") {
    return res
      .status(403)
      .send({ message: "Forbidden Access! Worker Only Actions!" });
  }
  next();
};
