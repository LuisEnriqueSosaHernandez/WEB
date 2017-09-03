var mediaquery = window.matchMedia("(min-width: 1200px)");


$(document).ready(function(){
	$('header img').animate({
		'margin-top':'0%'
	},1000);
	if (mediaquery.matches) {
	$('header h1').animate({
		'margin-left':'0%'
	},1000);
}
 $("#btn1").click(function(){
        $("#zocalo").addClass( "borde");
        $("#imgzocalo").removeClass('ocultar');
        $("#imgportales").addClass('ocultar');
        $("#imgpalacio").addClass('ocultar');
        $("#imgcatedral").addClass('ocultar');
        $("#txtzocalo").removeClass('ocultar');
        $("#txtportales").addClass('ocultar');
        $("#txtpalacio").addClass('ocultar');
        $("#txtcatedral").addClass('ocultar');
        $("#portales").removeClass( "borde");
        $("#palacio").removeClass( "borde");
        $("#catedral").removeClass( "borde");

    });
 $("#btn2").click(function(){
         $("#zocalo").removeClass( "borde");
        $("#portales").addClass( "borde");
         $("#imgzocalo").addClass('ocultar');
        $("#imgportales").removeClass('ocultar');
        $("#imgpalacio").addClass('ocultar');
        $("#imgcatedral").addClass('ocultar');
         $("#txtzocalo").addClass('ocultar');
        $("#txtportales").removeClass('ocultar');
        $("#txtpalacio").addClass('ocultar');
        $("#txtcatedral").addClass('ocultar');
        $("#palacio").removeClass( "borde");
        $("#catedral").removeClass( "borde");
    });
 $("#btn3").click(function(){
        $("#zocalo").removeClass( "borde");
        $("#portales").removeClass( "borde");
        $("#palacio").addClass( "borde");
         $("#imgzocalo").addClass('ocultar');
        $("#imgportales").addClass('ocultar');
        $("#imgpalacio").removeClass('ocultar');
        $("#imgcatedral").addClass('ocultar');
         $("#txtzocalo").addClass('ocultar');
        $("#txtportales").addClass('ocultar');
        $("#txtpalacio").removeClass('ocultar');
        $("#txtcatedral").addClass('ocultar');
        $("#catedral").removeClass( "borde");
    });
 $("#btn4").click(function(){
        $("#zocalo").removeClass( "borde");
        $("#portales").removeClass( "borde");
        $("#palacio").removeClass( "borde");
        $("#catedral").addClass( "borde");
         $("#imgzocalo").addClass('ocultar');
        $("#imgportales").addClass('ocultar');
        $("#imgpalacio").addClass('ocultar');
        $("#imgcatedral").removeClass('ocultar');
        $("#txtzocalo").addClass('ocultar');
        $("#txtportales").addClass('ocultar');
        $("#txtpalacio").addClass('ocultar');
        $("#txtcatedral").removeClass('ocultar');
    });
});
