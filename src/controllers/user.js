import User from '../models/User'

const getUsers = (req, res) => {
  User.find({})
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
  const user = new User({ name, gender })
  user.save()
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
  User.findByIdAndUpdate(req.params.id, updateFields, { new: true })
    .then(user => res.formatter.ok(user))
    .catch(err => res.formatter.unprocess(err.message))
}

const deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id)
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
