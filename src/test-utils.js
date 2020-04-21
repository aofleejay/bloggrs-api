import faker from 'faker'

const buildReq = (overrides = {}) => {
  const req = {
    params: {},
    body: {},
    query: {},
    ...overrides,
  }

  return req
}

const buildRes = (overrides = {}) => {
  const res = {
    status: jest.fn(() => res).mockName('status'),
    json: jest.fn(() => res).mockName('json'),
    send: jest.fn(() => res).mockName('send'),
    ...overrides,
  }

  return res
}

const buildBlog = (overrides = {}) => {
  const blog = {
    id: faker.random.uuid(),
    content: faker.lorem.paragraphs(3),
    ...overrides,
  }

  return blog
}

export { buildReq, buildRes, buildBlog }
