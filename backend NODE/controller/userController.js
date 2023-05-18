const { log } = require("console");
const { register, login, getUsers, getUser } = require("../querry/userQuerry");

const registerUser = async (req, res) => {
  try {
    const user = req.body;
    const response = await register(user);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getAllUsers = async (req, res) => {
  try {
    const response = await getUsers();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const user = req.body;
    const response = await login(user);
    res.status(200).json(response);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllUsers,
  registerUser,
  loginUser,
};
