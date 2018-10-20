<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Catálogo de Empresas</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> <!-- Permite que el sitio sea responsive -->
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/font-awesome.min.css"> <!-- Iconos libres desde la web fontawesome.io (Opcional) -->
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/visitas.css">
    <link rel="stylesheet" href="css/header.css">
  </head>
  <body>
    <header>
      <?php include('header.php') ?>
    </header>
    <img class="logo" src="img/itver.png" alt=""> <!-- Logo de fondo -->
    <div class="content"> <!-- Empieza el contenido de la pagina -->
      <br>
      <h3>CATÁLOGO DE EMPRESAS AUTORIZADAS</h3> <!-- Encabezado de la pagina -->
      <br>
      <div class="row leftbar"> <!-- Sistema Grid -->
        <div class="col-sm-3">  <!-- Columna para el listado de empresas -->
            <!-- Termina sistema Grid -->
          <div id="accordion" role="tablist" aria-multiselectable="true"> <!-- Collapse Accordion - Area para el detalle de Empresas -->
            <?php
              include('php/consultas/consultaMySQLi.php');

              $sql = "SELECT * FROM Empresa ORDER BY NombreEmpresa"; //Prepara la consulta

              $empresas= consultaSQL($sql);
              //$empresas = query($sql); //Llama a la funcion que ejecutara la consulta
              
              //¡IMPORTANTE! LAS RUTAS DE LOS ARCHIVOS 
              $ruta='../archivos/img/empresas/';
              $reglamento='../archivos/pdf/';

              $i=0;
              $html = "";
              foreach ($empresas as $value) { //Prepara e imprime los elementos obtenidos de la bd en la web
                if($i == 0){
              ?>
            <div class="card">  <!-- Tarjeta con la informacion de la empresa -->
              <a class="collapsed main" data-toggle="collapse" data-parent="#accordion" href="#detail<?php echo $value['ID_Empresa']; ?>" aria-expanded="true" aria-controls="detail<?php echo $value['ID_Empresa']; ?>"> <!-- Titulo de la tarjeta -->
                
                <div class="card-header" role="tab" id="header<?php echo $value['ID_Empresa']; ?>">
                  <h5 class="mb-0">
                  <?php echo $value['NombreEmpresa']; ?>
                  </h5>
                </div>
              </a>  <!-- Termina titulo de la empresa -->
              <div id="detail<?php echo $value['ID_Empresa']; ?>" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                <div class="card-block bardetail">  <!-- Contenido de la tarjeta -->
                  
                  <!-- Logo de la empresa -->
                  <img class="card-img-top logoEmpresamin" src="<?php echo $ruta.$value['LogoDeEmpresa']; ?>" alt="<?php echo $value['NombreEmpresa']; ?>">  
                  
                  
                  <!-- Ubicacion -->
                  <div class="campo">
                  <p class="det-inf">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <?php echo $value['Ubicacion']; ?>
                  </p>  
                  </div>
                  
                  <!-- Página Web -->
                  <div class="campo">
                  <a class="det-inf" target="_blank" href=<?php echo $value['PaginaWeb'];?>>
                     <i class="fa fa-globe" aria-hidden="true"></i>
                     <?php echo $value['PaginaWeb']; ?>
                  </a>
                  </div>
                  
                  <!-- Reglamento -->
                  <?php 
                  if(file_exists($reglamento.$value['Reglamento']))
                        {
                          ?>
                          <div class="campo">
                          <i class="fa fa-download" aria-hidden="true"></i>
                          <a class="det-inf" href=<?php echo $reglamento.$value['Reglamento'] ?> download>Reglamento</a>
                          </div>
                  <?php }?>
                  <!-- Adicional -->
                  <div>
                  <p class="visit">¿Quieres visitar esta empresa?</p>
                  <div class="boton">
                  <a class="proximasFechas" href="visitasProgramadas.php">Ver próximas fechas</a>
                  </div>
                  </div>

                </div>  <!-- Termina contenido de la tarjeta -->
              </div>
            </div>  <!-- Termina tarjeta con la informacion de la empresa -->
          <?php $i++; ?>

          <?php }else{ ?>
            <div class="card">
              <a class="collapsed main" data-toggle="collapse" data-parent="#accordion" href="#detail<?php echo $value['ID_Empresa']; ?>" aria-expanded="false" aria-controls="detail<?php echo $value['ID_Empresa']; ?>">
                <div class="card-header" role="tab" id="header<?php echo $value['ID_Empresa']; ?>">
                  <h5 class="mb-0">
                  <?php echo $value['NombreEmpresa']; ?>
                  </h5>
                </div>
              </a>
              <div id="detail<?php echo $value['ID_Empresa']; ?>" class="collapse" role="tabpanel" aria-labelledby="headingOne">
                <div class="card-block bardetail">
                  
                  
                  
                  <!-- Logo de la empresa -->
                  <img class="card-img-top logoEmpresamin" src="<?php echo $ruta.$value['LogoDeEmpresa']; ?>" alt="<?php echo $value['NombreEmpresa']; ?>">  

                  <!-- Ubicacion -->
                  <div class="campo">
                  <p class="det-inf">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    <?php echo $value['Ubicacion']; ?>
                  </p>  
                  </div>
                  
                  <!-- Página Web -->
                  <div class="campo">
                  <a class="det-inf" target="_blank" href=<?php echo $value['PaginaWeb'];?>>
                     <i class="fa fa-globe" aria-hidden="true"></i>
                     <?php echo $value['PaginaWeb']; ?>
                  </a>
                  </div>
                  
                  
                  <!-- Reglamento -->
                  <?php 
                  if(file_exists($reglamento.$value['Reglamento']))
                        {
                          ?>
                          <div class="campo">
                          <i class="fa fa-download" aria-hidden="true"></i>
                          <a class="det-inf" href=<?php echo $reglamento.$value['Reglamento'] ?> download>Reglamento</a>
                          </div>
                  <?php }?>


                  
                          
                          
                  
                  <div>
                  <p class="visit">¿Quieres visitar esta empresa?</p>
                  <div class="boton">
                  <a class="proximasFechas" href="visitasProgramadas.php">Ver próximas fechas</a>
                  </div>
                  </div>

                </div>
              </div>
            </div>
          <?php } ?>

        <?php } ?>
          </div>
        </div>

        <div class="col-sm-9">  <!-- Columna con el detalle de las empresas -->
          <?php
            $i = 0;
            $html = "";

            foreach ($empresas as $value) {
            if($i==0){?>
          <div class="card mb-3 detail enable detailheader<?php echo $value['ID_Empresa']; ?>"> <!-- Tarjeta con la informacion de una empresa -->
           <?php 
           if(file_exists($ruta.$value['Imagen'])){

            ?>
           <img class="card-img-top header" src="<?php echo $ruta.$value['Imagen']; ?>" alt="<?php echo $value['NombreEmpresa']; ?>"> <!-- Imagen de la empresa -->
            
            <?php  }?>

          <h6 class="nombreEmpresa">
            <?php echo $value['NombreEmpresa'] ?>
          </h6>
           
           

           <div class="card-block"> <!-- Contenido de la tarjeta -->
             <p class="card-text"><?php echo $value['DescripcionEmpresa']; ?></p>
             <br>
             <div id="accordion<?php echo $value['ID_Empresa']; ?>" role="tablist" aria-multiselectable="true">
              <div class="card">
                <a data-toggle="collapse" data-parent="#accordion<?php echo $value['ID_Empresa']; ?>" href="#collapse<?php echo $value['ID_Empresa']; ?>" aria-expanded="false" aria-controls="collapse<?php echo $value['ID_Empresa']; ?>">
                <div class="card-header" role="tab" id="headingOne">
                  <h5 class="mb-0">
                      Áreas a Visitar
                  </h5>
                </div>
                </a>

                <div id="collapse<?php echo $value['ID_Empresa']; ?>" class="collapse show" role="tabpanel" aria-labelledby="heading<?php echo $value['ID_Empresa']; ?>">
                  <?php
                    $sql="SELECT area.NombreArea, area.DescripcionArea  FROM area WHERE area.ID_Empresa=".$value['ID_Empresa'];
                    $areas=consultaSQL($sql);

                   ?>
                  <div class="card-block">
                    <ul class="list-group">
                      <?php foreach ($areas as $area) { ?>
                      <li class="list-group-item">
                        <p class="tituloArea"><?php echo $area['NombreArea']; ?> <p>
                        <p class="descripcionArea"> <?php echo $area['DescripcionArea']; ?> </p>
                       </li>
                    <?php } ?>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
           </div> <!-- Termina contenido de la tarjeta -->
          </div>  <!-- Termina tarjeta con la informacion de una empresa -->
           <?php $i++; ?>
         <?php }else{ ?>

          <div class="card mb-3 detail disable detailheader<?php echo $value['ID_Empresa']; ?>">

            <?php 
           if(file_exists($ruta.$value['Imagen'])){
              ?>
           <img class="card-img-top header" src="<?php echo $ruta.$value['Imagen']; ?>" alt="<?php echo $value['NombreEmpresa']; ?>"> <!-- Imagen de la empresa -->
            
            <?php  }?>

            <h6 class="nombreEmpresa">
            <?php echo $value['NombreEmpresa'] ?>
          </h6>

            
            <div class="card-block">
              <p class="card-text"><?php echo $value['DescripcionEmpresa']; ?></p>
              <br>
              <div id="accordion<?php echo $value['ID_Empresa']; ?>" role="tablist" aria-multiselectable="true">
               <div class="card">
                 <a data-toggle="collapse" data-parent="#accordion<?php echo $value['ID_Empresa']; ?>" href="#collapse<?php echo $value['ID_Empresa']; ?>" aria-expanded="false" aria-controls="collapse<?php echo $value['ID_Empresa']; ?>">
                 <div class="card-header" role="tab" id="headingOne">
                   <h5 class="mb-0">
                       Áreas a Visitar
                   </h5>
                 </div>
                 </a>

                 <div id="collapse<?php echo $value['ID_Empresa']; ?>" class="collapse show" role="tabpanel" aria-labelledby="heading<?php echo $value['ID_Empresa']; ?>">
                   <?php
                     $sql="SELECT area.NombreArea, area.DescripcionArea  FROM area WHERE area.ID_Empresa=".$value['ID_Empresa'];
                     $areas=consultaSQL($sql);

                    ?>
                   <div class="card-block">
                     <ul class="list-group">
                       <?php foreach ($areas as $area) { ?>
                       <li class="list-group-item">
                        <p class="tituloArea"><?php echo $area['NombreArea']; ?> </p>
                        <br>
                        <p class="descripcionArea"> <?php echo $area['DescripcionArea']; ?> </p>
                       </li>
                     <?php } ?>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>
            </div>
          </div>
        <?php } ?>
      <?php } ?>
        </div>  <!-- Termina columna con el detalle de las empresas -->
      </div>

    </div>
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/loadcompany.js"></script>
  </body>
</html>
