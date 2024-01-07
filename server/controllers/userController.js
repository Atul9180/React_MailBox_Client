// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = (req, res) => {
  res.json({ message: "Success" });
};

export { authUser };
