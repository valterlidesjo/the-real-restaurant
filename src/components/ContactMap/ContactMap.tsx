import React, { useCallback } from "react";
import {
  useLoadScript,
  GoogleMap as GoogleMapComponent,
} from "@react-google-maps/api";

const containerStyle: React.CSSProperties = { width: "100%", height: "100%" }; //768x560
const center = { lat: 17.992048438139683, lng: -76.81149734949142 };

const ContactMap: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
  });

  const onMapLoad = useCallback((map: google.maps.Map) => {
    if (google.maps.marker && google.maps.marker.AdvancedMarkerElement) {
      const markerContent = document.createElement("div");
      markerContent.innerHTML = `<div style="background: red; padding: 4px 8px; color: white; border-radius: 4px;">Marker</div>`;
      new google.maps.marker.AdvancedMarkerElement({
        map,
        position: center,
        content: markerContent,
      });
    } else {
      new google.maps.Marker({
        map,
        position: center,
      });
    }
  }, []);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="max-w-[768px] max-h-[50vh] w-[80vw] h-[50vh] sm:aspect-[4/3] sm:h-auto">
    <GoogleMapComponent
      onLoad={onMapLoad}
      mapContainerStyle={containerStyle}
      center={center}
      zoom={17}
      options={{ gestureHandling: "greedy", disableDefaultUI: true }}
    />
    </div>
  );
};

export default ContactMap;
