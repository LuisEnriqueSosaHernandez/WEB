// Nuestro código irá aquí
var arregloPines= [];
//Función para agregar pines

    function agregarMarcador(location){
        var pin = new google.maps.Marker({
            position: location,
            map: map,
            //animation: google.maps.Animation.DROP;
        });
        console.log("Latitud: "+location.lat());
        console.log("Longitud: "+location.lng());

        for(var i in arregloPines){
            arregloPines[i].setMap(null);
        }

        arregloPines.push(pin);
    }

function cargar_mapa(){
    var myOptions={
        zoom: 13,
        center: new google.maps.LatLng(29.0758564,-110.9702874),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("gmap_canvas"),myOptions)

    //Agregar listener click
    map.addListener('click',function(event){
        console.log(event);
        agregarMarcador(event.latLng);
    })

    var pin = new google.maps.Marker({
        position: new google.maps.LatLng(29.0758564,-110.9702874),
        map: map,
        tittle: "Hola mundo"
    });
    arregloPines.push(pin);
}