const {app, BrowserWindow} = require('electron')
const axios = require('axios')

app.on('ready', () =>{
	const mainWindow = new BrowserWindow({
		width:800,
		height:600
	})
	mainWindow.loadURL(`file://${__dirname}/index.html`);
});