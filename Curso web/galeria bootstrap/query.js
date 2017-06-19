$(document).ready(function(){
    var $div=$("#contenedor");
	for (var i = 1; i < 10; i++) {
		$div.append("<div class='col-md-4' 'container'><img "+"src="+"images/"+i+".jpg"+"></div>");
	}
});