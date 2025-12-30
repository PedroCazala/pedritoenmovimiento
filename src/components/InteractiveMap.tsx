"use client";

import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useRef } from "react";
import { mapLocations, locations as locationData } from "../data/locations";

interface MapComponentProps {
    onLocationSelect?: (locationId: string) => void;
}

const render = (status: Status) => {
    return <h1>{status}</h1>;
};

const MapComponent = ({ onLocationSelect }: MapComponentProps) => {
    // Guardar referencia al mapa y marcadores para poder abrir info windows externamente
    const mapRef = useRef<HTMLDivElement>(null);
    const markersRef = useRef<{ [key: string]: google.maps.Marker }>({});
    const infoWindowsRef = useRef<{ [key: string]: google.maps.InfoWindow }>(
        {}
    );
    const activeInfoWindowRef = useRef<google.maps.InfoWindow | null>(null);
    const onLocationSelectRef = useRef(onLocationSelect);

    // Actualizar ref cuando cambia la prop
    useEffect(() => {
        onLocationSelectRef.current = onLocationSelect;
    }, [onLocationSelect]);

    // Exponer función global para abrir info window desde fuera
    useEffect(() => {
        (window as any).openMapInfoWindow = (locationId: string) => {
            const infoWindow = infoWindowsRef.current[locationId];
            const marker = markersRef.current[locationId];
            const mapInstance = (window as any).mapInstance;

            if (infoWindow && marker && mapInstance) {
                // Cerrar info window anterior si existe
                if (activeInfoWindowRef.current) {
                    activeInfoWindowRef.current.close();
                }

                infoWindow.open(mapInstance, marker);
                activeInfoWindowRef.current = infoWindow;

                // Actualizar estilos de marcadores
                Object.keys(markersRef.current).forEach((id) => {
                    const markerToUpdate = markersRef.current[id];
                    const isSelected = id === locationId;
                    markerToUpdate.setIcon({
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: isSelected ? 10 : 8,
                        fillColor: isSelected ? "#ff6b00" : "#ff5500",
                        fillOpacity: 1,
                        strokeColor: "#ffffff",
                        strokeWeight: isSelected ? 3 : 2,
                    });
                });

                // Llamar al callback original
                if (onLocationSelectRef.current) {
                    onLocationSelectRef.current(locationId);
                }
            }
        };
    }, []);

    useEffect(() => {
        if (!mapRef.current) return;

        // Marcadores de las clases con coordenadas reales
        const locations = mapLocations;

        // Calcular el centro y bounds automáticos
        const bounds = new google.maps.LatLngBounds();
        locations.forEach((location) => {
            bounds.extend({ lat: location.lat, lng: location.lng });
        });

        const map = new google.maps.Map(mapRef.current, {
            center: bounds.getCenter(), // Centro automático de todos los puntos
            zoom: 4, // Zoom más cercano
            styles: [
                {
                    featureType: "poi",
                    elementType: "labels",
                    stylers: [{ visibility: "off" }],
                },
            ],
        });

        // Ajustar el mapa para mostrar todos los marcadores
        map.fitBounds(bounds);

        // Ajustar zoom para que no esté demasiado lejos
        setTimeout(() => {
            const currentZoom = map.getZoom();
            if (currentZoom && currentZoom > 15) {
                map.setZoom(15);
            } else if (currentZoom && currentZoom < 12) {
                map.setZoom(13);
            }
        }, 100);

        // Guardar instancia del mapa globalmente para acceso externo
        (window as any).mapInstance = map;

        locations.forEach((location) => {
            // Obtener datos de la location incluyendo imagen
            const locationInfo = locationData.find(
                (loc) => loc.id === location.id
            );
            const imageUrl = locationInfo?.img || "/images/parques/default.jpg";

            // Info window con detalles
            const infoContent = location.thirdDay
                ? `
        <div style="padding: 10px; min-width: 250px;">
       
          <h3 style="margin: 0 0 10px 0; color: #ff5500; font-size: 16px;">${
              location.name
          }</h3>
          <div style="margin-bottom: 8px;">
            <strong>${location.days}</strong><br>
            ${location.time}
          </div>
          <div style="margin-bottom: 8px;">
            <strong>${location.extraDay}</strong><br>
            ${location.extraTime}
          </div>
          <div style="margin-bottom: 8px;">
            <strong>${location.thirdDay}</strong><br>
            ${location.thirdTime}
          </div>
          <button 
            onclick="window.open('https://wa.me/${
                process.env.NEXT_PUBLIC_WHATSAPP_PHONE
            }?text=Hola%20Pedrito,%20quiero%20sumarme%20a%20la%20clase%20de%20${encodeURIComponent(
                      location.name
                  )}', '_blank'); this.style.background='#ff5500'; this.style.color='white';"
            onmouseover="this.style.background='white'; this.style.color='#ff5500'; this.style.border='2px solid #ff5500';"
            onmouseout="this.style.background='#ff5500'; this.style.color='white'; this.style.border='none';"
            style="background: #ff5500; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; font-weight: bold; width: 100%; transition: all 0.3s ease;"
          >
            Sumarme acá
          </button>
        </div>
      `
                : location.extraDay
                ? `
        <div style="padding: 10px; min-width: 250px;">
       
          <h3 style="margin: 0 0 10px 0; color: #ff5500; font-size: 16px;">${
              location.name
          }</h3>
          <div style="margin-bottom: 8px;">
            <strong>${location.days}</strong><br>
            ${location.time}
          </div>
          <div style="margin-bottom: 8px;">
            <strong>${location.extraDay}</strong><br>
            ${location.extraTime}
          </div>
          <button 
            onclick="window.open('https://wa.me/${
                process.env.NEXT_PUBLIC_WHATSAPP_PHONE
            }?text=Hola%20Pedrito,%20quiero%20sumarme%20a%20la%20clase%20de%20${encodeURIComponent(
                      location.name
                  )}', '_blank'); this.style.background='#ff5500'; this.style.color='white';"
            onmouseover="this.style.background='white'; this.style.color='#ff5500'; this.style.border='2px solid #ff5500';"
            onmouseout="this.style.background='#ff5500'; this.style.color='white'; this.style.border='none';"
            style="background: #ff5500; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; font-weight: bold; width: 100%; transition: all 0.3s ease;"
          >
            Sumarme acá
          </button>
        </div>
      `
                : `
        <div style="padding: 10px; min-width: 250px;">
       
          <h3 style="margin: 0 0 10px 0; color: #ff5500; font-size: 16px;">${
              location.name
          }</h3>
          <div style="margin-bottom: 10px;">
            <strong>${location.days}</strong><br>
            ${location.time}
          </div>
          <button 
            onclick="window.open('https://wa.me/${
                process.env.NEXT_PUBLIC_WHATSAPP_PHONE
            }?text=Hola%20Pedrito,%20quiero%20sumarme%20a%20la%20clase%20de%20${encodeURIComponent(
                      location.name
                  )}', '_blank'); this.style.background='#ff5500'; this.style.color='white';"
            onmouseover="this.style.background='white'; this.style.color='#ff5500'; this.style.border='2px solid #ff5500';"
            onmouseout="this.style.background='#ff5500'; this.style.color='white'; this.style.border='none';"
            style="background: #ff5500; color: white; border: none; padding: 8px 12px; border-radius: 4px; cursor: pointer; font-weight: bold; width: 100%; transition: all 0.3s ease;"
          >
            Sumarme acá
          </button>
        </div>
      `;

            const infoWindow = new google.maps.InfoWindow({
                content: infoContent,
            });

            const marker = new google.maps.Marker({
                position: { lat: location.lat, lng: location.lng },
                map: map,
                title: location.name,
                icon: {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 8,
                    fillColor: "#ff5500",
                    fillOpacity: 1,
                    strokeColor: "#ffffff",
                    strokeWeight: 2,
                },
            });

            // Guardar referencia al marcador y info window
            markersRef.current[location.id] = marker;
            infoWindowsRef.current[location.id] = infoWindow;

            marker.addListener("click", () => {
                // Cerrar info window anterior si existe
                if (activeInfoWindowRef.current) {
                    activeInfoWindowRef.current.close();
                }

                infoWindow.open(map, marker);
                activeInfoWindowRef.current = infoWindow;

                // Seleccionar la card correspondiente
                if (onLocationSelect) {
                    onLocationSelect(location.id);
                }

                // Actualizar estilos de todos los marcadores
                Object.keys(markersRef.current).forEach((id) => {
                    const markerToUpdate = markersRef.current[id];
                    const isSelected = id === location.id;
                    markerToUpdate.setIcon({
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: isSelected ? 10 : 8,
                        fillColor: isSelected ? "#ff6b00" : "#ff5500",
                        fillOpacity: 1,
                        strokeColor: "#ffffff",
                        strokeWeight: isSelected ? 3 : 2,
                    });
                });
            });
        });
    }, [onLocationSelect]);

    return (
        <div
            ref={mapRef}
            style={{ width: "100%", height: "400px", borderRadius: "12px" }}
        />
    );
};

interface InteractiveMapProps {
    onLocationSelect?: (locationId: string) => void;
}

const InteractiveMap = ({ onLocationSelect }: InteractiveMapProps) => {
    return (
        <Wrapper
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
            render={render}
            libraries={["places"]}
        >
            <MapComponent onLocationSelect={onLocationSelect} />
        </Wrapper>
    );
};

export default InteractiveMap;
