import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ResponsiveAppBar from "./components/AppBar";
import VideoStream from "./components/VideoStream";
import MapContainer from "./components/MapContainer";
import Card from "./components/Card";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ResponsiveAppBar />

        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/camara" element={<VideoStream />} />
          <Route path="/ubicacion" element={<MapContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
