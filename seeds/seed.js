const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userData = require('./user.json');
const postData = require('./post.json');
const commentData = require('./comment.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('-----DATA SYNC-----');

  const users = await User.bulkCreate(userData, {
    individualHooks: true
  });
  console.log('-----USER SEEDED-----');

  const posts = await Post.bulkCreate(postData, {
    individualHooks: true
  });
  console.log('-----POST SEEDED-----');

  const comments = await Comment.bulkCreate(commentData, {
    individualHooks: true
  });
  console.log('-----COMMENT SEEDED-----');

  process.exit(0);
};

seedDatabase();
