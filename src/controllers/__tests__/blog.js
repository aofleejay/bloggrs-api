import * as blogController from '../blog'
import * as blogModel from '../../models/blog'

jest.mock('../../models/blog')

it('function get should return blogs', async () => {
  const req = {}
  const res = {
    status: jest.fn(() => res).mockName('status'),
    json: jest.fn(() => res).mockName('json'),
  }
  const blogs = []
  blogModel.find.mockResolvedValueOnce(blogs)

  await blogController.get(req, res)

  expect(blogModel.find).toHaveBeenCalledTimes(1)
  expect(res.json).toHaveBeenCalledWith({ data: blogs })
  expect(res.json).toHaveBeenCalledTimes(1)
})
