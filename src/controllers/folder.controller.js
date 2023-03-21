const genericCrud = require("./generic.controller");
const { Folder } = require("../model");

const relations = {
  getAll: "docs",
  get: "docs",
};

module.exports = {
  ...genericCrud(Folder, relations),
};
