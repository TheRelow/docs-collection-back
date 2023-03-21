const genericCrud = require("./generic.controller");
const { Card } = require("../model");

const relations = {
  getAll: "card-collections",
  get: "card-collections",
};

module.exports = {
  ...genericCrud(Card),
};
