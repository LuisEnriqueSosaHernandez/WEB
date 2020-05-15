
$(".fecha").pickadate({
    format: 'dd/mmmm/yyyy',
});

$("#botonObtener").on("click",function(){
    var valor=$("#txtFecha").val();
    console.log(valor);
});
