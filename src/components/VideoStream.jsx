import React from "react";
import "../styles/VideoSteam.css";
import { Typography } from "@mui/joy";

const VideoStream = () => {
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
        Camara de la ESP32 CAM
      </Typography>

      <div className="video-container">
        <img
          src="http://192.168.1.252/video"
          alt="Video Stream"
          className="video-stream"
        />
      </div>
    </>
  );
};

export default VideoStream;
