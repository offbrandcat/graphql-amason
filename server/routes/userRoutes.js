import express from 'express';

import {
  authUser,
  registerUser,
  getUserProfile,
  logoutUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
  getUserByID,
} from '../controllers/userController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(getUsers);
router.post('/logout', logoutUser);
router.post('/auth', authUser);
router
.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile);
router.route('/:id').delete(protect, admin, deleteUser).get(protect,
admin, getUserByID).put(protect, admin, updateUser);

export default router;