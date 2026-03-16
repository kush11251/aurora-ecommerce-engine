const mongoose = require('mongoose');
const metricsSchema = new mongoose.Schema({
  timestamp: Date,
  sales: Number,
  revenue: Number
});
const Metrics = mongoose.model('Metrics', metricsSchema);
const getMetrics = async () => {
  return await Metrics.find().sort({ timestamp: -1 });
};
module.exports = { getMetrics };