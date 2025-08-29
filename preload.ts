import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electronAPI", {
    notify: (msg: string) => ipcRenderer.send("notify", msg),
});

declare global {
    interface Window {
        electronAPI: {
            notify: (msg: string) => void;
        };
    }
}
