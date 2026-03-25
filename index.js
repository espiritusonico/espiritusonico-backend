import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productosRouter from './routes/productos.js';
import viajesSonorosRouter from "./routes/viajesSonoros.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/productos', productosRouter);

app.use("/viajes-sonoros", viajesSonorosRouter);

app.get('/', (req, res) => {
  res.send('Espíritu Sónico API funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});