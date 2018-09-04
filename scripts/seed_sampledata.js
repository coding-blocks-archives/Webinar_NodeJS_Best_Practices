const models = require('../src/models/db')

async function seed () {
  try {
    await models.db.sync({ force: true })

    await models.User.bulkCreate([
      { username: 'firstuser', password: 'firstpass' },
      { username: 'seconduser', password: 'secondpass' }
    ])
    await models.Article.bulkCreate([
      {
        title: 'Neque porro quisquam est qui dolorem ipsum ',
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        authorId: 1
      },
      {
        title: 'quia dolor sit amet, consectetur, adipisci velit',
        content: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.`,
        authorId: 1
      },
      {
        title: 'There is no one who loves pain itself,',
        content: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
        authorId: 2
      },
      {
        title: ' wants to have it, simply because it is pain',
        content: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
        authorId: 2
      }
    ])
    await models.Comment.bulkCreate([
      {
        title: 'nice article',
        message: 'really nice written article, thanks!',
        userId: 1,
        articleId: 1
      },
      {
        title: 'good article',
        message: `o take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses `,
        userId: 1,
        articleId: 1
      },
      {
        title: 'could be better',
        message: `, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repreh`,
        userId: 1,
        articleId: 2
      },
      {
        title: 'thanks for writing this',
        message: `hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain `,
        userId: 2,
        articleId: 3
      },
      {
        title: 'did not like your article',
        message: `pedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis volupt`,
        userId: 1,
        articleId: 3
      },
      {
        title: 'really bad article',
        message: `ure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and `,
        userId: 2,
        articleId: 4
      }
    ])
  } catch (e) {
    throw e
  }
}

seed()
