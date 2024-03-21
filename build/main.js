import { app, BrowserWindow } from 'electron'

function createWindow() {
  let mainWin = new BrowserWindow({
    show: false,
    width: 1400,
    height: 600
  })

  mainWin.loadURL('http://localhost:3001')
  mainWin.on('ready-to-show', () => {
    mainWin.show()
  })

  mainWin.webContents.openDevTools()
  mainWin.on('close', () => {
    mainWin = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  app.quit()
})
