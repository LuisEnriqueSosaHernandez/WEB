jQuery(document).on('submit','#contact-info',function(event){
  event.preventDefault();
var data = $(this).serializeArray(); // convert form to array
data.push({name: "tarea", value: "primera"});
  jQuery.ajax({
    url: 'php/consultas/editaperfil.php',
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
       //location.href = 'actperfil.php'; //Redirecciona al usuario para ver los cambios
       alert("Datos actualizados")
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
jQuery(document).on('submit','#emg-info',function(event){
  event.preventDefault();
var data = $(this).serializeArray(); // convert form to array
data.push({name: "tarea", value: "segunda"});
  jQuery.ajax({
    url: 'php/consultas/editaperfil.php',
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
       //location.href = 'actperfil.php'; //Redirecciona al usuario para ver los cambios
       alert("Datos actualizados")
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
jQuery(document).on('submit','#NIP-info',function(event){
  event.preventDefault();
  if(($("#nip1").val()!=$("#nip2").val())||$("#nip1").val()===""||$("#nip2").val()==""){
    alert("Comprueba la contra");
  }else{
var data = $(this).serializeArray(); // convert form to array
data.push({name: "tarea", value: "cuarta"});
  jQuery.ajax({
    url: 'php/consultas/editaperfil.php',
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
       //location.href = 'actperfil.php'; //Redirecciona al usuario para ver los cambios
       alert("Datos actualizados")
       $('#nipactual').html($("#nip2").val());
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
}
});
//sube imagen
jQuery(document).on('submit','#photo-info',function(event){
  event.preventDefault();
  var datos= new FormData(this);
  console.log(datos);
  jQuery.ajax({
    url: 'php/consultas/signup-image.php',
    type: 'POST',
    data: datos,
    dataType: 'json',
    contentType: false,
        cache: false,
    processData:false,
    beforeSend: function(){
      //Accion antes de enviar datos
      console.log('enviando');
    }
  })
  .done(function(respuesta){

    console.log(respuesta);
    if(!respuesta['error']){
      d = new Date();
       //location.href = 'actperfil.php'; //Redirecciona al usuario para ver los cambios
       alert("Datos actualizados");
       var nombrefoto=respuesta['nombrefoto'];
       console.log(nombrefoto);
       $('#input08').filestyle('clear');
       //$("#fotito2").attr("src","img/profile/user.png?"+d.getTime());
       $("#fotito2").attr("src","img/profile/"+nombrefoto+"?"+d.getTime());
       $("#fotito").attr("src","img/profile/"+nombrefoto+"?"+d.getTime());
    }else{
      alert("error");
    }
  })
  .fail(function(resp){
    console.log(resp.responseText);
  })
  .always(function(){
    console.log("complete");
  });
});