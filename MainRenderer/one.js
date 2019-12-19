console.log("From Renderer 1 JS ");
const BrowserWindow= require('electron').remote.BrowserWindow;
const path=require('path');
const url=require('url');

const newWindowBtn= document.getElementById('newWindowBtn');
newWindowBtn.addEventListener('click',function(event){
    let winThre=new BrowserWindow();
    winThre.loadURL(url.format({
        pathname: path.join(__dirname,'three.html'),
        protocol: 'file',
        slashes: true
    }));
    winThre.webContents.openDevTools();
})