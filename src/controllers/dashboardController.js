import Record from "../models/Record.js";

export const getSummary = async (req, res) => {
  try {
    const userId = req.user._id;

    const records = await Record.find({ user: userId });

    let totalIncome = 0;
    let totalExpense = 0;

    records.forEach((r) => {
      if (r.type === "income") totalIncome += r.amount;
      else totalExpense += r.amount;
    });

    res.json({
      totalIncome,
      totalExpense,
      netBalance: totalIncome - totalExpense,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getCategoryBreakdown = async (req, res) => {
  try {
    const userId = req.user._id;

    const data = await Record.aggregate([
      { $match: { user: userId } },
      {
        $group: {
          _id: "$category",
          total: { $sum: "$amount" },
        },
      },
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getMonthlyTrends = async (req, res) => {
  try {
    const userId = req.user._id;

    const data = await Record.aggregate([
      { $match: { user: userId } },
      {
        $group: {
          _id: { $month: "$date" },
          total: { $sum: "$amount" },
        },
      },
      { $sort: { "_id": 1 } },
    ]);

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};