$(  ).ready(function(){
	var $div=$("#contenedor");
	for (var i = 1; i < 10; i++) {
		$div.append("<img"+"src="+"images/"+i+".jpg"+">");
	}
});