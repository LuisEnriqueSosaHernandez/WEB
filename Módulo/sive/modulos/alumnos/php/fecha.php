<?php 

//TRANSFORMA LA FECHA
function transformaFecha($fecha){

$time  = strtotime($fecha);
$day   = date('d',$time);
$month = date('m',$time);
$year  = date('Y',$time);

switch ($month) {
    case 1:
        $month="Enero";
        break;
    case 2:
        $month="Febrero";
        break;
    case 3:
        $month="Marzo";
        break;
    case 4:
        $month="Abril";
        break;

    case 5:
        $month="Mayo";
        break;

    case 6:
        $month="Junio";
        break;

    case 7:
        $month="Julio";
        break;
	
	case 8:
        $month="Agosto";
        break;

    case 9:
        $month="Septiembre";
        break;   

    case 10:
        $month="Octubre";
        break;

    case 11:
        $month="Noviembre";
        break;

    case 12:
        $month="Diciembre";
        break;
}

return $day."-".$month."-".$year;
}


function transformaFechaCorta($fecha){

$time  = strtotime($fecha);
$day   = date('d',$time);
$month = date('m',$time);
$year  = date('Y',$time);

switch ($month) {
    case 1:
        $month="ene";
        break;
    case 2:
        $month="feb";
        break;
    case 3:
        $month="mar";
        break;
    case 4:
        $month="abr";
        break;

    case 5:
        $month="may";
        break;

    case 6:
        $month="jun";
        break;

    case 7:
        $month="jul";
        break;
	
	case 8:
        $month="ago";
        break;

    case 9:
        $month="sep ";
        break;   

    case 10:
        $month="oct";
        break;

    case 11:
        $month="nov";
        break;

    case 12:
        $month="dic";
        break;
}

return $day." ".$month." ".$year;
}

function getEdad($date)
{
    @list($Y,$m,$d) = explode("-",$date);
    return(@(date("md") < $m.$d ? date("Y")-$Y-1 : date("Y")-$Y) );
}

 ?>
