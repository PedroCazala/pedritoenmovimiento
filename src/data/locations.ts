// Datos de las clases de calistenia
export interface Schedule {
  days: string;
  time: string[];
}

export interface Location {
  id: string;
  name: string;
  schedules: Schedule[];
  description?: string;
  img: string;
}

export interface MapLocation {
  id: string;
  lat: number;
  lng: number;
  name: string;
  days: string;
  time: string;
  extraDay?: string;
  extraTime?: string;
  thirdDay?: string;
  thirdTime?: string;
}

// Datos de las clases para las cards
export const locations: Location[] = [
  {
    id: 'parque-centenario',
    name: 'Parque Centenario',
    schedules: [
      { days: 'Lunes y Miércoles', time: ['17:20 hs, A partir de Febrero'] },
      { days: 'Martes y Jueves', time: ['7:30 hs', '8:40 hs'] },
      { days: 'Viernes', time: ['8:30 hs'] }
    ],
    // description: 'Clases para todos los niveles',
    img: 'https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/parques%2Fcentenario.jpg?alt=media&token=a2568eb4-1c4d-44a2-b952-d9805644348c'
  },
  {
    id: 'unidad-latinoamericana',
    name: 'Palermo - Plaza de la unidad Latinoamericana',
    schedules: [
      { days: 'Lunes y Miércoles', time: ['20 hs, A partir de Febrero'] },
            { days: 'Viernes', time: [ '20:10 hs, A partir de Febrero'] }
    ],
    // description: 'Clases intermedias',
    img: 'https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/parques%2Funidad-latinoamericana.jpg?alt=media&token=085e7ab2-a71e-4d93-99be-48ff84ac98c2'
  },
  {
    id: 'belgrano',
    name: 'Belgrano',
    schedules: [
      { days: 'Martes y Jueves', time: ['17:20 hs, A partir de Febrero', '18:30 hs, A partir de Febrero'] },
      { days: 'Viernes', time: [ '18:00 hs, A partir de Febrero'] }
    ],
    // description: 'Clases para principiantes',
    img: 'https://firebasestorage.googleapis.com/v0/b/pedritoenmovimiento.firebasestorage.app/o/parques%2Fbelgrano.jpg?alt=media&token=943589e8-4097-47da-b29f-6325fe9c9060'
  }
];

// Función para generar datos del mapa a partir de locations
const generateMapLocations = (): MapLocation[] => {
  return locations.map(location => {
    // Convertir schedules al formato del mapa
    const primarySchedule = location.schedules[0];
    const extraSchedule = location.schedules[1];
    const thirdSchedule = location.schedules[2];
    
    return {
      id: location.id,
      lat: getCoordinates(location.id).lat,
      lng: getCoordinates(location.id).lng,
      name: location.name,
      days: primarySchedule.days,
      time: primarySchedule.time.join(' - '),
      extraDay: extraSchedule?.days,
      extraTime: extraSchedule?.time.join(' - '),
      thirdDay: thirdSchedule?.days,
      thirdTime: thirdSchedule?.time.join(' - ')
    };
  });
};

// Coordenadas de los parques
const getCoordinates = (id: string) => {
  const coords: Record<string, { lat: number; lng: number }> = {
    'parque-centenario': { lat: -34.607773, lng: -58.437417 },
    'unidad-latinoamericana': { lat: -34.592451, lng: -58.419888 },
    'belgrano': { lat: -34.56151905208442, lng: -58.443854349267774 }
  };
  return coords[id] || { lat: -34.6037, lng: -58.3816 }; // Default Buenos Aires
};

// Datos de las clases para el mapa interactivo (generados automáticamente)
export const mapLocations: MapLocation[] = generateMapLocations();
