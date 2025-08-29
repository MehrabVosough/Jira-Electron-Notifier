import React, { useEffect, useState } from "react";
import TaskList, { Task } from "./components/TaskList";
import axios from "axios";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [prevTasks, setPrevTasks] = useState<Task[]>([]);

  const currentUser = "Alice"; 

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get<Task[]>(
          `http://localhost:3000/user-tasks?username=${currentUser}`
        );

        const fetchedTasks = res.data;

        fetchedTasks.forEach((task) => {
          const prevTask = prevTasks.find((t) => t.id === task.id);

          if (prevTask && prevTask.status !== task.status) {
            new window.Notification(`Task Updated: ${task.title}`, {
              body: `Status changed from ${prevTask.status} → ${task.status}`,
            });
          }
        });

        setPrevTasks(fetchedTasks);
        setTasks(fetchedTasks);
      } catch (err) {
        console.error("Error fetching tasks from server:", err);
      }
    };

    fetchTasks();
    const interval = setInterval(fetchTasks, 10000); // هر 10 ثانیه
    return () => clearInterval(interval);
  }, [prevTasks]);

  return (
    <div style={{ textAlign: "center", marginTop: "1rem" }}>
      <h1>Jira Notifier 🚀</h1>
      <TaskList tasks={tasks} currentUser={currentUser} />
    </div>
  );
};

export default App;
