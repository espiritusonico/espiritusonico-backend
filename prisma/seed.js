import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.producto.deleteMany();
  await prisma.viajeSonoro.deleteMany();

  await prisma.viajeSonoro.createMany({
    data: [
      {
        titulo: "Silencio Estelar",
        slug: "silencio-estelar",
        descripcion:
          "Una arquitectura sonora orientada a reducir fricción interna, desacelerar el pensamiento y abrir un espacio real de descanso.",
        audioUrl: "https://res.cloudinary.com/djyninthh/video/upload/v1774382546/Silencio_estelar_orsszz.mp3",
        imagenUrl: null,
        duracion: "20 min",
        publicado: true,
        destacado: true,
        categoria: "descanso",
      },
      {
        titulo: "Niebla Sagrada",
        slug: "niebla-sagrada",
        descripcion:
          "Un recorrido sonoro orientado a despejar carga, mover densidad y abrir un campo más limpio y disponible.",
        audioUrl: "https://res.cloudinary.com/djyninthh/video/upload/v1774382691/Niebla_sagrada_zhd87q.mp3",
        imagenUrl: null,
        duracion: "20 min",
        publicado: true,
        destacado: true,
        categoria: "limpieza",
      },
    ],
  });

  await prisma.producto.createMany({
    data: [
      {
        nombre: "Sahumerio artesanal",
        slug: "lavanda-eucaliptus-menta",
        tipo: "Sahumerio artesanal",
        mezcla: "Lavanda, Eucaliptus y Menta",
        descripcionCorta:
          "Una combinación fresca y herbal pensada para limpiar, abrir y devolver ligereza al espacio.",
        descripcionLarga:
          "Elaborado con resinas molidas a mano y hierbas seleccionadas. Esta mezcla reúne lavanda, eucaliptus y menta para generar una presencia clara, respirable y revitalizante, ideal para momentos de apertura, enfoque y limpieza suave.",
        precio: 12000,
        imagenUrl: "null",
        activo: true,
        destacado: true,
        orden: 1,
        beneficiosDestacados: [
          "Aporta claridad al ambiente",
          "Favorece una sensación de frescura y ligereza",
          "Acompaña limpiezas suaves y aperturas del día",
        ],
        propiedadesCombinacion: [
          {
            titulo: "Lavanda",
            texto:
              "Aporta calma, suavidad y una sensación de cobijo sutil que ayuda a relajar el campo interno.",
          },
          {
            titulo: "Eucaliptus",
            texto:
              "Despeja, refresca y abre la percepción, generando una impresión de limpieza aérea y renovación.",
          },
          {
            titulo: "Menta",
            texto:
              "Introduce vitalidad, claridad y una nota estimulante que ayuda a cortar la pesadez ambiental.",
          },
          {
            titulo: "La combinación",
            texto:
              "El resultado es una alquimia fresca y armonizadora, ideal para limpiar, revitalizar y devolver ligereza al espacio.",
          },
        ],
        recomendacionesRituales: [
          {
            titulo: "Apertura del día",
            texto:
              "Encenderlo por la mañana y dejar que el humo recorra el espacio antes de comenzar una actividad importante.",
          },
          {
            titulo: "Limpieza previa a una práctica",
            texto:
              "Puede usarse antes de meditar, escribir o escuchar un viaje sonoro para renovar la atmósfera.",
          },
        ],
        viajeSonoroTitulo: "Silencio Estelar",
        viajeSonoroSlug: "silencio-estelar",
        viajeSonoroTexto:
          "Una escucha diseñada para profundizar la sensación de descanso, apertura y regulación interna.",
      },
      {
        nombre: "Sahumerio artesanal",
        slug: "salvia-benjui-palo-santo",
        tipo: "Sahumerio artesanal",
        mezcla: "Salvia, Benjuí y Palo Santo",
        descripcionCorta:
          "Una combinación profunda y ceremonial pensada para limpiar, proteger y devolver centro.",
        descripcionLarga:
          "Elaborado con resinas molidas a mano y hierbas seleccionadas. Esta mezcla reúne salvia, benjuí y palo santo para acompañar limpiezas profundas, cierres y momentos de recogimiento ritual.",
        precio: 12000,
        imagenUrl: "null",
        activo: true,
        destacado: true,
        orden: 2,
        beneficiosDestacados: [
          "Favorece limpiezas profundas",
          "Aporta sensación de protección",
          "Acompaña cierres y momentos rituales",
        ],
        propiedadesCombinacion: [
          {
            titulo: "Salvia",
            texto:
              "Aporta limpieza, depuración y una acción clara sobre ambientes cargados o momentos de transición.",
          },
          {
            titulo: "Benjuí",
            texto:
              "Introduce una cualidad protectora, cálida y resinosa que envuelve el espacio con mayor densidad simbólica.",
          },
          {
            titulo: "Palo Santo",
            texto:
              "Ordena, armoniza y suaviza la intensidad de la mezcla, dejando una sensación de eje y profundidad.",
          },
          {
            titulo: "La combinación",
            texto:
              "El resultado es una alquimia protectora y transformadora, ideal para limpiar en profundidad y devolver centro al espacio.",
          },
        ],
        recomendacionesRituales: [
          {
            titulo: "Cierre de ciclo",
            texto:
              "Encenderlo al terminar una etapa o al cerrar una jornada intensa para favorecer recogimiento y limpieza.",
          },
          {
            titulo: "Protección del ambiente",
            texto:
              "Puede acompañar momentos donde hace falta delimitar un espacio interno o renovar la atmósfera.",
          },
        ],
        viajeSonoroTitulo: "Niebla Sagrada",
        viajeSonoroSlug: "niebla-sagrada",
        viajeSonoroTexto:
          "Una escucha orientada a despejar carga, mover densidad y abrir una sensación de renovación.",
      },
    ],
  });

  console.log("Seed completado");
}

main()
  .catch((e) => {
    console.error("Error en seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });