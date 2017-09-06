var api = "https://fcc-weather-api.glitch.me/api/current?";
var lat, lon;
var tempUnit = 'C';
var currentTempInCelsius;

$( document ).ready(function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      clima(lat, lon);
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
  
})

function clima(lat, lon) {
  var urlString = api + lat + "&" + lon;
  $.ajax({
    url: urlString, success: function (result) {
      $("#ciudad").text(result.name + ", ");
      $("#localidad").text(result.sys.country);
      currentTempInCelsius = Math.round(result.main.temp * 10) / 10;
      $("#temperatura").text(currentTempInCelsius);
      $("#letra").text(tempUnit);
      $("#icono").text(result.weather[0].main);
      icono(result.weather[0].main);
    }
  });
}
$("#letra").click(function(){
  if(document.getElementById("letra").textContent=='C'){
currentTempInCelsius=((currentTempInCelsius*9)/5)+32;
document.getElementById("temperatura").innerHTML =currentTempInCelsius.toString();
document.getElementById("letra").innerHTML="F";
}else{
currentTempInCelsius=((currentTempInCelsius-32)*5)/9;
document.getElementById("temperatura").innerHTML =currentTempInCelsius.toString();
document.getElementById("letra").innerHTML="C";
}
});

 function icono(param){
      param= param.toLowerCase();
      if(param=="clouds"){
$("#nube").removeClass('hide');
}else if(param=="rain"){
  $("#lluvia").removeClass('hide');
}else if(param=="snow"){
  $("#nieve").removeClass('hide');
}else if(param=="clear"){
  $("#sol").removeClass('hide');
}
else if(param=="thunderstom"){
  $("#trueno").removeClass('hide');
}
}


