// backend/routes/index.js
const express = require("express");
const router = express.Router();
const apiRouter = require("./api");
const { User } = require("../db/models");

router.use("/api", apiRouter);

// Add a XSRF-TOKEN cookie
router.get("/api/csrf/restore", (req, res) => {
    const csrfToken = req.csrfToken();
    res.cookie("XSRF-TOKEN", csrfToken);
    res.status(200).json({
        "XSRF-Token": csrfToken,
    });
});

// Get / api / set - token - cookie;
router.get("/set-token-cookie", async (_req, res) => {
    const user = await User.findOne({
        where: {
            username: "Demo-lition",
        },
    });
    setTokenCookie(res, user);
    return res.json({ user: user });
});

module.exports = router;
