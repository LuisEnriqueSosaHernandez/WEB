var $imagen = $("#foto");
var $caja = $("#caja");
var colorThief = new ColorThief();
var prueba;

colorDominante = colorThief.getColor(img);
red = colorDominante[0];
green = colorDominante[1];
blue = colorDominante[2];

console.log(colorDominante);

$caja.css('background-color','rgb('+red+','+','+blue+')');

var colorThief = new ColorThief();
var colores = colorThief.getPalette($imagen[0],8);
console.log(colores);
