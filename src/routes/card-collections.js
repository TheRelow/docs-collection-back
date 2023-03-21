const router = require("express-promise-router")();

const { cardCollection } = require("../controllers");

router.route("/:id").get(cardCollection.get);
router.route("/").post(cardCollection.create);
router.route("/").get(cardCollection.getAll);
router.route("/:id").put(cardCollection.update);
router.route("/:id").delete(cardCollection.delete);

module.exports = router;
