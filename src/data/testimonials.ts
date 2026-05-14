export interface Testimonial {
    id: string;
    name: string;
    text: string;
    img?: string;
    birthYear?: number | string; // Puede ser número (año) o string (fecha completa)
    startDate?: string; // formato 'YYYY-MM' o 'YYYY-MM-DD'
}

export const testimonials: Testimonial[] = [
    {
        id: "01",
        name: "Aruna",
        text: "Estoy muy feliz de haberme permitido arrancar calistenia por más que al principio pensé: “no es para mi”, noté avances desde la semana 1 y me siento muy acompañada, increíble profe😊",
        img: "https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/alumnos%2FFoto%20ARU.png?alt=media&token=41b766a6-5ddd-43b9-9bc7-aca681979514",
        birthYear: 2003,
        startDate: "2025-05",
    },
    {
        id: "02",
        name: "Lucila",
        text: "Del 1 al 10 las clases con pedrito son más que un MIL. Siempre fui una chica gym y no entendía como podía levantar mucho peso con máquinas pero a la hora de hacer una dominada o algo con mi cuerpo era imposible. Toda la paciencia y buena onda para enseñar y hacer más que un entrenamiento, sino un encuentro con lo grupal del ejercicio, el movimiento y la capacidad de superación y constancia. Además es re gracioso el tipo, hace buenos chistes. Recomiendo!!!",
        img: "https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/alumnos%2FFoto%20LUCILA.png?alt=media&token=3e7b8041-28c3-43d0-8522-3dd37518b93a",
        // birthYear: 2003,
        startDate: "2025-08",
    },
    {
        id: "03",
        name: "Rikity",
        text: "Yo creo que profes con buena técnica hay bastantes, pero la calidad de enseñanza, paciencia y confianza que brinda Pedro no es común, ese el plus de sus clases. Gracias Pedro orgulloso de lo que he logrado junto contigo. Además el grupo que se arma es gente copada como el jeje.",

        img: "https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/alumnos%2FFoto%20RIQUI.jpg?alt=media&token=7395a969-8c13-4036-a1d1-0bdcd18f98c5",
        birthYear: "1997-04-05",
        startDate: "2025-04",
    },
    {
        id: "04",
        name: "Natasha",
        text: "Pedro es un genio, tiene mucha paciencia cuando explica y al momento de hacer los ejercicios esta pendiente para poder corregirte en cada ejercicio. ❤️❤️",

        img: "https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/alumnos%2FFoto%20Natasha.jpg?alt=media&token=8b64562a-f0e5-4855-958f-f10966dee268",
        birthYear: 1988,
        startDate: "2025-06",
    },
    {
        id: "05",
        name: "Viole",
        text: "No me gusta moverme y aún así disfruto muchísimo las clases con Pedri. Tiene toda la onda y es muy meticuloso. Lo recontra recomiendo!!",

        img:"https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/alumnos%2FFoto%20Viole.png?alt=media&token=09db12e7-9ea1-4b63-8de5-38f2ec53481b",
        birthYear: "2003-11-12",
        startDate: "2025-06",
    },
    {
        id: "06",
        name: "Lili",
        text: "Arranque calistenia con mucha expectativa luego de dejar el gym que me aburria mucho. Me sorprendio gratamente notar resultados. Las clases con Pedro son geniales. Los ejercicios muy cuidados y la musica es re copada. Vamos por mas Peter!",

        img:"https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/alumnos%2FFoto%20LILI.png?alt=media&token=68dbcaba-2a86-4eb2-a037-e61c6b5e4461",
        birthYear: "1962-03-08",
        startDate: "2025-06",
    },
    {
        id: "07",
        name: "Pablo",
        text: "Me gustó esto de hacer gimnasia con mi propio peso corporal. Aprender la disciplina de ejercitar todas las partes del cuerpo. Claro que con las indicaciones de Pedro, aún es mejor, porque a medida que avanzas te va tirando los tips necesarios para mejorar y ganar fuerza. Un seguimiento constante y un trabajo en equipo con excelentes resultados.",

        img:"https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/alumnos%2FFoto%20PABLO.png?alt=media&token=1ee171d2-cf55-426f-b5cc-779a78607368",
        birthYear: 1969,
        startDate: "2025-08",
    },
    {
        id: "08",
        name: "Manu",
        text: "Después de mucho tiempo de sedentarismo, su paciencia y calidez en las clases, me ayudaron a reconectar con mi cuerpo de manera mas amable. Pasé de estar negado con la actividad física a esperar con ansias las clases y ver de que manera podía desafiarme poco a poco.",

        img:"https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/alumnos%2FFoto%20MANU.png?alt=media&token=0e8e8397-ac21-4c08-a664-0c78125128f8",
        birthYear: "2000-01-18",
        startDate: "2025-7",
    },
  
    {
        id: "09",
        name: "Tomi",
        text: "Entreno con Pedrito desde hace casi un año y la experiencia ha sido impecable. Su enfoque en la técnica y la seguridad me dio la confianza para avanzar rápido: ya logré desbloquear la back lever, flexiones a una mano y estoy perfeccionando el muscle up. Es un profesional muy tranquilo que sabe leer perfectamente cuándo estás listo para el siguiente nivel, motivándote a superarte sin arriesgar tu salud. 100% recomendado para quienes buscan resultados reales.",

        img: "https://res.cloudinary.com/dcfl47l8j/image/upload/q_auto/f_auto/v1778798797/WhatsApp_Image_2026-05-14_at_19.16.14_cfzslc.jpg",

        birthYear: "1991-13-17",
        startDate: "2025-5",
    },
  
    {
        id: "10",
        name: "Facu",
        text: "Las clases con Pedro son dinámicas, agiles y muy llevaderas. Siempre nos da algún consejo para llevar nuestra técnica un poco mas allá dependiendo del nivel de cada uno. Es muy cálido y amable así que un placer entrenar con el. ",

        img:"https://res.cloudinary.com/dcfl47l8j/image/upload/q_auto/f_auto/v1778798797/WhatsApp_Image_2026-05-14_at_19.15.54_zwboda.jpg",

        birthYear: "1982-09-07",
        startDate: "2025-6",
    },
  
   
];

// Función para calcular la edad actual
export const calcularEdad = (birthYear: number | string): number => {
    if (typeof birthYear === 'number') {
        // Si es un número, solo tiene el año
        const currentYear = new Date().getFullYear();
        return currentYear - birthYear;
    } else {
        // Si es un string, puede tener fecha completa (YYYY-MM-DD) o solo año (YYYY)
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth();
        const currentDay = new Date().getDate();
        
        if (birthYear.includes('-')) {
            // Es una fecha completa (YYYY-MM-DD)
            const [year, month, day] = birthYear.split("-").map(Number);
            let age = currentYear - year;
            
            // Ajustar si aún no ha cumplido años este año
            if (currentMonth < month - 1 || (currentMonth === month - 1 && currentDay < day)) {
                age--;
            }
            
            return age;
        } else {
            // Es solo el año como string
            return currentYear - parseInt(birthYear);
        }
    }
};

// Función para calcular el tiempo que lleva como alumno
export const calcularTiempoAlumno = (startDate: string): string => {
    const [year, month] = startDate.split("-").map(Number);
    const start = new Date(year, month - 1);
    const currentDate = new Date();

    const monthsDiff =
        (currentDate.getFullYear() - start.getFullYear()) * 12 +
        (currentDate.getMonth() - start.getMonth());

    if (monthsDiff < 1) {
        return "menos de 1 mes";
    } else if (monthsDiff === 1) {
        return "1 mes";
    } else if (monthsDiff < 12) {
        return `${monthsDiff} meses`;
    } else {
        const years = Math.floor(monthsDiff / 12);
        const remainingMonths = monthsDiff % 12;

        if (remainingMonths === 0) {
            return years === 1 ? "1 año" : `${years} años`;
        } else {
            return years === 1
                ? `1 año y ${remainingMonths} meses`
                : `${years} años y ${remainingMonths} meses`;
        }
    }
};
