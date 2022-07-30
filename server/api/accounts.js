const express = require('express')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()

// Body parser, to access `req.body`
app.use(express.json())

app.get('/api/drafts', async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { published: false },
    include: { author: true }
  })
  res.status(200).json(posts)
})

app.post(`/api/user`, async (req, res) => {
  const result = await prisma.user.create({
    data: {
      ...req.body,
    },
  })
  res.status(200).json(result)
})

app.post(`/api/post`, async (req, res) => {
  const { title, content, authorEmail } = req.body
  const result = await prisma.post.create({
    data: {
      title,
      content,
      published: false,
      author: { connect: { email: authorEmail } },
    },
  })
  res.status(200).json(result)
})

app.put('/api/publish/:id', async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.update({
    where: {
      id: parseInt(id),
    },
    data: { published: true },
  })
  res.status(200).json(post)
})

app.delete(`/api/post/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.delete({
    where: {
      id: parseInt(id),
    },
  })
  res.status(200).json(post)
})

app.get(`/api/post/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.post.findUnique({
    where: {
      id: parseInt(id),
    },
    include: { author: true }
  })
  res.status(200).json(post)
})

app.get('/api/feed', async (req, res) => {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: true },
  })
  res.status(200).json(posts)
})

app.get('/api/filterPosts', async (req, res) => {
  const { searchString } = req.query
  const draftPosts = await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: searchString,
          },
        },
        {
          content: {
            contains: searchString,
          },
        },
      ],
    },
  })
  res.status(200).json(draftPosts)
})

export default {
  path: '/api',
  handler: app
}
