import express from "express";
import producto from "../controllers/producto.js";

const router = express.Router()

router.post("/registerProducto", producto.registerProducto);

export default router