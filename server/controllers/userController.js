import asyncHandler from '../middleware/asyncHandler.js';
import User from '../models/userModel.js';

// @ description Auth user and get token
// @ route POST/api/users/login
// @ access Public
const authUser =  asyncHandler(async (req, res) => {
    res.send('auth user');
});

// @ description Auth user and get token=
// @ route POST/api/users
// @ access Public
const registerUser =  asyncHandler(async (req, res) => {
    res.send('register user');
});

// @ description logout user
// @ route POST/api/users/log out
// @ access Private
const logoutUser = asyncHandler(async (req, res) => {
    res.send('log out user');
});


// @ description Update user profile
// @ route PUT/api/users profile
// @ access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    res.send('update user profile');
    
});

// @ description Get users
// @ route GET/api/users
// @ access Private/admin
const getUsers = asyncHandler(async (req, res) => {
    res.send('get user');
});

// @ description get user by ID
// @ route GET/users/:id
// @ access Private
const getUserByID = asyncHandler(async (req, res) => {
    res.send('get user by id');
});

// @ description delete
// @ route DELETE/api/users/:id
// @ access Public
const deleteUser = asyncHandler(async (req, res) => {
    res.send('delete user');
    
});

// @ description Update user
// @ route PUT/api/users/:id
// @ access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
    res.send('update user');
    
});

export {
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserByID,
    updateUser,
};