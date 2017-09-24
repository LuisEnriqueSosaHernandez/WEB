$(document).ready(function(){
$("#buscar").click(function(){
	//recuperando resultados
var busqueda=$("#busqueda").val();
var direccion="https://wikipedia.org/w/api.php?action=opensearch&search="+busqueda+"&format=json&callback=?";

$.ajax({

type:"GET",
url:direccion,
async:false,
dataType:"json",
success:function(data){
//title console.log(data[1][0]);
//description console.log(data[2][0]);
//link console.log(data[3][0]);
if(busqueda!=""){
	$("#salida").html("");
	for(var i=0;i<data[1].length;i++){
$("#salida").prepend("<li><a href="+data[3][i]+" target='_blank'><h2>"+data[1][i]+"</h2></a><p>"+data[2][i]+"</p></li>");
}
$("#lista").addClass("lista");
}
},
error:function(errorMessage){
alert("Evil")
}
});
});
});