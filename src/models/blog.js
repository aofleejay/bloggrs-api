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

const find = () => {
  return blogModel.find().lean()
}

export { find }
