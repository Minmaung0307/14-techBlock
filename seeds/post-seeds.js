const { Post } = require("../models");

const postdata = [
  {
    title: "Columbia Engineering",
    post_url: "https://bootcamp.cvn.columbia.edu/",
    user_id: 2,
  },
  {
    title: "Columbia College",
    post_url: "https://www.college.columbia.edu/",
    user_id: 2,
  },
  {
    title: "Marist College",
    post_url:
      "https://www.marist.edu/undergraduate-admission?utm_source=udm&utm_medium=ppc&utm_campaign=did-20221246-cid-20222789&gclid=CjwKCAjws--ZBhAXEiwAv-RNL1yqmXT_9KJSJ_7eQLUN4Z2pRYNtDSUwBRkWQfTz2qV_FViPkrhXFBoC6-AQAvD_BwE&gclsrc=aw.ds",
    user_id: 3,
  },
  {
    title: "Vassar College",
    post_url: "https://www.vassar.edu/",
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
