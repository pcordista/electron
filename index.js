const { app, BrowserWindow } = require('electron');
const process = require('process')

app.on('ready', () => {
    console.log("App inciado");

    // Criar janela principal
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 400
    });

    mainWindow.webContents.openDevTools();

    mainWindow.loadURL(`file://${__dirname}/index.html`);

    // console.log(process.versions);
    
});

app.on('window-all-closed', () => {
    app.quit();
})

const edge = require('electron-edge-js')

var ObtemVersao = edge.func(function () {
    /*
        using System;
        using System.Threading.Tasks;
        using System.Runtime.InteropServices;
        using System.Text;

        public class Startup
        {

            [DllImport("CliSiTef32I.dll", CallingConvention = CallingConvention.StdCall, EntryPoint = "ConfiguraIntSiTefInterativo", CharSet = CharSet.Auto, SetLastError = true)]
            private static extern int ConfiguraIntSiTefInterativo(string IPSiTef, string IdLoja, string IdTerminal, string Reservado);

            public async Task<object> Invoke(object input)
            {
                return await Task<object>.Run(() => {
                
                    Console.WriteLine("Hello World!");
                    Console.WriteLine(ConfiguraIntSiTefInterativo("127.0.0.1", "1", "AA000001", "0"));
                   
                    string _buf1 = string.Empty;
                    string _buf2 = string.Empty;
                });
            }
        }
    */
});

ObtemVersao(function (error, result) {
    if (error) throw error;
    console.log(result);
});