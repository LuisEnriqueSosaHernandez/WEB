$(document).ready(function(){
//
var seguidor=[];
var direccion="https://wind-bow.glitch.me/twitch-api/streams/freecodecamp";
$.getJSON(direccion,function(data1){
if(data1.stream===null){
	$("#status").html("FreeCodeCamp is OFFLINE");
}else{
	$("#status").html("FreeCodeCamp is ONLINE");
}
});
var seguidores="https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels/";
$.getJSON(seguidores,function(data2){
for(var i=0;i<data2.follows.length;i++){
var channels=data2.follows[i].channel.display_name;
seguidor.push(channels);
}
for(var i=0;i<seguidor.length;i++){
	var direccion2='https://wind-bow.glitch.me/twitch-api/streams/'+seguidor[i]+'/?callback=?';
	$.getJSON(direccion2).done(function(data3){
		var logo;
		var status;
		var name;
		if(data3.error){
			logo="error";
			name=data3.message;
			status=data3.error;
			$("#seguidorinfo").prepend("<div class='row'>"+"<div class='col-md-4'>"+"<p>"+logo+"</p>"+"</div>"+
				"<div class='col-md-4'>"+name+"</div>"+"<div class='col-md-4'>"+status+"</div></div>");
		}
		
	});
}
var status2;
	var logo2;
	
for(var i=0;i<seguidor.length;i++){
	
	var enLineaUrl="https://wind-bow.glitch.me/twitch-api/streams/"+seguidor[i];

	var datosSeguidores="https://wind-bow.glitch.me/twitch-api/users/freecodecamp/follows/channels/"+seguidor[i];
	$.getJSON(enLineaUrl,function(data4){
			if(data4.stream!=null){
				status2="online";
            }	else{
            	status2="offline";
            }    
           	
	});
	$.getJSON(datosSeguidores,function(data5){
			logo2=data5.channel.logo;
			name2=data5.channel.display_name;	
			if(logo2==null){
$("#seguidorinfo").prepend("<div class='row'><div class='col-md-4'><img src='https://upload.wikimedia.org/wikipedia/commons/3/36/NULL.jpg'></div><div class='col-md-4'><a href='https://www.twitch.tv/"+name2+"' target='_blank'><p>"+name2+"</p></a></div><div class='col-md-4'<p>"+status2+"</p></div></div>");
			}else{
				$("#seguidorinfo").prepend("<div class='row'><div class='col-md-4'><img src='"+logo2+"'></div><div class='col-md-4'><a href='https://www.twitch.tv/"+name2+"' target='_blank'><p>"+name2+"</p></a></div><div class='col-md-4'<p>"+status2+"</p></div></div>");
			}
			
	});

}


});
});







