import { Schema, model } from 'mongoose'

const blogSchema = new Schema(
  {
    content: String,
  },
  {
    timestamps: true,
    versionKey: false,
  },
)

const blogModel = model('blogs', blogSchema)

const get = () => {
  return blogModel.find().lean()
}

const getById = (id) => {
  return blogModel.findById(id).lean()
}

const create = (blog) => {
  return blogModel.create(blog)
}

const update = (id, blog) => {
  return blogModel.findByIdAndUpdate(id, blog, { new: true }).lean()
}

const remove = (id) => {
  return blogModel.findByIdAndDelete(id).lean()
}

export { get, getById, create, update, remove }
