const router = require("express-promise-router")();
const { checkJWTSign } = require("../middlewares/jwtCheck.middleware");
const { card } = require("../controllers");

router.route("/:id").get(card.get);
router.route("/").post(card.create);
router.route("/").get(card.getAll);
router.route("/:id").put(card.update);
router.route("/:id").delete(card.delete);

// router.route('/:id').get(card.get)
// router.route('/').post(checkJWTSign, card.create)
// router.route('/').get(card.getAll)
// router.route('/:id').put(checkJWTSign, card.update)
// router.route('/:id').delete(checkJWTSign, card.delete)

module.exports = router;
