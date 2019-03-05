import * as User from '../../models/User'

/**
 * **Format user for v2.**
 * - Split 'name' into 'firstname' and 'lastname'.
 */
const formattingUser = (user) => {
  const [firstname, lastname] = user.name.split(" ")
  return {...user.toObject(), firstname, lastname, name: undefined }
}

const getUsers = (req, res) => {
  User.find()
    .then(users => {
      const formattedUsers = users.map(formattingUser)
      res.formatter.ok(formattedUsers)
    })
    .catch(err => res.formatter.unprocess(err.message))
}

const getUserById = (req, res) => {
  User.findById(req.params.id)
    .then(user => res.formatter.ok(user))
    .catch(err => res.formatter.unprocess(err.message))
}

const createUser = (req, res) => {
  const { firstname, lastname, gender } = req.body
  const name = `${firstname} ${lastname}`
  User.create({ name, gender })
    .then(user => res.formatter.created(formattingUser(user)))
    .catch(err => res.formatter.unprocess(err.message))
}

const updateUser = (req, res) => {
  const { firstname, lastname, gender } = req.body
  const updateFields = {}
  if (firstname && lastname) {
    updateFields.name = `${firstname} ${lastname}`
  }
  if (gender) {
    updateFields.gender = gender
  }
  User.update(req.params.id, updateFields)
    .then(user => res.formatter.ok(formattingUser(user)))
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
