"use client";
import * as React from "react";
import Map, {
  Marker,
  Popup,
  FullscreenControl,
  AttributionControl,
} from "react-map-gl";

// TODO: Fix this type
interface MapBoxProps {
  latitude?: number;
  longitude?: number;
  style?: React.CSSProperties;
  mapStyle?: string;
}

// "pk.eyJ1IjoiYWxwaGFvbG9taSIsImEiOiJjbGloZXNoYzUxZXZ0M2VxZnRibjFrbGl0In0.n3aeO42LZlR5Wu1fjht7vA";

// TODO: Fix these props
export default function MapBox({}: MapBoxProps) {
  const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
  const [showPopup, setShowPopup] = React.useState(true);
  if (!MAPBOX_TOKEN) {
    throw new Error(
      "Mapbox token is not set, please set it in your `.env` file"
    );
  }

  return (
    <Map
      initialViewState={{
        // Tanzania's coordinates
        latitude: -6.369,
        longitude: 34.8888,
        zoom: 5,
      }}
      style={{ width: 800, height: 600 }}
      // mapStyle="mapbox://styles/mapbox/streets-v9"
      // Mapbox API token is required
      // if your using https://www.mapbox.com/pricing#vision
      // https://www.mapbox.com/pricing
      mapStyle="mapbox://styles/mapbox/streets-v9"
      mapboxAccessToken={MAPBOX_TOKEN}
      // Disable Attributions
      attributionControl={false}
    >
      {/* Dar es Salaam */}
      <Marker latitude={-6.7924} longitude={39.2083} />

      {showPopup && (
        <Popup
          latitude={-6.7924} longitude={39.2083}
          anchor="bottom"
          onClose={() => setShowPopup(false)}
        >
          We are here
        </Popup>
      )}
      <FullscreenControl
        position="top-right" //  'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
        style={{}}
      />

      {/* <AttributionControl
        customAttribution="Map design by me"
        position="bottom-right"
        style={{}}
      /> */}
    </Map>
  );
}
