console.log('main process working');
console.log('From main.js');

const electron =require("electron");
const app= electron.app;
const BrowserWindow = electron.BrowserWindow;
const path=require("path");
const url=require("url");
let win;

function createWindow(){
    winOne =new BrowserWindow();
    winTwo =new BrowserWindow();

    winOne.loadURL(url.format({
        pathname: path.join(__dirname,'one.html'),
        protocol: 'file',
        slashes: true
    }));
    
    winTwo.loadURL(url.format({
        pathname: path.join(__dirname,'two.html'),
        protocol: 'file',
        slashes: true
    }));
    winOne.webContents.openDevTools();
    winTwo.webContents.openDevTools();


    winOne.on('closed', ()=>{
        win = null;
    })

    winTwo.on('closed', ()=>{
        win = null;
    })


}

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
