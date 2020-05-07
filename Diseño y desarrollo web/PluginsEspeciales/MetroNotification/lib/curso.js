$(document).ready(function(){
    $.smallBox({
        title:"Hola Mundo",
        content:"Este es el cuerpo de la notificación. Prueba 1, probando, sigo probando, probando 1,2,3.",
        fa:"fa-star-o",
        sound:false,
        color:"#516999",
        buttons:["Aceptar","Cancelar"],
      },function(action, button){
        //Do something here
      
        alert(action + ' ' + button);
      });
});
