const { app, BrowserWindow } = require("electron");
const { readFileSync } = require("fs");
const ElectronCookies = require("@exponent/electron-cookies");

const threemaUrl = "https://web.threema.ch/";

ElectronCookies.enable({
  origin: threemaUrl
});

function createWindow() {
  let window = new BrowserWindow({
    width: 400,
    height: 700,
    webPreferences: {
      nodeIntegration: false
    },
    title: "Threema Desktop"
  })
  window.setMenu(null);
  window.setMenuBarVisibility(false);
  window.removeMenu();
  window.webContents.on("dom-ready", () => {
    window.webContents.executeJavaScript(readFileSync("./client.js").toString());
  });
  window.loadURL(threemaUrl);
}

app.on("ready", createWindow)