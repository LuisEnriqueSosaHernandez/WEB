jQuery(document).on('submit','#form_alu, #form_doc, #form_adm',function(event){
  event.preventDefault();

  jQuery.ajax({
    url: 'php/login.php',
    type: 'POST',
    dataType: 'json',
    data: $(this).serialize(),
    beforeSend: function(){
      //Accion mientras valida datos
    }
  })
  .done(function(respuesta){
    console.log(respuesta);
    console.log('AQUI SI SIRVO');
    if(!respuesta['error']){
      if (respuesta['tipo'] == 'alumno') {
        location.href = 'modulos/alumnos/'; //Redirecciona al usuario a su pagina correspondiente
      }else if (respuesta['tipo'] == 'docente') {
        location.href = 'modulos/docentes/'; //Redirecciona al usuario a su pagina correspondiente
      }else if (respuesta['tipo'] == 'administrativo') {
        location.href = 'modulos/administrativos/'; //Redirecciona al usuario a su pagina correspondiente
      }
    }else{
      alert("Comprueba los datos")
    }
  })
  .fail(function(resp){
    console.log(resp.responseText);
    console.log('No sirve');
    console.log(resp);
    alert("Comprueba los datos")
  })
  .always(function(){
    console.log("complete");
  });
});
