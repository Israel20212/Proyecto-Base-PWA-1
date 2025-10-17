import React from "react";

const HomeScreen: React.FC = () => {
  return (
    <div  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h2 style={{textAlign: "center"}}>LISTA DE TAREAS OFFLINE</h2>
      <p>Explora nuestro menú y haz tu pedido.</p>
    </div>
  );
};

export default HomeScreen;
