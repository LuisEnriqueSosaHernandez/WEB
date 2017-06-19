/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function iniciar(){
    window.addEventListener("message",receptor,false);
}
function receptor(e){
    var zonamensajes=document.getElementById("zonamensajes");
if(e.orgin=="eldominioparaseguridad"){    
zonamensajes.innerHTML+="Mensaje desde: "+ e.origin+"<br>";
zonamensajes.innerHTML+="Mensaje: "+ e.data+"<br>";
e.source.postMessage("Mensaje Recibido correctamente+<br>",e.origin);
}else{
   e.source.postMessage("Mensaje invalido"+"<br>",e.origin);
}
}
window.addEventListener("load",iniciar,false);

