const router = require("express-promise-router")();
const { checkJWTSign } = require("../middlewares/jwtCheck.middleware");
const { doc } = require("../controllers");

router.route("/:id").get(doc.get);
router.route("/").post(doc.create);
router.route("/").get(doc.getAll);
router.route("/:id").put(doc.update);
router.route("/:id").delete(doc.delete);

// router.route('/:id').get(doc.get)
// router.route('/').post(checkJWTSign, doc.create)
// router.route('/').get(doc.getAll)
// router.route('/:id').put(checkJWTSign, doc.update)
// router.route('/:id').delete(checkJWTSign, doc.delete)

module.exports = router;
