// backend/routes/api/index.js
const express = require("express");
const router = require("express").Router();
const sessionRouter = require("./session");
const usersRouter = require("./users");
const { restoreUser } = require("../../utils/auth");

router.use(restoreUser);

router.use("/session", sessionRouter);

router.use("/users", usersRouter);

module.exports = router;
