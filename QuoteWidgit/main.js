console.log('main process working');

const electron =require("electron");
const app= electron.app;
const BrowserWindow = electron.BrowserWindow;
const path=require("path");
const url=require("url");
let win;

function createWindow(){
    win =new BrowserWindow({height:150, width:500, frame:false,show:false});
    win.loadURL(url.format({
        pathname: path.join(__dirname,'index.html'),
        protocol: 'file',
        slashes: true
    }));
   

    win.on('closed', ()=>{
        win = null;
    })

    win.once('ready-to-show',()=>{
        win.show();
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
