const { app, BrowserWindow } = require("electron");
const path = require("path");
const isDevelopmentMode = require("electron-is-dev");

// const inputMenu = require("electron-input-menu");
// const context = require("electron-contextmenu-middleware");

let controlModule;

function createWindow() {
  controlModule = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: { nodeIntegration: true },
  });

  controlModule.loadURL(
    isDevelopmentMode
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/landing/index.html")}`
  );

  //toggle the comment in the line below to toggle dev tools on app launch
  //   controlModule.webContents.openDevTools();
}
app.whenReady().then(createWindow);

// context.use(inputMenu);
// context.activate();

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
