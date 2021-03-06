const { Menu } = require("electron");

const isMac = process.platform === "darwin";


const template = [
  {
    label: "Inicio",
    submenu: [isMac ? { role: "close" } : { role: "quit" }],
  },
];

const menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);

module.exports = {
  menu
}