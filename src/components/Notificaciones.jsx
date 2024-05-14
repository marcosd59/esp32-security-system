import React, { useEffect, useState } from "react";
import axios from "axios";

function Notificaciones() {
  const [unknownDetected, setUnknownDetected] = useState(false);
  const [checkInterval] = useState(null);

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
        margin: "2rem",
      }}
    >
      <h2>Notificaciones</h2>
      {unknownDetected && <h3>¡Alerta! Se reconoció a un desconocido.</h3>}
    </div>
  );
}

export default Notificaciones;
