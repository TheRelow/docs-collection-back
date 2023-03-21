const {
  model,
  Schema,
  Schema: {
    Types: { ObjectId },
  },
} = require("mongoose");

const schema = new Schema({
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  content: {
    type: String,
    default: "",
  },
  imageUrl: {
    type: String,
    default: "",
  },
  slug: {
    type: String,
  },
  docs: [
    {
      type: ObjectId,
      ref: "Doc",
    },
  ],
});

module.exports = model("Folder", schema);
