import { locations } from './locations';

export interface Schedule {
    id: string;
    day: string;
    time: string;
    location: string;
    level?: string;
    active: boolean;
}

// Función para convertir locations a schedules
export const generateSchedulesFromLocations = (): Schedule[] => {
    const schedules: Schedule[] = [];
    let idCounter = 1;

    locations.forEach(location => {
        location.schedules.forEach(schedule => {
            // Parsear días y tiempos
            const days = schedule.days.split(' y ');
            const times = schedule.time;
            
            days.forEach(day => {
                times.forEach(time => {
                    schedules.push({
                        id: idCounter.toString(),
                        day: day,
                        time: time,
                        location: location.name,
                        active: !time.includes('A partir de Febrero')
                    });
                    idCounter++;
                });
            });
        });
    });

    return schedules;
};


// Generar schedules a partir de locations
export const schedules = generateSchedulesFromLocations();

// Función para agrupar horarios por día
export const getSchedulesByDay = () => {
    const grouped: { [key: string]: Schedule[] } = {};
    
    schedules.forEach(schedule => {
        if (!grouped[schedule.day]) {
            grouped[schedule.day] = [];
        }
        grouped[schedule.day].push(schedule);
    });
    
    // Ordenar días de la semana
    const daysOrder = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
    const orderedGrouped: { [key: string]: Schedule[] } = {};
    
    daysOrder.forEach(day => {
        if (grouped[day]) {
            orderedGrouped[day] = grouped[day];
        }
    });
    
    return orderedGrouped;
};
