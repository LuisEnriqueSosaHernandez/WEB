/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function comenzar(){
    boton=document.getElementById("boton");
    boton.addEventListener("click",enviar,false);
    trabajador=new SharedWorker("trabajador2.js");
    trabajador.port.addEventListener("message",recibido,false);
    trabajador.port.start();
    
}
function enviar(){
    var nombre=document.getElementById("nombre").value();
    trabajador.port.postMessage(nombre);
    
}
function recibido(e){
    alert(e.data);
}


window.addEventListener("load",comenzar,false);


