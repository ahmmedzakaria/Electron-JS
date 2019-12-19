console.log('main process working');

const electron =require("electron");
const app= electron.app;
const BrowserWindow = electron.BrowserWindow;
const path=require("path");
const url=require("url");
//const ipc=require("ipc");
const ipc =electron.ipcMain
const dialog=electron.dialog;

let win;

function createWindow(){
    win =new BrowserWindow();
    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file',
        slashes: true
    }));
    win.webContents.openDevTools();

    win.on('closed', ()=>{
        win = null;
    })
}

ipc.on('async-massage', function(event){
    dialog.showErrorBox("An Error Message", "Demo Error Massage")
    event.sender.send('async-reply','Main Process Opend Error Dialog')
})

app.on('ready', createWindow);


    //This Code is for Mac Pc

    // app.on('window-all-closed',()=>{
    //     if(process.platform!== 'darwin'){
    //         app.quit();
    //     }
    // })

    // app.on('activate',()=>{
    //     if(win===null){
    //         createWindow();
    //     }
    // })
