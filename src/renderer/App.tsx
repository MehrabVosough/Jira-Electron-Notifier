import React, { useEffect } from "react";

const App: React.FC = () => {
    useEffect(() => {
        console.log(window.electronAPI?.ping());
    }, []);

    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h1>Hello Jira Notifier 🚀</h1>
            <p>React + TypeScript + Electron Dev Mode</p>
            {/* <button onClick={sendNotification}>Send Test Notification</button> */}
        </div>
    );
};

export default App;
