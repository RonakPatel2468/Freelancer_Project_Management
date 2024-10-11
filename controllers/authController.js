const User = require('../models/userModel');
const jwtHelper = require('../utils/jwtHelper');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) return res.status(400).json({ message: 'User already exists' });

  const user = await User.create({ name, email, password });
  const token = jwtHelper.generateToken(user);
  res.status(201).json({ user: { name: user.name, email: user.email }, token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  const token = jwtHelper.generateToken(user);
  res.json({ user: { name: user.name, email: user.email }, token });
};
