var app = require('app');
var BrowserWindow = require('browser-window');

app.on('ready',function(){
  var mainWindow = new BrowserWindow({
    width: 1000,
    height: 600
  });

  mainWindow.loadURL('file://'+__dirname+"/app/views/index.html");
  //mainWindow.openDevTools();
  mainWindow.show();
  /*mainWindow.on('closed',function(){
    mainWindow = null;
  });*/
});
