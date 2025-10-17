import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

const App: React.FC = () => {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="home-screen">
            <h1>LISTA DE TAREAS OFFLINE</h1>
      <TaskForm onTaskSaved={() => setRefresh(!refresh)} />
      <TaskList key={refresh ? 'r1' : 'r2'} />
      <OfflineStatus />
    </div>
  );
};

// Componente para mostrar si estamos offline
const OfflineStatus: React.FC = () => {
  const [isOnline, setIsOnline] = React.useState(navigator.onLine);

  React.useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener('online', goOnline);
    window.removeEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);

    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  return (
    <div className={isOnline ? 'status-online' : 'status-offline'}>
      {isOnline ? '✅ Estás en línea. ¡Todo listo para sincronizar!' : '❌ Estás sin conexión. Los cambios se guardarán localmente.'}
    </div>
  );
};

export default App;
