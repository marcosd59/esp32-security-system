import React, { useEffect, useRef, useState } from "react";
import "../styles/MapContainer.css";
import { Typography } from "@mui/joy";

const MapContainer = () => {
  const mapRef = useRef(null);
  const [coordinates, setCoordinates] = useState({ lat: 0, lng: 0 });

  useEffect(() => {
    const fetchCoordinates = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setCoordinates({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error obtaining location", error);
            setCoordinates({ lat: 40.73061, lng: -73.935242 });
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
        setCoordinates({ lat: 40.73061, lng: -73.935242 });
      }
    };

    fetchCoordinates();
  }, []);

  useEffect(() => {
    const initMap = () => {
      const google = window.google;
      const map = new google.maps.Map(mapRef.current, {
        zoom: 15,
        center: coordinates,
      });

      new google.maps.Marker({
        position: coordinates,
        map: map,
      });
    };

    window.initMap = initMap;

    if (!window.google || !window.google.maps) {
      const script = document.createElement("script");
      const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API;
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      delete window.initMap;
    };
  }, [coordinates]);

  return (
    <>
      <Typography
        level="h2"
        fontWeight="xl"
        textColor="#000"
        mt={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        Ubicacion Actual del ESP32
      </Typography>{" "}
      <div ref={mapRef} className="map-container" />{" "}
    </>
  );
};

export default MapContainer;
