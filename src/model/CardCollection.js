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
  imageUrl: {
    type: String,
    default: "",
  },
  slug: {
    type: String,
  },
  cards: [
    {
      type: ObjectId,
      ref: "Card",
    },
  ],
  ["card-collections"]: [
    {
      type: ObjectId,
      ref: "CardCollections",
    },
  ],
});

module.exports = model("CardCollections", schema);
