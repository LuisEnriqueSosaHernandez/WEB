var $caja = $("#cajaRoja");

/*TweenMax.to($caja,2,{
    y: "+=200",
    ease: Bounce.easeOut
});*/

var tl = new TimelineMax();

tl.to($caja,1,{
    width:"50px"
}).to($caja,1,{
    height:"50px"
},"-1").to($caja,1,{
    backgroundColor:"blue"
});

/*setTimeout(function(){
    tl.pause()
},3000);

setTimeout(function(){
    tl.play()
},4000);*/