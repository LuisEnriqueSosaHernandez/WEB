/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function mensaje_recibido(e){
  var respuesta="El texto escrito en el cuadro es "+e.data;
  postMessage(respuesta);
 }
addEventListener("message",mensaje_recibido,false);


