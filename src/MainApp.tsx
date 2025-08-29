import React from "react";

const App: React.FC = () => {
    const sendNotification = () => {
        window.electronAPI.notify("React + TypeScript Notification 🚀");
    };

    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1>Jira Notifier (React + Electron + TS)</h1>
            <button onClick={sendNotification}>Send Test Notification</button>
        </div>
    );
};

export default App;
