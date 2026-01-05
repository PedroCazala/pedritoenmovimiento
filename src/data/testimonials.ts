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
    // Agrega 5  testimonios aquí sin img

    // {
    //     id: "03",
    //     name: "Nombre3",
    //     text: "Texto de prueba 3",
    //     startDate: "2025-01",
    // },
    // {
    //     id: "04",
    //     name: "Nombre4",
    //     text: "Texto de prueba 4",
    //     startDate: "2025-02",
    // },
    // {
    //     id: "05",
    //     name: "Nombre5",
    //     text: "Texto de prueba 5",
    //     startDate: "2025-03",
    // },
    // {
    //     id: "06",
    //     name: "Nombre6",
    //     text: "Texto de prueba 6",
    //     startDate: "2025-04",
    // },
    // {
    //     id: "07",
    //     name: "Nombre7",
    //     text: "Texto de prueba 7",
    //     startDate: "2025-05",
    // },
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
