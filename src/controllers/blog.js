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

const getById = async (req, res) => {
  try {
    const blog = await blogModel.getById(req.params.id)

    if (blog) {
      res.json({ data: blog })
    } else {
      res.status(404).json({
        error: {
          code: 'BLOG_NOT_FOUND',
          message: 'Blog not found.',
        },
      })
    }
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'GET_BLOG_FAILED',
        message: error.message,
      },
    })
  }
}

const create = async (req, res) => {
  try {
    const { content } = req.body
    const createdBlog = await blogModel.create({ content })

    res.status(201).json({ data: createdBlog })
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'CREATE_BLOG_FAILED',
        message: error.message,
      },
    })
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params
    const { content } = req.body
    const updatedBlog = await blogModel.update(id, { content })

    res.json({ data: updatedBlog })
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'UPDATE_BLOG_FAILED',
        message: error.message,
      },
    })
  }
}

const remove = async (req, res) => {
  try {
    const { id } = req.params
    await blogModel.remove(id)

    res.status(204).send()
  } catch (error) {
    res.status(500).json({
      error: {
        code: 'DELETE_BLOG_FAILED',
        message: error.message,
      },
    })
  }
}

export { get, getById, create, update, remove }
