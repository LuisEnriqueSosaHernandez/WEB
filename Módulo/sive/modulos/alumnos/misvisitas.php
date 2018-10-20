<!DOCTYPE html>
<html>
<head>
	<title>Mis Visitas</title>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
      <!-- Permite que el sitio sea responsive -->
      <link rel="stylesheet" href="font-awesome/css/font-awesome.min.css">
      <link rel="stylesheet" href="css/bootstrap.min.css">
      <link rel="stylesheet" href="css/index.css">
      <link rel="stylesheet" href="css/header.css">
      <link rel="stylesheet" href="css/datatables.min.css"/>
      <script src="js/jquery-3.2.1.min.js"></script>
      <script src="js/popper.js"></script>
      <script src="js/bootstrap.min.js"></script>
</head>
<body>
    <header>
         <?php include('header.php') ?>
      </header>
      <img class="logo" src="img/itver.png" alt="">
      
      <div class="container">
      <div class="textoEncabezado">
         <br>
         <h3>Mis Visitas</h3>
        <br>        
      </div>
      
        <div class="container">
          <div id="misvisitas"></div>
        </div>
    
</body>
</html>

<script type="text/javascript">
  $(document).ready(function(){
    
    $('#misvisitas').load('php/tablamisvisitas.php');
  });
</script>

