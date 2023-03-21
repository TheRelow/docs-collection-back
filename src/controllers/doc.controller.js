const genericCrud = require("./generic.controller");
const { Doc } = require("../model");

const relations = {
  getAll: "card-collections",
  get: "card-collections",
};

module.exports = {
  ...genericCrud(Doc),
};
