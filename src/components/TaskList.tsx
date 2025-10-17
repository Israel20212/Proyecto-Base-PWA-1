import React, { useEffect, useState } from 'react';
import { getAllTasks } from '../db/indexedDB';

interface Task {
  id?: number;
  title: string;
  description: string;
  timestamp: number;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const loadTasks = async () => {
    const allTasks = await getAllTasks();
    setTasks(allTasks);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="task-list-container">
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <h3 className="task-title">{task.title}</h3>
          <p className="task-description">{task.description}</p>
          <span className="task-timestamp">{new Date(task.timestamp).toLocaleString()}</span>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
