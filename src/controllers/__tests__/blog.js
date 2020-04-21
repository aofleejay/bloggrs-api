import * as blogController from '../blog'
import * as blogModel from '../../models/blog'
import { buildReq, buildRes, buildBlog } from '../../test-utils'

jest.mock('../../models/blog')

afterEach(() => {
  jest.clearAllMocks()
})

it('function get should return blogs', async () => {
  const req = buildReq()
  const res = buildRes()
  const blogs = []
  blogModel.get.mockResolvedValueOnce(blogs)

  await blogController.get(req, res)

  expect(blogModel.get).toHaveBeenCalledTimes(1)
  expect(res.json).toHaveBeenCalledWith({ data: blogs })
  expect(res.json).toHaveBeenCalledTimes(1)
})

it('function getById should return a blog when blog found', async () => {
  const req = buildReq({ params: { id: '1' } })
  const res = buildRes()
  const blog = buildBlog()
  blogModel.getById.mockResolvedValueOnce(blog)

  await blogController.getById(req, res)

  expect(blogModel.getById).toHaveBeenCalledWith(req.params.id)
  expect(blogModel.getById).toHaveBeenCalledTimes(1)
  expect(res.json).toHaveBeenCalledWith({ data: blog })
  expect(res.json).toHaveBeenCalledTimes(1)
})

it('function getById should return 404 when blog not found', async () => {
  const req = buildReq({ params: { id: '1' } })
  const res = buildRes()
  blogModel.getById.mockResolvedValueOnce(null)

  await blogController.getById(req, res)

  expect(blogModel.getById).toHaveBeenCalledWith(req.params.id)
  expect(blogModel.getById).toHaveBeenCalledTimes(1)
  expect(res.status).toHaveBeenCalledWith(404)
  expect(res.status).toHaveBeenCalledTimes(1)
  expect(res.json.mock.calls[0]).toMatchInlineSnapshot(`
    Array [
      Object {
        "error": Object {
          "code": "BLOG_NOT_FOUND",
          "message": "Blog not found.",
        },
      },
    ]
  `)
  expect(res.json).toHaveBeenCalledTimes(1)
})

it('function create should return 201 when create blog success', async () => {
  const req = buildReq({ body: { content: 'Lorem ipsum' } })
  const res = buildRes()
  const createdBlog = buildBlog()
  blogModel.create.mockResolvedValueOnce(createdBlog)

  await blogController.create(req, res)

  expect(blogModel.create).toHaveBeenCalledWith({ content: req.body.content })
  expect(blogModel.create).toHaveBeenCalledTimes(1)
  expect(res.status).toHaveBeenCalledWith(201)
  expect(res.status).toHaveBeenCalledTimes(1)
  expect(res.json).toHaveBeenCalledWith({ data: createdBlog })
  expect(res.json).toHaveBeenCalledTimes(1)
})

it('function update should return updated blog when update success', async () => {
  const req = buildReq({
    params: { id: '1' },
    body: { content: 'Lorem ipsum' },
  })
  const res = buildRes()
  const updatedBlog = buildBlog({ id: '1', content: 'Lorem ipsum' })
  blogModel.update.mockResolvedValueOnce(updatedBlog)

  await blogController.update(req, res)

  expect(blogModel.update).toHaveBeenCalledWith(req.params.id, {
    content: req.body.content,
  })
  expect(blogModel.update).toHaveBeenCalledTimes(1)
  expect(res.json).toHaveBeenCalledWith({ data: updatedBlog })
  expect(res.json).toHaveBeenCalledTimes(1)
})

it('function remove should return 204 when delete blog success', async () => {
  const req = buildReq({ params: { id: '1' } })
  const res = buildRes()
  blogModel.remove.mockResolvedValueOnce()

  await blogController.remove(req, res)

  expect(blogModel.remove).toHaveBeenCalledWith(req.params.id)
  expect(blogModel.remove).toHaveBeenCalledTimes(1)
  expect(res.status).toHaveBeenCalledWith(204)
  expect(res.status).toHaveBeenCalledTimes(1)
  expect(res.send).toHaveBeenCalledTimes(1)
})
