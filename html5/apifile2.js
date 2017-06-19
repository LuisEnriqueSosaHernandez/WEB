function comenzar(){
    zonadatos.document.getElementById("zonadatos");
    var boton=document.getElementById("boton");
    boton.addEventListener("click",escribir_archivo,false);
    
    navigator.webkitPersistentStorage.requestQuota(5*1024*1024,acceso);
}
function acceso(){
   window.webkitRequestFileSystem(PERSISTENT,5*1024*1024,crearsis,errores); 
}
function crearsis(sistema){
    espacio=sistema.root;
}

function errores(e){
    alert("ha habido un error"+e.code);
}
function escribir_archivo(){
   var nombre=document.getElementById("archivo_origen").value;
   espaciogetFile(nombre,{create:true,exclusive:false},function(entrada){
       entrada.createWriter(escribir_contenido,errores);
   },errores);
   
}
function escribir_contenido(fileWriter){
    var texto=document.getElementById("texto").value;
    fileWriter.onwriteend=exito;
    var blob=new Blob([texto],{type:"texto/html"});
    fileWriter.write(blob);
}
function exito(){
    document.getElementById("archivo_origen").value="";
    document.getElementById("texto").value="";
    zonadatos.innerHTML="Has tenido exito";
}
window.addEventListener("load",comenzar,false);