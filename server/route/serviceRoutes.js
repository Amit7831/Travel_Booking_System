const express = require("express");
const { AddService, GetService, UpdateService, DeleteService } = require("../controller/serviceController");
const { route } = require("./contactRoutes");


const router = express.Router();



router.post("/add", AddService);
router.get("/get", GetService);
router.put("/update/:id", UpdateService);
router.delete("/delete/:id", DeleteService);

module.exports = router;