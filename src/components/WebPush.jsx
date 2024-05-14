import React, { useEffect, useState } from "react";
import axios from "axios";

function WebPush() {
  const [unknownDetected, setUnknownDetected] = useState(false);
  const [checkInterval, setCheckInterval] = useState(null);

  useEffect(() => {
    const checkForUnknowns = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/check_for_unknowns"
        );
        if (response.data.unknownDetected) {
          setUnknownDetected(true);
          if (checkInterval) {
            clearTimeout(checkInterval);
          }
          const newTimer = setTimeout(() => {
            setUnknownDetected(false);
          }, 10000);
          setCheckInterval(newTimer);
        }
      } catch (error) {
        console.error("Error fetching unknown detection status:", error);
      }
    };

    const interval = setInterval(checkForUnknowns, 5000);

    return () => {
      clearInterval(interval);
      if (checkInterval) {
        clearTimeout(checkInterval);
      }
    };
  }, [checkInterval]);

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20,
        zIndex: 1500,
        color: "white",
        backgroundColor: "#de0032",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h2>Notificaciones</h2>
      {unknownDetected && <h3>¡Alerta! Se reconoció a un desconocido.</h3>}
    </div>
  );
}

export default WebPush;
