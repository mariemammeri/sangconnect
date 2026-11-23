
import express from "express";

import {
    getAll,
    getById,
    create,
    update,
    patch,
    remove
} from "../controllers/centre.controller.js";

const router = express.Router();

router.get("/", getAll);
router.get("/:id", getById);

router.post("/", create);

router.put("/:id", update);

router.patch("/:id", patch);

router.delete("/:id", remove);

export default router;
