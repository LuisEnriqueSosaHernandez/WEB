jQuery(document).on('submit','#insertar',function(event){

  event.preventDefault();
var data = $(this).serializeArray(); // convert form to array
data.push({name: "tarea", value: "insertar"});
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
       alert("Dato insertado")
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
jQuery(document).on('submit','#mostrar',function(event){

  event.preventDefault();
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
       alert("Datos mostrados")
       for(var j=0;j<respuesta['registrado'].length;j++){
            $("#registros").html("Id: "+respuesta['registrado'][j]['id']+" Nombre: "+respuesta['registrado'][j]['apodo'])
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

