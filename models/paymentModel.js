const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: 'Unpaid' },
  paidAt: Date,
});

const Payment = mongoose.model('Payment', paymentSchema);
module.exports = Payment;
