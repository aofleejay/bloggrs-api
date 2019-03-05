import * as User from '../../models/User'

const getUsers = (req, res) => {
  User.find()
    .then(users => res.formatter.ok(users))
    .catch(err => res.formatter.unprocess(err.message))
}

const getUserById = (req, res) => {
  User.findById(req.params.id)
    .then(user => res.formatter.ok(user))
    .catch(err => res.formatter.unprocess(err.message))
}

const createUser = (req, res) => {
  const { name, gender } = req.body
  User.create({ name, gender })
    .then(user => res.formatter.created(user))
    .catch(err => res.formatter.unprocess(err.message))
}

const updateUser = (req, res) => {
  const { name, gender } = req.body
  const updateFields = {}
  if (name) {
    updateFields.name = name
  }
  if (gender) {
    updateFields.gender = gender
  }
  User.update(req.params.id, updateFields)
    .then(user => res.formatter.ok(user))
    .catch(err => res.formatter.unprocess(err.message))
}

const deleteUser = (req, res) => {
  User.remove(req.params.id)
    .then(() => res.formatter.noContent())
    .catch(err => res.formatter.unprocess(err.message))
}

export {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}
