const { validationResult } = require('express-validator');
const User = require('../models/User');

let users = [];

const getAllUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const { userId } = req.params;
  const user = users.find(user => user.id === userId);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
};

const createUser = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { username, age, hobbies } = req.body;
  const newUser = new User(username, age, hobbies);
  users.push(newUser);
  res.status(201).json(newUser);
};

const updateUserById = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { userId } = req.params;
  const { username, age, hobbies } = req.body;
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  if (!username || !age) {
    return res.status(400).json({ error: 'Username and age are required' });
  }
  users[userIndex] = { ...users[userIndex], username, age, hobbies };
  res.json(users[userIndex]);
};

const deleteUserById = (req, res) => {
  const { userId } = req.params;
  const userIndex = users.findIndex(user => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }
  users.splice(userIndex, 1);
  res.sendStatus(204);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
