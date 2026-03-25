import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  try {
    const viajes = await prisma.viajeSonoro.findMany({
      where: { publicado: true },
      orderBy: { createdAt: "desc" }
    });

    res.json(viajes);
  } catch (error) {
    console.error("Error obteniendo viajes sonoros:", error);
    res.status(500).json({ error: "Error al obtener viajes sonoros" });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;

    const viaje = await prisma.viajeSonoro.findUnique({
      where: { slug }
    });

    if (!viaje) {
      return res.status(404).json({ error: "Viaje sonoro no encontrado" });
    }

    res.json(viaje);
  } catch (error) {
    console.error("Error obteniendo viaje sonoro:", error);
    res.status(500).json({ error: "Error al obtener el viaje sonoro" });
  }
});

export default router;