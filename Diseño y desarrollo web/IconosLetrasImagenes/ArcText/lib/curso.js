$("#txtArc").arctext({
    radius:300,
    //dir:-1
});

/*$("#txtArc").arctext({
    radius:500,
    rotate:false
})*/

setTimeout(function(){
$("#txtArc").arctext('set',{
radius:300,
dir:-1,
animation:{
    speed:300,
    easing:'ease-out'
}
});
},1000);