const { Article, User } = require('../models/db')

async function createArticle (title, content, authorId) {
  if (typeof title !== 'string' || title.length < 1) {
    throw new Error('Title empty or undefined')
  }
  if (typeof content !== 'string' || content.length < 1) {
    throw new Error('Content empty or undefined')
  }
  if (typeof authorId !== 'number') {
    throw new Error('Author of article not defined')
  }
  try {
    await Article.create({
      title, content, authorId
    })
  } catch (e) {
    throw e
  }
}

async function fetchArticles () {
  try {
    const articles = await Article.findAll()
    return articles
  } catch (e) {
    throw (e)
  }
}

module.exports = {
  createArticle,
  fetchArticles
}
