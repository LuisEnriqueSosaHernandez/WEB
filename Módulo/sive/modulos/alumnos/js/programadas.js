jQuery(document).ready(function(event){
  //event.preventDefault();
var data = $(this).serializeArray(); // convert form to array
data.push({name: "tarea", value: "primera"});
  jQuery.ajax({
    url: 'php/consultas/programadas.php',
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
       //alert("Datos actualizados")
       if(respuesta['resultado'].length===0){
        $("#visitas").html("<div class='notif col-md-12'>"+
                       "<span><img src='img/avion.png' class='img-notif'></span>"+
                       "<h5>Aún no hay visitas autorizadas...</h5>"+
                     "</div>");
       }else{
        //LLenando fecha
         for(var i=0;i<respuesta['resultadoempresa'].length;i++){
            $("#empresa").append("<option>"+respuesta['resultadoempresa'][i]['NombreEmpresa']+"</option>");
         }
         for(var i=0;i<respuesta['resultadoubicacion'].length;i++){
            $("#ubicacion").append("<option>"+respuesta['resultadoubicacion'][i]['Ubicacion']+"</option>");
         }
       $("#cuerpa").html("<tr>"+
        "<td>"+respuesta['resultado'][0]['FechaSalidaProgramada']+"</td>"+
                "<td>"+respuesta['resultado'][0]['HoraSalida']+"</td>"+
                "<td>"+respuesta['resultado'][0]['NombreEmpresa']+"<br><span class='m-text'><span class='bot-text'>"
                +respuesta['resultado'][0]['Ubicacion']+"</span> <br>Docente:"+
                "<span class='bot-text'> "+respuesta['resultado'][0]['Nombre']+" "
                +respuesta['resultado'][0]['ApPaterno']+" "+respuesta['resultado'][0]['ApMaterno']+
                "</span></span></td><div class='container'>"+
              "<td>"+
              "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#myModal'>Registrar</button>"+
              "<form  class='c-inf' action='php/consultas/programadas.php' method='post' id='"+respuesta['resultado'][0]['ID_SolicitaVisita']+"'>"+
              "<div class='modal fade' id='myModal' role='dialog'>"+
                "<div class='modal-dialog'>"+
                 "<div class='modal-content'>"+
                    "<div class='modal-header'>"+
                      "<h4 class='modal-title' id='titulo_ modal'>Confirmar Visita</h4>"+
                      "<button type='button' class='close' data-dismiss='modal'  id='cerrar'>&times;</button>"+
                    "</div>"+
                    "<div class='modal-body'>"+
                      "<h6 class='titulo'>"+respuesta['resultado'][0]['NombreEmpresa']+"</h6>"+
                      "<div class='campo'>"+
                        "<div><p class='titulo_campo'>Lugar:</p></div>"+
                        "<p class='valor_campo'>"+respuesta['resultado'][0]['Ubicacion']+"</p>"+
                      "</div>"+
                     "<div class='campo'>"+
                        "<div><p class='titulo_campo'>Fecha:</p></div>"+
                        "<p class='valor_campo'>"+respuesta['resultado'][0]['FechaSalidaProgramada']+"</p>"+
                      "</div>"+
                      "<div class='campo'>"+
                        "<div><p class='titulo_campo'>Hora:</p></div>"+
                        "<p class='valor_campo'>"+respuesta['resultado'][0]['HoraSalida']+"</p>"+
                      "</div>"+
                      "<br>"+
                      "<div class='campo'>"+
                        "<div><p class='titulo_campo'>Docente Encargado:</p></div>"+
                        "<p class='valor_campo'>"+respuesta['resultado'][0]['Nombre']+" "+respuesta['resultado'][0]['ApPaterno']+" "+respuesta['resultado'][0]['ApMaterno']+"</p>"+
                      "</div>"+
                      "<br>"+
                      "<div class='campo' id='importante'>"+
                        "<div><p class='titulo_campo'>Importante:</p></div>"+
                        "<div><p class='valor_campo' >Ingresa el NIP proporcionado por tu profesor para continuar</p></div>"+
                      "</div>"+
                      "<div class='campo'>"+
                        "<select class='custom-select materias' id='materias' name='materias'>"+
                        "<option>Materias</option>"+
                        "</select>"+
                      "</div>"+  
                      "<div class='nip'>"+
                          "<input type='password' name='nip' class='form-control' id='nip' placeholder='NIP'>"+
                      "</div>"+
                      "<div class='campo'>"+
                      "<button type='button' class='btn btn-primary btn-sm' data-dismiss='modal' id='confirmar'>Cancelar</button>"+ 
                      "<button type='submit' class='btn btn-primary btn-sm'  id='confirmar2' name='solito' onclick='subir()'>Confirmar Visita</button>"+
                      "</form>"+   
                      "</div>"+
                    "</div>"+
                  "</div>"+
                "</div>"+
              "</div>"+
            "</td></tr>");
        for(var j=0;j<respuesta['resultadomaterias'].length;j++){
            $("#materias").append("<option>"+respuesta['resultadomaterias'][j]['nombreMateria']+"</option>");
         }
        for(var i=1;i<respuesta['resultado'].length;i++){
        $("#cuerpa").append("<tr>"+
        "<td>"+respuesta['resultado'][i]['FechaSalidaProgramada']+"</td>"+
                "<td>"+respuesta['resultado'][i]['HoraSalida']+"</td>"+
                "<td>"+respuesta['resultado'][i]['NombreEmpresa']+"<br><span class='m-text'><span class='bot-text'>"
                +respuesta['resultado'][i]['Ubicacion']+"</span> <br>Docente:"+
                "<span class='bot-text'> "+respuesta['resultado'][i]['Nombre']+" "
                +respuesta['resultado'][i]['ApPaterno']+" "+respuesta['resultado'][i]['ApMaterno']+"</span></span></td>"+
                "<td>"+
              "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#myModal"+i+"'>Registrar</button>"+
              "<form  class='c-inf' action='php/consultas/programadas.php' method='post' id='"+respuesta['resultado'][i]['ID_SolicitaVisita']+"'>"+
              "<div class='modal fade' id='myModal"+i+"' role='dialog'>"+
                "<div class='modal-dialog'>"+
                 "<div class='modal-content'>"+
                    "<div class='modal-header'>"+
                      "<h4 class='modal-title' id='titulo_ modal'>Confirmar Visita</h4>"+
                      "<button type='button' class='close' data-dismiss='modal'  id='cerrar'>&times;</button>"+
                    "</div>"+
                    "<div class='modal-body'>"+
                      "<h6 class='titulo'>"+respuesta['resultado'][i]['NombreEmpresa']+"</h6>"+
                      "<div class='campo'>"+
                        "<div><p class='titulo_campo'>Lugar:</p></div>"+
                        "<p class='valor_campo'>"+respuesta['resultado'][i]['Ubicacion']+"</p>"+
                      "</div>"+
                     "<div class='campo'>"+
                        "<div><p class='titulo_campo'>Fecha:</p></div>"+
                        "<p class='valor_campo'>"+respuesta['resultado'][i]['FechaSalidaProgramada']+"</p>"+
                      "</div>"+
                      "<div class='campo'>"+
                        "<div><p class='titulo_campo'>Hora:</p></div>"+
                        "<p class='valor_campo'>"+respuesta['resultado'][i]['HoraSalida']+"</p>"+
                      "</div>"+
                      "<br>"+
                      "<div class='campo'>"+
                        "<div><p class='titulo_campo'>Docente Encargado:</p></div>"+
                        "<p class='valor_campo'>"+respuesta['resultado'][i]['Nombre']+" "+respuesta['resultado'][i]['ApPaterno']+" "+respuesta['resultado'][i]['ApMaterno']+"</p>"+
                      "</div>"+
                      "<br>"+
                      "<div class='campo' id='importante'>"+
                        "<div><p class='titulo_campo'>Importante:</p></div>"+
                        "<div><p class='valor_campo' >Ingresa el NIP proporcionado por tu profesor para continuar</p></div>"+
                      "</div>"+
                      "<div class='campo'>"+
                        "<select class='custom-select materias' name='materias' id='materias"+i+"'>"+
                            "<option selected>Materia</option>"+
                          "</select>"+
                      "</div>"+  
                      "<div class='nip'>"+
                          "<input type='password' name='nip' class='form-control' id='nip' placeholder='NIP'>"+
                      "</div>"+
                      "<div class='campo'>"+
                      "<button type='submit' class='btn btn-primary btn-sm' data-dismiss='modal' id='confirmar' name='button' onclick='subir()'>Cancelar</button>"+
                      "<button type='submit' class='btn btn-primary btn-sm'  id='confirmar2' name='solito' onclick='subir()'>Confirmar Visita</button>"+ 
                      "</form>"+   
                      "</div>"+
                    "</div>"+
                  "</div>"+
                "</div>"+
              "</div>"+
            "</td></tr>");
         for(var j=0;j<respuesta['resultadomaterias'].length;j++){
            $("#materias"+i).append("<option>"+respuesta['resultadomaterias'][j]['nombreMateria']+"</option>");
         }
       }
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

jQuery(document).on('submit','#filtro',function(event){
  event.preventDefault();
var data = $(this).serializeArray(); // convert form to array
data.push({name: "tarea", value: "segunda"});
  jQuery.ajax({
    url: 'php/consultas/programadas.php',
    type: 'POST',
    dataType: 'json',
    data:$.param(data),
    beforeSend: function(){
      //Accion mientras valida datos
      console.log(data);
    }
  })
  .done(function(respuesta){
    console.log(respuesta);
    console.log('AQUI SI SIRVO');
    if(!respuesta['error']){
      //$("#fecha").val('0');
      //$("#fecha2").val('0');
      //$("#empresa").val('0');
      //$("#ubicacion").val('0')
      if(respuesta['resultado'].length===0){
        $("#cuerpa").html("<div class='notif'>"+
                       "<span><img src='img/avion.png' class='img-notif'></span>"+
                       "<h5>Aún no hay visitas autorizadas...</h5>"+
                     "</div>");
       }else{
       $("#cuerpa").html("<tr>"+
        "<td>"+respuesta['resultado'][0]['FechaSalidaProgramada']+"</td>"+
                "<td>"+respuesta['resultado'][0]['HoraSalida']+"</td>"+
                "<td>"+respuesta['resultado'][0]['NombreEmpresa']+"<br><span class='m-text'><span class='bot-text'>"
                +respuesta['resultado'][0]['Ubicacion']+"</span> <br>Docente:"+
                "<span class='bot-text'> "+respuesta['resultado'][0]['Nombre']+" "
                +respuesta['resultado'][0]['ApPaterno']+" "+respuesta['resultado'][0]['ApMaterno']+
                "</span></span></td><div class='container'>"+
              "<td>"+
              "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#myModal'>Registrar</button>"+
              "<form  class='c-inf' action='php/consultas/programadas.php' method='post' id='"+respuesta['resultado'][0]['ID_SolicitaVisita']+"'>"+
              "<div class='modal fade' id='myModal' role='dialog'>"+
                "<div class='modal-dialog'>"+
                 "<div class='modal-content'>"+
                    "<div class='modal-header'>"+
                      "<h4 class='modal-title' id='titulo_ modal'>Confirmar Visita</h4>"+
                      "<button type='button' class='close' data-dismiss='modal'  id='cerrar'>&times;</button>"+
                    "</div>"+
                    "<div class='modal-body'>"+
                      "<h6 class='titulo'>"+respuesta['resultado'][0]['NombreEmpresa']+"</h6>"+
                      "<div class='campo'>"+
                        "<div><p class='titulo_campo'>Lugar:</p></div>"+
                        "<p class='valor_campo'>"+respuesta['resultado'][0]['Ubicacion']+"</p>"+
                      "</div>"+
                     "<div class='campo'>"+
                        "<div><p class='titulo_campo'>Fecha:</p></div>"+
                        "<p class='valor_campo'>"+respuesta['resultado'][0]['FechaSalidaProgramada']+"</p>"+
                      "</div>"+
                      "<div class='campo'>"+
                        "<div><p class='titulo_campo'>Hora:</p></div>"+
                        "<p class='valor_campo'>"+respuesta['resultado'][0]['HoraSalida']+"</p>"+
                      "</div>"+
                      "<br>"+
                      "<div class='campo'>"+
                        "<div><p class='titulo_campo'>Docente Encargado:</p></div>"+
                        "<p class='valor_campo'>"+respuesta['resultado'][0]['Nombre']+" "+respuesta['resultado'][0]['ApPaterno']+" "+respuesta['resultado'][0]['ApMaterno']+"</p>"+
                      "</div>"+
                      "<br>"+
                      "<div class='campo' id='importante'>"+
                        "<div><p class='titulo_campo'>Importante:</p></div>"+
                        "<div><p class='valor_campo' >Ingresa el NIP proporcionado por tu profesor para continuar</p></div>"+
                      "</div>"+
                      "<div class='campo'>"+
                        "<select class='custom-select materias' name='materias' id='materias'>"+
                        "<option>Materias</option>"+
                        "</select>"+
                      "</div>"+  
                      "<div class='nip'>"+
                          "<input type='password' name='nip' class='form-control' id='nip' placeholder='NIP'>"+
                      "</div>"+
                      "<div class='campo'>"+
                      "<button type='submit' class='btn btn-primary btn-sm' data-dismiss='modal' id='confirmar' name='button' onclick='subir()'>Cancelar</button>"+
                      "<button type='submit' class='btn btn-primary btn-sm'  id='confirmar2' name='solito'  onclick='subir()'>Confirmar Visita</button>"+
                      "</form>"+    
                      "</div>"+
                    "</div>"+
                  "</div>"+
                "</div>"+
              "</div>"+
            "</td></tr>");
        for(var j=0;j<respuesta['resultadomaterias'].length;j++){
            $("#materias").append("<option>"+respuesta['resultadomaterias'][j]['nombreMateria']+"</option>");
         }
        for(var i=1;i<respuesta['resultado'].length;i++){
        $("#cuerpa").append("<tr>"+
        "<td>"+respuesta['resultado'][i]['FechaSalidaProgramada']+"</td>"+
                "<td>"+respuesta['resultado'][i]['HoraSalida']+"</td>"+
                "<td>"+respuesta['resultado'][i]['NombreEmpresa']+"<br><span class='m-text'><span class='bot-text'>"
                +respuesta['resultado'][i]['Ubicacion']+"</span> <br>Docente:"+
                "<span class='bot-text'> "+respuesta['resultado'][i]['Nombre']+" "
                +respuesta['resultado'][i]['ApPaterno']+" "+respuesta['resultado'][i]['ApMaterno']+"</span></span></td>"+
                "<td>"+
              "<button type='button' class='btn btn-primary btn-sm' data-toggle='modal' data-target='#myModal"+i+"'>Registrar</button>"+
             "<form  class='c-inf' action='php/consultas/programadas.php' method='post' id='"+respuesta['resultado'][i]['ID_SolicitaVisita']+"'>"+
              "<div class='modal fade' id='myModal"+i+"' role='dialog'>"+
                "<div class='modal-dialog'>"+
                 "<div class='modal-content'>"+
                    "<div class='modal-header'>"+
                      "<h4 class='modal-title' id='titulo_ modal'>Confirmar Visita</h4>"+
                      "<button type='button' class='close' data-dismiss='modal'  id='cerrar'>&times;</button>"+
                    "</div>"+
                    "<div class='modal-body'>"+
                      "<h6 class='titulo'>"+respuesta['resultado'][i]['NombreEmpresa']+"</h6>"+
                      "<div class='campo'>"+
                        "<div><p class='titulo_campo'>Lugar:</p></div>"+
                        "<p class='valor_campo'>"+respuesta['resultado'][i]['Ubicacion']+"</p>"+
                      "</div>"+
                     "<div class='campo'>"+
                        "<div><p class='titulo_campo'>Fecha:</p></div>"+
                        "<p class='valor_campo'>"+respuesta['resultado'][i]['FechaSalidaProgramada']+"</p>"+
                      "</div>"+
                      "<div class='campo'>"+
                        "<div><p class='titulo_campo'>Hora:</p></div>"+
                        "<p class='valor_campo'>"+respuesta['resultado'][i]['HoraSalida']+"</p>"+
                      "</div>"+
                      "<br>"+
                      "<div class='campo'>"+
                        "<div><p class='titulo_campo'>Docente Encargado:</p></div>"+
                        "<p class='valor_campo'>"+respuesta['resultado'][i]['Nombre']+" "+respuesta['resultado'][i]['ApPaterno']+" "+respuesta['resultado'][i]['ApMaterno']+"</p>"+
                      "</div>"+
                      "<br>"+
                      "<div class='campo' id='importante'>"+
                        "<div><p class='titulo_campo'>Importante:</p></div>"+
                        "<div><p class='valor_campo' >Ingresa el NIP proporcionado por tu profesor para continuar</p></div>"+
                      "</div>"+
                      "<div class='campo'>"+
                        "<select class='custom-select materias' name='materias' id='materias"+i+"'>"+
                            "<option selected>Materia</option>"+
                          "</select>"+
                      "</div>"+  
                      "<div class='nip'>"+
                          "<input type='password' name='nip' class='form-control' id='nip' placeholder='NIP'>"+
                      "</div>"+
                      "<div class='campo'>"+
                      "<button type='submit' class='btn btn-primary btn-sm' data-dismiss='modal' id='confirmar' name='button' onclick='subir()'>Cancelar</button>"+
                      "<button type='submit' class='btn btn-primary btn-sm'  id='confirmar2' name='solito' onclick='subir()'>Confirmar Visita</button>"+
                      "</form>"+    
                      "</div>"+
                    "</div>"+
                  "</div>"+
                "</div>"+
              "</div>"+
            "</td></tr>");
         for(var j=0;j<respuesta['resultadomaterias'].length;j++){
            $("#materias"+i).append("<option>"+respuesta['resultadomaterias'][j]['nombreMateria']+"</option>");
         }
       }
     }
    }
    else{
      alert("Error");
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
function subir(){
   event.preventDefault();
  $('form').on('click',function(){
var data = $(this).serializeArray(); 
var idvisita=$(this).closest("form").attr('id');

data.push({name: "tarea", value: "tercera"});
data.push({name: "idvisita", value: idvisita});
console.log(data);
  jQuery.ajax({
    url: 'php/consultas/programadas.php',
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
       window.setTimeout('location.reload()', 100);
    }else{
      if(respuesta['registrado']==="no"){
      alert("Comprueba los datos ingresados");
    }
    if(respuesta['registrado']==="si"){
      alert("Ya te encuentras registrado");
    }
      window.setTimeout('location.reload()', 100);
    }
  })
  .fail(function(resp){
    console.log(resp.responseText);
    console.log('No sirve');
    console.log(resp);
    alert("Comprueba los datos ingresados");
    window.setTimeout('location.reload()', 100);
  })
  .always(function(){
    console.log("complete");
  });

});
 
}




