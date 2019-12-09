const { app, BrowserWindow } = require("electron");
const { readFileSync } = require("fs");

const threemaUrl = "https://web.threema.ch/";

function createWindow() {
  let window = new BrowserWindow({
    width: 500,
    height: 700,
    icon: __dirname + "/assets/favicon.ico",
    webPreferences: {
      nodeIntegration: false
    },
    title: "Threema Desktop"
  })
  window.setMenu(null);
  window.setMenuBarVisibility(false);
  window.removeMenu();
  window.webContents.on("dom-ready", () => {
    window.webContents.executeJavaScript(readFileSync(__dirname + "/client.js").toString());
  });
  window.on('page-title-updated', function(e) {
    e.preventDefault()
  });
  window.loadURL(threemaUrl);
}

app.on("ready", createWindow)