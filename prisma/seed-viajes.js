import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.viajeSonoro.upsert({
    where: { slug: "silencio-estelar" },
    update: {
      titulo: "Silencio Estelar",
      descripcion: "Un viaje sonoro diseñado para llevar al cuerpo hacia un estado profundo de descanso y quietud. A través de capas sutiles de sonido, pulsos lentos y espacios amplios, esta experiencia invita a soltar la actividad mental y permitir que el sistema nervioso entre en reposo. Ideal para cerrar el día, acompañar el sueño o atravesar momentos de ansiedad desde un lugar contenido y progresivo.",
      audioUrl: "https://res.cloudinary.com/djyninthh/video/upload/v1774382546/Silencio_estelar_orsszz.mp3",
      imagenUrl: null,
      duracion: "20 min",
      categoria: "descanso",
      publicado: true,
      destacado: true
    }
  });

  await prisma.viajeSonoro.upsert({
    where: { slug: "niebla-sagrada" },
    update: {
      titulo: "Niebla Sagrada",
      descripcion: "Una experiencia sonora orientada a la limpieza y renovación del campo energético. Este viaje propone un recorrido envolvente donde las capas de sonido actúan como una niebla en movimiento, despejando tensiones, cargas acumuladas y residuos del día. Ideal para momentos de transición, después de jornadas intensas o antes de iniciar un espacio personal o ritual.",
      audioUrl: "https://res.cloudinary.com/djyninthh/video/upload/v1774382691/Niebla_sagrada_zhd87q.mp3",
      imagenUrl: null,
      duracion: "20 min",
      categoria: "limpieza",
      publicado: true,
      destacado: true
    }
  });

  console.log("Viajes sonoros cargados o actualizados correctamente.");
}

main()
  .catch((e) => {
    console.error("Error cargando viajes:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });