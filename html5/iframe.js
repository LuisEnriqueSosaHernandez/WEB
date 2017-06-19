/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function comenzar(){
    trabajador=new SharedWorker("trabajador2.js");
    trabajador.port.addEventListener("message",recibido,false);
    trabajador.port.start();
}
function recibido(e){
  zonadatos=document.getElementById("zonadatos");
  zonadatos.innerHTML=e.data;
}
window.addEventListener("load",comenzar,false);


