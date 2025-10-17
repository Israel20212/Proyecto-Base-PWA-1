import React from "react";
import logo from "../../public/icons/icon-192.png"

const SplashScreen: React.FC = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <img src={logo} alt="LISTA DE TAREAS OFFLINE" className="logo" />
      <h1 style={{ textAlign: "center" }}>LISTA DE TAREAS OFFLINE</h1>
    </div>
  );
};

export default SplashScreen;
