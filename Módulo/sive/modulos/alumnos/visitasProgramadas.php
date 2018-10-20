<?php 
  require 'php/checarSesion.php';
 ?>

<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title>Visitas Programadas</title>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <!-- Permite que el sitio sea responsive -->
      <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <link rel="stylesheet" href="css/index.css">
      <link rel="stylesheet" href="css/header.css">
      <link rel="stylesheet" href="css/datatables.min.css"/>
      <link rel="stylesheet" href="css/modal.css">
      <!-- si agrego esto se ve el icono pero se jode todo lo demas, no se que boostrap esten usando
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">-->
   </head>
   <body>
      <header>
         <?php include('header.php') ?>
      </header>
      <img class="logo" src="img/itver.png" alt="">
      <div class="container">
      <div class="textoEncabezado">
         <h3>Visitas programadas</h3>
         <div class="periodo">
            <?php 
            require_once('php/consultas/periodo.php');
            $periodo=definirPeriodo();
             ?>
             <!--EL NOMBRE DEL PERIODO TAMBIEN TIENE QUE SER DINÁMICO BATO!!-->
            <h3>Periodo: <span class="mesesPeriodo"><?php echo $periodo ?></span></h3>
         </div>
      </div>
<div class="container filtros" style="font-weight: 700;">
  <div class="row head filtrar">
    <div >Filtrar<span class="glyphicon glyphicon-zoom-in"></div>
  </div>
     <form class="c-inf" action="php/consultas/programadas.php" method="post" id="filtro" >
      <div class="row">
    <div class="col-md-4 text-center"><span class="tituloFiltro">Filtrar por Fecha</span><br>
<input type="date" name="fecha1" id="fecha1">
<input type="date" name="fecha2" id="fecha2"></div>
    <div class="col-md-3 text-center"><span class="tituloFiltro">Filtrar por Empresa</span><br><select class="custom-select" id="empresa" name="empresa"><option class="custom-select" >Empresa</option></select></div>
    <div class="col-md-3 text-center"><span class="tituloFiltro">Filtrar por Ubicación</span><br><select class="custom-select" id="ubicacion" name="ubicacion"><option class="custom-select" >Ubicación</option></select></div>
    <div class="col-md-2"><br><button type="submit" class="form-control btn-primary filtrar" name="filtrar">Filtrar</button></div>
  </div>
   </form>
</div>
<div class="container" id="visitas">
  <table id="example" class="table table-striped" cellspacing="0" >
        <thead id="table_header">
            <tr>
                <th class="head text-center"> Fecha </th>
                <th class="head text-center"> Hora</th>
                <th class="head text-center"> Información </th>
                <th class="head">Registrar</th>
            </tr>

        </thead>
    <!--    <tfoot>
            <tr>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Información de Visita</th>
                <th>Registro</th>
            </tr>
        </tfoot>-->
        <tbody id="cuerpa">

        <!--    <tr>
                <td>02 Sep 2017</td>
                <td>9:00 hrs.</td>
                <td>INAOE <br><span class="m-text"><span class="bot-text">Puebla</span> <br>Docente: <span class="bot-text">Martha Martínez Moreno</span></span></td>-->
                
                <!--AQUI EMPIEZA EL BOTÓN-->
                
                <!--<div class="container">
  
              <td>
              <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal">Aiuda</button>-->
              
                <!-- Modal -->
              <!--<div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">-->

                  <!-- Modal content-->
                 <!-- <div class="modal-content">
                    <div class="modal-header">
                      <h4 class="modal-title" id="titulo_ modal">Confirmar Visita</h4>
                      <button type="button" class="close" data-dismiss="modal"  id="cerrar">&times;</button>
                    </div>
                    <div class="modal-body">
                      <h6 class="titulo">Nombre de la Empresa</h6>
          
                      
                      <div class="campo">
                        <div><p class="titulo_campo">Lugar:</p></div>
                        <div><p class="valor_campo">Xalapa</p></div>
                      </div>
                      
                     <div class="campo">
                        <div><p class="titulo_campo">Fecha:</p></div>
                        <div><p class="valor_campo">10Sep</p></div>
                      </div>
                      
                      <div class="campo">
                        <div><p class="titulo_campo">Hora:</p></div>
                        <div><p class="valor_campo">10:00</p></div>
                      </div>
                      <br>
                      <div class="campo">
                        <div><p class="titulo_campo">Docente Encargado:</p></div>
                        <div><p class="valor_campo">Gullermo Muñoz Arzate</p></div>
                      </div>
                      <br>
                      <div class="campo" id="importante">
                        <div><p class="titulo_campo">Importante:</p></div>
                        <div><p class="valor_campo" >Ingresa el NIP proporcionado por tu profesor para continuar</p></div>
                      </div>
                      
                      <div class="campo" id="select_1">-->
                           <!--<select class="form-control materias">-->
                            <!--ESTO SE LLENA CON UNA CONSULTA-->
                            <!--<option>Materia</option>
                            <option>TBD</option>
                            <option>ISW</option>
                            <option>Redes</option>
                            <option>Programación Web</option>
                          </select>
                      </div>
                      
                      
                      <div class="nip">
                          <input type="password" name="nip" class="form-control" id="nip" placeholder="NIP">
                      </div>
                      
                      
                      <div class="campo">
                      <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal" id="confirmar">Confirmar Visita</button>    
                      </div>
                      
                      
                    </div>
                  </div>
                </div>
              </div>
            </td>
                
                
            </tr>-->
            
        </tbody>
    </table>
</div>

      </div>
      <script src="js/jquery-3.2.1.min.js"></script>
      <script src="js/popper.js"></script>
      <script src="js/bootstrap.min.js"></script>
      <script src="js/jquery.dataTables.min.js"></script>
      <script src="js/dataTables.bootstrap.min.js"></script>
      <script src="js/programadas.js" type="text/javascript" charset="utf-8" async defer></script>
     <!--<script>
        $('#example').dataTable( {
  		"lengthChange": false,
  		"paging":false,
  		"info":false,
  		"oLanguage": {
  		"sSearch": "<span>Buscar:</span> _INPUT_" //search
		}
		});-->

      </script>
   </body>
</html>
