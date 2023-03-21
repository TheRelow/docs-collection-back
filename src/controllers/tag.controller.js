const genericCrud = require("./generic.controller");
const { Tag } = require("../model");

const relations = {
  getAll: "cards",
  get: "cards",
};

module.exports = {
  ...genericCrud(Tag, relations),
};
