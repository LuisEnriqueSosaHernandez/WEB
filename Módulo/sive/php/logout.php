<?php
session_start(); //Inicia la sesion para recuperar los datos del array $_SESSION
session_destroy(); //Elimina la sesion por completo
header('Location: ../modulos/alumnos/index.php'); //Redirige el usuario a la pagina login
 ?>
