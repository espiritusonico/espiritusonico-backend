import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.producto.upsert({
    where: { slug: "salvia-benjui-palo-santo" },
    update: {
      nombre: "Sahumerio",
      tipo: "Sahumerio artesanal",
      mezcla: "Salvia, Benjuí y Palo Santo",
      descripcionCorta:
        "Una combinación orientada a despejar, limpiar y renovar la atmósfera interior y del espacio.",
      descripcionLarga:
        "Elaborado con resinas molidas a mano y hierbas seleccionadas. Este sahumerio reúne la fuerza despejadora de la salvia, la profundidad resinosa del benjuí y la presencia noble del palo santo en una fórmula pensada para acompañar limpiezas, aperturas y momentos donde algo necesita correrse para que vuelva la claridad. Su perfume no busca invadir: trabaja como una presencia que ordena, depura y deja respirando el ambiente.",
      precio: 0,
      imagenUrl: "/productos/sahumerio-salvia.png",
      activo: true,
      destacado: true,
      orden: 1,
      beneficiosDestacados: [
        "Despeja la atmósfera",
        "Acompaña limpiezas energéticas",
        "Favorece claridad y renovación"
      ],
      propiedadesCombinacion: [
        {
          titulo: "Salvia",
          descripcion:
            "Trabaja sobre la limpieza del ambiente y la sensación de despeje. Su presencia ayuda a correr densidad y abrir espacio."
        },
        {
          titulo: "Benjuí",
          descripcion:
            "Aporta una base resinosa, cálida y envolvente. Sostiene la experiencia y aporta profundidad aromática."
        },
        {
          titulo: "Palo Santo",
          descripcion:
            "Introduce una nota noble, serena y centradora. Favorece una atmósfera de presencia, orden y calma."
        },
        {
          titulo: "La combinación",
          descripcion:
            "Juntas, estas tres materias componen una experiencia de limpieza y reorganización. No solo despejan: también ayudan a establecer un clima nuevo, más claro y más habitable."
        }
      ],
      recomendacionesRituales: [
        "Encenderlo antes de iniciar una práctica de meditación, escritura, descanso o escucha interna.",
        "Usarlo al final del día para limpiar el ambiente de la carga acumulada y dar cierre a lo vivido."
      ],
      viajeSonoroTitulo: "Niebla Sagrada",
      viajeSonoroSlug: "niebla-sagrada",
      viajeSonoroTexto:
        "Este sahumerio encuentra una afinidad natural con Niebla Sagrada, un viaje sonoro orientado a despejar, mover densidad y renovar el campo perceptivo."
    },
    create: {
      nombre: "Sahumerio",
      slug: "salvia-benjui-palo-santo",
      tipo: "Sahumerio artesanal",
      mezcla: "Salvia, Benjuí y Palo Santo",
      descripcionCorta:
        "Una combinación orientada a despejar, limpiar y renovar la atmósfera interior y del espacio.",
      descripcionLarga:
        "Elaborado con resinas molidas a mano y hierbas seleccionadas. Este sahumerio reúne la fuerza despejadora de la salvia, la profundidad resinosa del benjuí y la presencia noble del palo santo en una fórmula pensada para acompañar limpiezas, aperturas y momentos donde algo necesita correrse para que vuelva la claridad. Su perfume no busca invadir: trabaja como una presencia que ordena, depura y deja respirando el ambiente.",
      precio: 0,
      imagenUrl: "/productos/sahumerio-salvia.png",
      activo: true,
      destacado: true,
      orden: 1,
      beneficiosDestacados: [
        "Despeja la atmósfera",
        "Acompaña limpiezas energéticas",
        "Favorece claridad y renovación"
      ],
      propiedadesCombinacion: [
        {
          titulo: "Salvia",
          descripcion:
            "Trabaja sobre la limpieza del ambiente y la sensación de despeje. Su presencia ayuda a correr densidad y abrir espacio."
        },
        {
          titulo: "Benjuí",
          descripcion:
            "Aporta una base resinosa, cálida y envolvente. Sostiene la experiencia y aporta profundidad aromática."
        },
        {
          titulo: "Palo Santo",
          descripcion:
            "Introduce una nota noble, serena y centradora. Favorece una atmósfera de presencia, orden y calma."
        },
        {
          titulo: "La combinación",
          descripcion:
            "Juntas, estas tres materias componen una experiencia de limpieza y reorganización. No solo despejan: también ayudan a establecer un clima nuevo, más claro y más habitable."
        }
      ],
      recomendacionesRituales: [
        "Encenderlo antes de iniciar una práctica de meditación, escritura, descanso o escucha interna.",
        "Usarlo al final del día para limpiar el ambiente de la carga acumulada y dar cierre a lo vivido."
      ],
      viajeSonoroTitulo: "Niebla Sagrada",
      viajeSonoroSlug: "niebla-sagrada",
      viajeSonoroTexto:
        "Este sahumerio encuentra una afinidad natural con Niebla Sagrada, un viaje sonoro orientado a despejar, mover densidad y renovar el campo perceptivo."
    }
  });

  await prisma.producto.upsert({
    where: { slug: "sandalo-rojo-lavanda-eucaliptus-menta" },
    update: {
      nombre: "Sahumerio",
      tipo: "Sahumerio artesanal",
      mezcla: "Sándalo Rojo, Lavanda, Eucaliptus y Menta",
      descripcionCorta:
        "Una combinación pensada para aquietar, refrescar la percepción y acompañar descanso, calma y regulación.",
      descripcionLarga:
        "Elaborado con resinas molidas a mano y hierbas seleccionadas. Esta fórmula une la profundidad cálida del sándalo rojo con la suavidad de la lavanda, la frescura despejadora del eucaliptus y el impulso liviano de la menta. El resultado es un sahumerio de presencia serena, ideal para bajar intensidad, aflojar la mente y crear un ambiente favorable para el descanso, la respiración y el recogimiento.",
      precio: 0,
      imagenUrl: "/productos/sahumerio-lavanda.png",
      activo: true,
      destacado: true,
      orden: 2,
      beneficiosDestacados: [
        "Favorece calma y descanso",
        "Acompaña momentos de ansiedad",
        "Refresca y suaviza la atmósfera"
      ],
      propiedadesCombinacion: [
        {
          titulo: "Sándalo Rojo",
          descripcion:
            "Aporta una base cálida, estable y contemplativa. Da cuerpo a la mezcla y sostiene su profundidad."
        },
        {
          titulo: "Lavanda",
          descripcion:
            "Introduce una cualidad suave, apaciguadora y reguladora. Favorece relajación y descenso del ritmo interno."
        },
        {
          titulo: "Eucaliptus",
          descripcion:
            "Abre la respiración perceptiva y despeja. Su presencia da sensación de claridad y renovación."
        },
        {
          titulo: "Menta",
          descripcion:
            "Suma frescura y una ligereza que evita que la mezcla se vuelva pesada. Ayuda a airear la experiencia."
        },
        {
          titulo: "La combinación",
          descripcion:
            "En conjunto, estas materias componen una atmósfera de calma fresca y contención. No solo acompañan el descanso: también ayudan a bajar la fricción interna y preparar el cuerpo para estados de mayor reposo."
        }
      ],
      recomendacionesRituales: [
        "Ideal para encender al final del día, antes de dormir o al entrar en una práctica de quietud.",
        "Puede acompañar respiración suave, lectura contemplativa o una escucha interna sin esfuerzo."
      ],
      viajeSonoroTitulo: "Silencio Estelar",
      viajeSonoroSlug: "silencio-estelar",
      viajeSonoroTexto:
        "Esta combinación dialoga de forma natural con Silencio Estelar, un viaje sonoro orientado al descanso, la quietud y la disminución progresiva de la actividad mental."
    },
    create: {
      nombre: "Sahumerio",
      slug: "sandalo-rojo-lavanda-eucaliptus-menta",
      tipo: "Sahumerio artesanal",
      mezcla: "Sándalo Rojo, Lavanda, Eucaliptus y Menta",
      descripcionCorta:
        "Una combinación pensada para aquietar, refrescar la percepción y acompañar descanso, calma y regulación.",
      descripcionLarga:
        "Elaborado con resinas molidas a mano y hierbas seleccionadas. Esta fórmula une la profundidad cálida del sándalo rojo con la suavidad de la lavanda, la frescura despejadora del eucaliptus y el impulso liviano de la menta. El resultado es un sahumerio de presencia serena, ideal para bajar intensidad, aflojar la mente y crear un ambiente favorable para el descanso, la respiración y el recogimiento.",
      precio: 0,
      imagenUrl: "/productos/sahumerio-lavanda.png",
      activo: true,
      destacado: true,
      orden: 2,
      beneficiosDestacados: [
        "Favorece calma y descanso",
        "Acompaña momentos de ansiedad",
        "Refresca y suaviza la atmósfera"
      ],
      propiedadesCombinacion: [
        {
          titulo: "Sándalo Rojo",
          descripcion:
            "Aporta una base cálida, estable y contemplativa. Da cuerpo a la mezcla y sostiene su profundidad."
        },
        {
          titulo: "Lavanda",
          descripcion:
            "Introduce una cualidad suave, apaciguadora y reguladora. Favorece relajación y descenso del ritmo interno."
        },
        {
          titulo: "Eucaliptus",
          descripcion:
            "Abre la respiración perceptiva y despeja. Su presencia da sensación de claridad y renovación."
        },
        {
          titulo: "Menta",
          descripcion:
            "Suma frescura y una ligereza que evita que la mezcla se vuelva pesada. Ayuda a airear la experiencia."
        },
        {
          titulo: "La combinación",
          descripcion:
            "En conjunto, estas materias componen una atmósfera de calma fresca y contención. No solo acompañan el descanso: también ayudan a bajar la fricción interna y preparar el cuerpo para estados de mayor reposo."
        }
      ],
      recomendacionesRituales: [
        "Ideal para encender al final del día, antes de dormir o al entrar en una práctica de quietud.",
        "Puede acompañar respiración suave, lectura contemplativa o una escucha interna sin esfuerzo."
      ],
      viajeSonoroTitulo: "Silencio Estelar",
      viajeSonoroSlug: "silencio-estelar",
      viajeSonoroTexto:
        "Esta combinación dialoga de forma natural con Silencio Estelar, un viaje sonoro orientado al descanso, la quietud y la disminución progresiva de la actividad mental."
    }
  });

  console.log("Productos cargados o actualizados correctamente.");
}

main()
  .catch((e) => {
    console.error("Error cargando productos:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });