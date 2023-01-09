import { app, BrowserWindow } from "electron";
import "./server";
let mainWindow: BrowserWindow | null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 900,
    height: 500,
    autoHideMenuBar: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      nodeIntegrationInWorker: true,
    },
  });

  mainWindow.loadURL("http://localhost:3333");
}

app.on("ready", () => {
  createWindow();
});
