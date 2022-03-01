const User = require('../models/user');

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ googleId: id });
    res.status(200).json({ success: true, data: user });
  } catch (err) {
    res.status(500).json({ success: false, msg: 'User not found' });
  }
};

const authUser = (req, res) => {
  console.log('User:', req.user);
  res.status(200).json({ success: true, data: req.user });
};

const logout = (req, res) => {
  req.logout();
  res.status(200).json({ success: true, msg: 'logout successful' });
};

module.exports = {
  authUser,
  getUser,
  logout,
};
