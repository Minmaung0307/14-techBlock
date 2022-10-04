const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    username: "win",
    email: "win@gmail.com",
    password: "1234",
  },
  {
    username: "min",
    email: "min@gmail.com",
    password: "1234",
  },
  {
    username: "zaw",
    email: "zaw@gmail.com",
    password: "1234",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
