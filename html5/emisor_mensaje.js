/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function iniciar(){
    var boton=document.getElementById("boton");
    boton.addEventListener("click",enviar,false);
window.addEventListener("message",recibir,false);
recepcion.document.getElementsById("zonarecepcion");
}
function enviar(){
    var mensaje=document.getElementById("mensaje").value;
var iframe=document.getElementById("iframe");
iframe.contentWindow.postMessage(mensaje,"*");
}
function recibir(e){
    recepcion.innerHTML+=e.data;
}
window.addEventListener(load,iniciar,false);


