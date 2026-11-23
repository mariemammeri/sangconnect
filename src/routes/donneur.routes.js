
import express from "express";

import {
    getAll,
    getById,
    create,
    update,
    patch,
    remove
} from "../controllers/donneur.controller.js";

const router = express.Router();

// GET
router.get("/", getAll);
router.get("/:id", getById);

// POST
router.post("/", create);

// PUT
router.put("/:id", update);

// PATCH
router.patch("/:id", patch);

// DELETE
router.delete("/:id", remove);

export default router;
