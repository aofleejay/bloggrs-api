import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  name: String,
  gender: String,
}, {
  timestamps: true,
  versionKey: false,
})

const User = mongoose.model('User', userSchema)

const find = () => User.find({})
const findById = (id) => User.findById(id)
const create = ({ name, gender }) => User.create({ name, gender })
const update = (id, { name, gender }) => User.findByIdAndUpdate(id, { name, gender }, { new: true })
const remove = (id) => User.findByIdAndRemove(id)

export { find, findById, create, update, remove }
