/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function comenzar(){
    var cache=window.applicationCache;
    cache.addEventListener("error",errores,false);
    
}
function errores(){
    alert("No se puede descargar");
}
window.addEventListener("load",comenzar,false);

