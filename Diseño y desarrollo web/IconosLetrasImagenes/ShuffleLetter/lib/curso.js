var txtMezclar = $("#txtMezclar");
var txtText = $("#txtText");

var mensajes=["Hola karina","El mas perrón","la mama de las gallinas","Asi no se hace","quitate alv"];
var actual=0;

txtMezclar.text(mensajes[0]);

//txtMezclar.shuffleLetters();

txtText.on("keypress",function(e){
//console.log(e.keyCode);
if(e.keyCode===13){
    txtMezclar.shuffleLetters({
        "text": txtText.val()
    });
}
});

setInterval(function(){
    //console.log("Pasaron 4 segundos");
    actual++;
    if(actual>=mensajes.length){
        actual=0;
    }

    txtMezclar.shuffleLetters({
        "text": mensajes[actual]
    });
        
},4000);