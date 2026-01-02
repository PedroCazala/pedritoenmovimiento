export interface Testimonial {
    id: string;
    name: string;
    text: string;
    img?: string;
    birthYear?: number;
    startDate?: string; // formato 'YYYY-MM' o 'YYYY-MM-DD'
}

export const testimonials: Testimonial[] = [
    {
        id: "01",
        name: "Aruna",
        text: "Estoy muy feliz de haberme permitido arrancar calistenia por más que al principio piense que “no es para mi”, noté avances desde la semana 1 y me siento muy acompañada, increíble profe😊",
        img: "https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/alumnos%2FFoto%20ARU.png?alt=media&token=41b766a6-5ddd-43b9-9bc7-aca681979514",
        birthYear: 2003,
        startDate: "2025-05",
    },
    {
        id: "02",
        name: "Lucila",
        text: "Del 1 al 10 las clases con pedrito son más que un MIL. Siempre fui una chica gym y no entendía como podía levantar mucho peso con máquinas pero a la hora de hacer una dominada o algo con mi cuerpo era imposible. Toda la paciencia y buena onda para enseñar y hacer más que un entrenamiento, sino un encuentro con lo grupal del ejercicio, el movimiento y la capacidad de superación y constancia. Además es re gracioso el tipo, hace buenos chistes. Recomiendo!!!",
        img:"https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/alumnos%2FFoto%20LUCILA.png?alt=media&token=3e7b8041-28c3-43d0-8522-3dd37518b93a",
        // birthYear: 2003,
        startDate: "2025-08",
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
export const calcularEdad = (birthYear: number): number => {
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
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
