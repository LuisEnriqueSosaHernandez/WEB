<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Bienvenido</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"> <!-- Permite que el sitio sea responsive -->
    <link rel="stylesheet" href="css/estilos.css">
  </head>
  <body>
    <div class="contenedor">
    <div id="slide" class="fondo">
      <img src="img/vwitver.jpg" alt="VW">
      <img src="img/inidetam.jpg" alt="INIDETAM">
      <img src="img/pelikanitver.jpeg" alt="Pelikan">
      <img src="img/panasonic.jpg" alt="Panasonic">
      <img src="img/bus.jpeg" alt="Autobus">
      <img src="img/golfo.jpg" alt="Golfo">
      <img src="img/bimbo.jpg" alt="Bimbo">
      <img src="img/busitver.jpeg" alt="Autobus">
    </div><!-- .fondo -->
    <div class="header">
      <h1 class="titulo">Sistema de Visitas a Empresas</h1>
      <h1 class="titulo2">Instituto Tecnológico de Veracruz</h1>
    </div><!-- .header -->
    <div class="footer">
      <img class="sep" src="img/sep.png" alt="SEP">
      <img class="tnm" src="img/tnm.png" alt="Tecnológico Nacional de México">
    </div><!-- .footer -->
    <div class="logo">
      <img class="escudo" src="img/logo_white.png" alt="Instituto Tecnológico de Veracruz" border="0" width="232px">
    </div><!-- .logo -->
    <div class="square">
      <div class="squarebackground"></div>
      <ul class="tabs">
        <li><a id="alu" href="#" class="active">Alumnos</a></li>
        <li><a id="doc" href="#">Docentes</a></li>
        <li><a id="adm" href="#">Administrativos</a></li>
      </ul>

      <div id="alumnos" class="form show">
        <h1>Acceso a Alumnos</h1> <br>
        <form method="post" id="form_alu">
          <input class="oculto" type="text" name="tipo" value="alumno">
          <input class="input" type="text" name="usuario" maxlength="10" pattern="[A-Za-z]{0,1}[0-9]{8,10}" title="No de Control." placeholder="No. de Control">
          <input class="input" type="password" name="contrasena" maxlength="4" pattern="[0-9]{1,4}" placeholder="NIP" title="Solo números.">
          <input type="submit" value="Ingresar" class="button">
        </form> <!-- #form -->
      </div> <!-- .form #alumnos-->


      <div id="docentes" class="form hidden">
        <h1>Acceso a Docentes</h1> <br>
        <form method="post" id="form_doc">
          <input class="oculto" type="text" name="tipo" value="docente">
          <input class="input" type="text" name="usuario" maxlength="20" pattern="[A-Z]{4}[0-9]{6}[A-Z]{2}[0-9]{1}" title="No de Control." placeholder="RFC">
          <input class="input" type="password" name="contrasena" maxlength="20" placeholder="Contraseña" title="Solo números.">
          <input type="submit" value="Ingresar" class="button">
        </form> <!-- #form -->
      </div> <!-- .form #docentes-->

      <div id="admin" class="form hidden">
        <h1>Acceso a Administrativos</h1> <br>
        <form method="post" id="form_adm">
          <input class="oculto" type="text" name="tipo" value="administrativo">
          <input class="input" type="text" name="usuario" maxlength="20" pattern="[A-Z]{4}[0-9]{6}[A-Z]{2}[0-9]{1}" title="No de Control." placeholder="RFC">
          <input class="input" type="password" name="contrasena" maxlength="20" placeholder="Contraseña" title="Solo números.">
          <input type="submit" value="Ingresar" class="button">
        </form> <!-- #form -->
      </div> <!-- .form #administrativos-->
    </div> <!-- .square -->
  </div> <!-- .contenedor -->

  <script src="js/jquery-3.2.1.js"></script>
  <script src="js/popper.js"></script>
  <script src="js/login.js"></script>
  <script src="js/slideshow.js"></script>
  <script src="js/log.js"></script>
  </body>
</html>
