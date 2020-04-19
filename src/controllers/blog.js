import * as blogModel from '../models/blog'

const get = async (req, res) => {
  try {
    const blogs = await blogModel.get()

    res.json({ data: blogs })
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'GET_BLOG_FAILED',
        message: error.message,
      },
    })
  }
}

export { get }
