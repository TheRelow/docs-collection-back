const router = require("express-promise-router")();
const { checkJWTSign } = require("../middlewares/jwtCheck.middleware");
const { folder } = require("../controllers");

router.route("/:id").get(folder.get);
router.route("/").post(folder.create);
router.route("/").get(folder.getAll);
router.route("/:id").put(folder.update);
router.route("/:id").delete(folder.delete);

// router.route('/:id').get(folder.get)
// router.route('/').post(checkJWTSign, folder.create)
// router.route('/').get(folder.getAll)
// router.route('/:id').put(checkJWTSign, folder.update)
// router.route('/:id').delete(checkJWTSign, folder.delete)

module.exports = router;
