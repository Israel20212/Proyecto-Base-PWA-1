import React, { useEffect, useState } from "react";
import SplashScreen from "./components/SplashScreen";
import HomeScreen from "./components/HomeScreen";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula carga inicial
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <SplashScreen /> : <HomeScreen />}</>;
};

export default App;
