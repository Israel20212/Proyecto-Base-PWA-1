import React, { useState } from 'react';
import { saveTask } from '../db/indexedDB';

interface TaskFormProps {
  onTaskSaved: () => void;
}

interface TaskData {
  title: string;
  description: string;
}

const TaskForm: React.FC<TaskFormProps> = ({ onTaskSaved }) => {
  const [task, setTask] = useState<TaskData>({ title: '', description: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTask(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!task.title.trim()) return;

    await saveTask({
      ...task,
      timestamp: Date.now(),
    });

    setTask({ title: '', description: '' });
    onTaskSaved();
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        name="title"
        type="text"
        placeholder="Título"
        value={task.title}
        onChange={handleChange}
        required
        className="task-input"
      />
      <textarea
        name="description"
        placeholder="Descripción"
        value={task.description}
        onChange={handleChange}
        className="task-textarea"
      />
      <button type="submit" className="task-button">
        Guardar tarea
      </button>
    </form>
  );
};

export default TaskForm;
