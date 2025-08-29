export interface Task {
    id: number;
    title: string;
    assignedTo: string;
    status: "todo" | "in-progress" | "done";
}

export const tasks: Task[] = [
    { id: 1, title: "Design homepage", assignedTo: "Alice", status: "todo" },
    { id: 2, title: "Fix login bug", assignedTo: "Bob", status: "in-progress" },
    { id: 3, title: "Write docs", assignedTo: "Alice", status: "done" },
];
