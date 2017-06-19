function comenzar(){
    zonadatos=document.getElementById("zondatos");
    var boton=document.getElementById("archivos");
    boton.addEventListener("change",subir_archivos,false);
    
    
    }
    function subir_archivos(e){
        var archivos=e.target.files;
        var archivo=archivos[0];
        var url="procesar2.php"
        var solcicitud=new XMLHttpRequest();
        var subida=solicitud.upload;
        subida.addEventListener("loadstart",comienza_barra,false);
        subida.addEventListener("progress",estado_barra,false);
        subida.addEventListener("load",mostrar,false);
        solicitud.open("POST",url,true);
        var datos=new FormDta();
        datos.append("archivo",archivo);
        solicitud.send(datos);
    }
    function comienza_barra(){
        zonadatos.innerHTML="<progress value='0' max='100'></progress>";
        
    }
    function estado_barra(e){
        var porcentaje=parseInt(e.loaded/e.total*100);
        var barraprogreso=zonadatos.querySelector("progress");
        barraprogreso.value=porcentaje;
        zonaprogreso.innerHTML=porcentaje+" %";
    }
    function mostrar(e){
     zonadatos.innerHTML="terminado";   
    }
window.addEventListener("load",comenzar,false);


