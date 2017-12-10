
$(document).ready(function(){
 //event.preventDefault();
var data = $(this).serializeArray(); // convert form to array
data.push({name: "tarea", value: "mostrar"});
  jQuery.ajax({
    url: 'php/crud.php',
    type: 'POST',
    dataType: 'json',
    data:$.param(data),
    beforeSend: function(){
      //Accion mientras valida datos
    }
  })
  .done(function(respuesta){
    console.log(respuesta);
    console.log('AQUI SI SIRVO');
    if(!respuesta['error']){
      // alert("Datos mostrados")
       for(var j=0;j<respuesta['registrado'].length;j++){
            $("#registros").html("IdCliente: "+respuesta['registrado'][j]['IDCLIENTE']+" Nombre: "+respuesta['registrado'][j]['NOMBRE']+" Apellidos: "+respuesta['registrado'][j]['APELLIDOS']+" Telefono: "+respuesta['registrado'][j]['TELEFONO']);
         }
    }else{
      alert("error");
    }
  })
  .fail(function(resp){
    console.log(resp.responseText);
    console.log('No sirve');
    console.log(resp);
  })
  .always(function(){
    console.log("complete");
  });
});


