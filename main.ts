import { app, BrowserWindow, ipcMain, Notification } from "electron";
import path from "path";

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    if (process.env.NODE_ENV === "development") {
        win.loadURL("http://localhost:8080");
    } else {
        win.loadFile(path.join(__dirname, "index.html"));
    }
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

// Listen for notifications
ipcMain.on("notify", (_, message: string) => {
    new Notification({ title: "Jira Notifier", body: message }).show();
});
