const route = require('express').Router()

const { fetchArticles,
  createArticle,
  fetchArticleById
} = require('../../controllers/articles')

route.get('/', async (req, res) => {
  // Get all articles
  const articles = await fetchArticles()
  res.status(200).json(articles)
})

route.post('/', async (req, res) => {
  // Add a new article
  const article = await createArticle(
    req.body.title,
    req.body.content,
    1 // TODO: Use actual user id from req.user.id
  )
  res.send(article)
})

route.get('/:id', async (req, res) => {
  // Fetch a particular article
  const articleId = req.params.id
  if (isNaN(parseInt(articleId))) {
    console.error(new Error('Article ID is not correct number'))
    res.redirect('/')
  }
  try {
    const article = await fetchArticleById(articleId)
    res.status(200).json(article)
  } catch (e) {
    throw e
  }
})

route.get('/:id/comments', (req, res) => {
  // Fetch comments of a particular article
})

module.exports = route
