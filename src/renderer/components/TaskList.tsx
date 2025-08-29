// src/renderer/components/TaskList.tsx
import React from "react";

export interface Task {
  id: string;
  title: string;
  assignedTo: string;
  status: string;
}

interface Props {
  tasks: Task[];
  currentUser: string; 
}

const TaskList: React.FC<Props> = ({ tasks, currentUser }) => {
  const visibleTasks = currentUser
    ? tasks.filter((t) => t.assignedTo === currentUser)
    : tasks;

  if (!visibleTasks || visibleTasks.length === 0) {
    return <p>No tasks assigned.</p>;
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Task List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {visibleTasks.map((task) => (
          <li
            key={task.id}
            style={{
              margin: "0.5rem 0",
              padding: "0.5rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
              textAlign: "left",
            }}
          >
            <strong>{task.title}</strong>
            <p>Assigned to: {task.assignedTo}</p>
            <p>Status: {task.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
