import { app, BrowserWindow } from "electron";
import path from "path";

let mainWindow: BrowserWindow | null = null;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 700,
        icon: path.join(__dirname, "assets/logo.png"),
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
        },
    });

    if (process.env.NODE_ENV === "development") {
        mainWindow.loadURL("http://localhost:8080");
        // mainWindow.webContents.openDevTools();
    } else {
        mainWindow.loadFile(path.join(__dirname, "index.html"));
    }

    mainWindow.on("closed", () => {
        mainWindow = null;
    });
};

app.whenReady().then(createWindow);
app.on("activate", () => {
    if (!mainWindow) createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});


