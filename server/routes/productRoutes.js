const express = require("express");

const router = express.Router();
import {
  getProducts,
  getProdcutById,
  createProduct,
  updateProduct,
  deleteProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router.route('/top', getTopProducts);
router
.route('/:id')
.put(getProdcutById)
.put(protect, admin, updateProduct)
.delete(protect, admin, deleteProduct);

export default router;
