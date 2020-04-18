import mongoose from 'mongoose'

const connect = () => {
  return mongoose.connect(process.env.DATABASE_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
}

export { connect }
