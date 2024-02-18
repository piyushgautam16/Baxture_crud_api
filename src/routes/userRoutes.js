const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserById);
router.post('/', [
  body('username').notEmpty().withMessage('Username is required'),
  body('age').isInt({ min: 1 }).withMessage('Age must be a positive integer'),
], userController.createUser);
router.put('/:userId', [
  body('username').notEmpty().withMessage('Username is required'),
  body('age').isInt({ min: 1 }).withMessage('Age must be a positive integer'),
], userController.updateUserById);
router.delete('/:userId', userController.deleteUserById);

module.exports = router;
