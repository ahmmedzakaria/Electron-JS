console.log('main process working');

const electron =require("electron");
const app= electron.app;
const BrowserWindow = electron.BrowserWindow;
const path=require("path");
const url=require("url");
let win;

function createWindow(){
    //win =new BrowserWindow();
    /*dimWindow=new BrowserWindow({
        width:400,
        height:400,
        maxHeight:600,
        maxWidth:600,
        backgroundColor:'#228222'
    })*/

    /*framelessWindow=new BrowserWindow({
        backgroundColor:'#228222',
        frame:false
    });*/

    parentWindow=new BrowserWindow({title: 'perent'});
    childWindow=new BrowserWindow({title: "child",modal=true, parent:parentWindow});
    childWindow.loadURL('https://github.com');



}

app.on('ready', createWindow);


