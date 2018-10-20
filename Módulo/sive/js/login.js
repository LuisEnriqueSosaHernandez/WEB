$('#doc').click(function(){
  $('#doc').addClass("active");
  $('#alu').removeClass("active");
  $('#adm').removeClass("active");
  $('#alumnos').hide("fast");
  $('#admin').hide("fast");
  $('#docentes').show("fast");
})

$('#alu').click(function(){
  $('#alu').addClass("active");
  $('#doc').removeClass("active");
  $('#adm').removeClass("active");
  $('#docentes').hide("fast");
  $('#admin').hide("fast");
  $('#alumnos').show("fast");
})

$('#adm').click(function(){
  $('#adm').addClass("active");
  $('#alu').removeClass("active");
  $('#doc').removeClass("active");
  $('#alumnos').hide("fast");
  $('#docentes').hide("fast");
  $('#admin').show("fast");
})
