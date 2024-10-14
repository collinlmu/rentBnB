// backend/routes/api/index.js
const router = require("express").Router();
const sessionRouter = require("./session");
const usersRouter = require("./users");
const { restoreUser } = require("../../utils/auth");

router.use(restoreUser);

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

// Keep this route to test frontend setup in Mod 5
router.post("/test", function (req, res) {
    res.json({ requestBody: req.body });
});

module.exports = router;
