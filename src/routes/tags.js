const router = require("express-promise-router")();

const { tag } = require("../controllers");

router.route("/:id").get(tag.get);
router.route("/").post(tag.create);
router.route("/").get(tag.getAll);
router.route("/:id").put(tag.update);
router.route("/:id").delete(tag.delete);

module.exports = router;
