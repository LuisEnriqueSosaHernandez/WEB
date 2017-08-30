$(document).ready(function(){
  //use ajax call with jsonp to get a quote
  $.ajax({
    dataType: "jsonp",
    url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en",
    success: function(json){
     document.getElementById("note").innerHTML =json["quoteText"] ;
      document.getElementById("user").innerHTML ="-"+json["quoteAuthor"];
    }
  });
});
			

$( "#button" ).click(function() {
   $.ajax({
    dataType: "jsonp",
    url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en",
    success: function(json){
      document.getElementById("note").innerHTML =json["quoteText"] ;
      document.getElementById("user").innerHTML ="-"+json["quoteAuthor"];
    }
  });
});
$( "i" ).click(function() {
   $.ajax({
    dataType: "jsonp",
    url: "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=?&lang=en",
    success: function(json){
      document.getElementById("note").innerHTML =json["quoteText"] ;
      document.getElementById("user").innerHTML ="-"+json["quoteAuthor"];
    }
  });
});