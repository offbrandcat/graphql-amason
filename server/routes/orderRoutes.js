import express from 'express';

const router= express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderTopPaid,
  updateOrderToDelivered,
  getOrders,
} from '../controllers/ordercontroller.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(protect, addOrderItems).get(protect, admin. getOrders );
router.route('/mine').get(protect, getMyOrders);
router.route('/:id/deliver').put(protect, admin, updateOrderToDelivered);
router.route('/:id').get(protect, getOrderById);
router.route('/:id/pay').put(protect, admin, updateOrderTopPaid);


export default router;