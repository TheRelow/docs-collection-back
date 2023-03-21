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
  date: {
    type: String,
    default: "",
  },
  state: {
    type: String,
    enum: ["new", "active", "review", "suspended", "disabled"],
    default: "new",
  },
  imageUrl: {
    type: String,
    default: "",
  },
  slug: {
    type: String,
  },
  ["card-collections"]: [
    {
      type: ObjectId,
      ref: "CardCollections",
    },
  ],
});

module.exports = model("Card", schema);
