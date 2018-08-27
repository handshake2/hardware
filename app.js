const os = require('os');
const fs = require('fs');
const mi = require('./mito.js');
const si = require('systeminformation');
const express = require('express');

let cpu = os.cpus();
let sistema= os.platform();
let usuario = os.hostname();
let stringcpu= JSON.stringify(cpu);

let DiskSerial;

let serial1;
//let version= si.system(data);


let resultado = mi.sumar(10,5);


/*fs.appendFile('maicol.txt',`Informacion Cpu: ${stringcpu}`,function(error){
    if(error)
    {
        console.log('error al crear archivo');
    }
    
}
);*/
/*mi.saludar();
console.log(mi.sub);
console.log(resultado);
setTimeout(() => {
  console.log("termime");  
}, 2000);*/

si.diskLayout(function(data) {
	console.log('Serial Disco Duro:');
    DiskSerial=data[0].serialNum;
    //serial1= data[0];
    //console.log(serial1.serialNum);
    console.log(DiskSerial);

    
});
var app=express();
app.get("/",function(req,res){
 res.end(DiskSerial);
}
);

app.listen(8080);

