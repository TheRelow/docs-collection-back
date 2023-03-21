const genericCrud = require("./generic.controller");
const { CardCollections } = require("../model");

const relations = {
  getAll: "cards",
  get: "cards",
};

module.exports = {
  ...genericCrud(CardCollections, relations),
};
