const express = require('express');
const {
  createPayment,
  getAllPayments,
  getPaymentById,
  markAsPaid,
  deletePayment,
} = require('../controllers/paymentController');

const router = express.Router();

router.post('/create', createPayment);
router.get('/getall', getAllPayments);
router.get('/:id', getPaymentById);
router.put('/:id/mark-as-paid', markAsPaid);
router.delete('/:id', deletePayment);

module.exports = router;
