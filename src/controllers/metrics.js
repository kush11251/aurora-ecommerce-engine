const metricsModel = require('../models/metrics');
const getMetrics = async (req, res) => {
  try {
    const metrics = await metricsModel.getMetrics();
    res.json(metrics);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
module.exports = { getMetrics };