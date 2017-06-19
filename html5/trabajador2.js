/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


puertos=new Array();
function conectar(e){
    puertos.push(e.ports[0]);
    e.ports[0].onmessage=enviar;
    
}
function enviar(e){
    for(var i=0;i<puertos.length;i++){
      puertos[i].postMessage("el texto es: "+e.data);  
    }
}
addEventListener("connect",conectar,false);

