const Sequelize = require('sequelize')
const DT = Sequelize.DataTypes

const db = new Sequelize(
  'sampleblogdb', 'samplebloguser', 'sampleblogpass',
  {
    dialect: 'mysql',
    host: 'localhost'
  }
)

const User = db.define('user', {
  username: { type: DT.STRING(30), unique: true, allowNull: false },
  password: { type: DT.STRING, allowNull: true }
})

const Article = db.define('article', {
  title: {
    type: DT.STRING(150),
    allowNull: true
  },
  content: {
    type: DT.STRING
  }
})

const Comment = db.define('comment', {
  title: {
    type: DT.STRING(150),
    allowNull: true
  },
  message: {
    type: DT.STRING
  }
})

Article.belongsTo(User, { as: 'author' })
User.hasMany(Article, { as: 'author' })

Comment.belongsTo(Article)
Article.hasMany(Comment)

Comment.belongsTo(User)
User.hasMany(Comment)

module.exports = {
  db,
  User,
  Comment,
  Article
}
