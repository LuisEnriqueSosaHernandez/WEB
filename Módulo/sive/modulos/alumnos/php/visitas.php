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
    
    <div class="content"> 
      <h3>CATÁLOGO DE EMPRESAS AUTORIZADAS</h3> <!-- Encabezado de la pagina -->
      <div class="row leftbar"> <!-- Sistema Grid -->
        <div class="col-sm-3">  <!-- Columna para el listado de empresas -->
         <div id="accordion" role="tablist" aria-multiselectable="true"> <!-- Collapse Accordion - Area para el detalle de Empresas -->
            <div class="card">  <!-- Tarjeta con la informacion de la empresa -->
              <a class="collapsed main" data-toggle="collapse" data-parent="#accordion" href="#detail0" aria-expanded="true" aria-controls="detail0"> <!-- Titulo de la tarjeta -->
                <div class="card-header" role="tab" id="header0">
                  <h5 class="mb-0">
                  Tenaris Tamsa
                  </h5>
                </div>
              </a>  <!-- Termina titulo de la empresa -->
              <div id="detail0" class="collapse show" role="tabpanel" aria-labelledby="headingOne">
                <div class="card-block bardetail">  <!-- Contenido de la tarjeta -->
                  <img class="card-img-top logoEmpresamin" src="img/LogoEmpresa/tenaristamsa.jpg" alt="Tenaris Tamsa">  <!-- Logo de la empresa -->
                  <p class="det-inf"><i class="fa fa-map-marker" aria-hidden="true"></i>Veracruz, México</p>  <!-- Ubicacion -->
                  <p class="det-inf"><i class="fa fa-globe" aria-hidden="true"></i>www.tenaristamsa.com/</p>  <!-- Sitio Web -->
                  <p class="det-inf"><i class="fa fa-download" aria-hidden="true"></i>Reglamento</p>  <!-- Link al Reglamento -->
                  <p class="visit">¿Quieres visitar esta empresa?</p>
                  <button type="button" class="btn btn-primary btn-sm">Ver Próximas Fechas</button>
                </div>  <!-- Termina contenido de la tarjeta -->
              </div>
            </div>  <!-- Termina tarjeta con la informacion de la empresa -->

            <div class="card">
              <a class="collapsed main" data-toggle="collapse" data-parent="#accordion" href="#detail1" aria-expanded="false" aria-controls="detail1">
                <div class="card-header" role="tab" id="header1">
                  <h5 class="mb-0">
                  Bimbo
                  </h5>
                </div>
              </a>
              <div id="detail1" class="collapse" role="tabpanel" aria-labelledby="headingOne">
                <div class="card-block bardetail">
                  <img class="card-img-top logoEmpresamin" src="img/logoEmpresa/bimbo.png" alt="Bimbo">
                  <p class="det-inf"><i class="fa fa-map-marker" aria-hidden="true"></i>Veracruz, México</p>
                  <p class="det-inf"><i class="fa fa-globe" aria-hidden="true"></i>www.grupobimbo.com/</p>
                  <p class="det-inf"><i class="fa fa-download" aria-hidden="true"></i>Reglamento</p>
                  <p class="visit">¿Quieres visitar esta empresa?</p>
                  <button type="button" class="btn btn-primary btn-sm">Ver Próximas Fechas</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-sm-9">  <!-- Columna con el detalle de las empresas -->
          <div class="card mb-3 detail enable detailheader0"> <!-- Tarjeta con la informacion de una empresa -->
           <img class="card-img-top header" src="img/logoEmpresa/img_tenaristamsa.jpg" alt="Tenaris Tamsa"> <!-- Imagen de la empresa -->
           <img class="card-img-top logoEmpresa" src="img/logoEmpresa/tenaristamsa.jpg" alt="Tenaris Tamsa">  <!-- Logo de la empresa -->
           <div class="card-block"> <!-- Contenido de la tarjeta -->
             <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
             <div id="accordion" role="tablist" aria-multiselectable="true">
              <div class="card">
                <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                <div class="card-header" role="tab" id="headingOne">
                  <h5 class="mb-0">
                      Áreas a Visitar
                  </h5>
                </div>
                </a>

                <div id="collapseOne" class="collapse" role="tabpanel" aria-labelledby="headingOne">
                  <div class="card-block">
                    <ul class="list-group">
                      <li class="list-group-item">Producción
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </li>
                      <li class="list-group-item">Maquinaria
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
           </div> <!-- Termina contenido de la tarjeta -->
         </div>  <!-- Termina tarjeta con la informacion de una empresa -->
          <div class="card mb-3 detail disable detailheader1">
            <img class="card-img-top header" src="img/logoEmpresa/img_bimbo.jpg" alt="Bimbo">
            <img class="card-img-top logoEmpresa" src="img/logoEmpresa/bimbo.png" alt="Bimbo">
            <div class="card-block">
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
        </div>  <!-- Termina columna con el detalle de las empresas -->
      </div>

    </div>
    <script src="js/jquery-3.2.1.min.js"></script>
    <script src="js/popper.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/loadcompany.js"></script>
  </body>
</html>
