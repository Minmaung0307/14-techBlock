const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "Columbia Engineering",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "Columbia College",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Marist College",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "Vassar College",
    user_id: 1,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
