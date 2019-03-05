import * as User from '../../models/User'

const getUsers = (req, res) => {
  User.find()
    .then(users => {
      const a = users.map((user) => {
        const [firstname, lastname] = user.name.split(" ")
        return {...user.toObject(), firstname, lastname, name: undefined }
      })
      res.formatter.ok(a)
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
    .then(user => {
      const [firstname, lastname] = user.name.split(" ")
      res.formatter.created({...user.toObject(), firstname, lastname, name: undefined })
    })
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
    .then((user) => {
      const [firstname, lastname] = user.name.split(" ")
      res.formatter.ok({...user.toObject(), firstname, lastname, name: undefined })
    })
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
