import User from '../models/User'

const getUsers = (req, res) => {
  User.find({})
    .then(users => res.json(users))
    .catch(err => res.status(422).json({ message: err.message }))
}

const getUserById = (req, res) => {
  res.json({})
}

const createUser = (req, res) => {
  res.json({})
}

const updateUser = (req, res) => {
  res.json({})
}

const deleteUser = (req, res) => {
  res.json({})
}

export {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
