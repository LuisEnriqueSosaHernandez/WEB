<?php 
	//Se conecta
	require 'checarSesion.php';
  require 'consultas/consultaMySQLi.php';
  require 'consultas/periodo.php';
?>

<!--Tabla de Visitas-->      
<div class="container">
  <table id="example" class="table table-striped" cellspacing="0" >
        
    	<?php 

      $sql="SELECT ID_Periodo FROM Periodo WHERE PeriodoActual=1";
			$rs1=firstResult($sql);
      $idPeriodo=$rs1['ID_Periodo'];  
      $periodo=definirPeriodo();

      $sql="SELECT    SolicitaVisita.FechaSalidaProgramada,
    					SolicitaVisita.HoraSalida,
					    Empresa.NombreEmpresa,
					    Empresa.Ubicacion,
					    Asiste.AprobacionDocente, Asiste.EnRevision,
                        Personal.Nombre, Personal.ApPaterno, Personal.ApMaterno,
                        SolicitaVisita.ID_SolicitaVisita
					FROM   Asiste, SolicitaVisita, Empresa, Area, Personal

					WHERE Asiste.NoControl='$noControl'
					AND Asiste.ID_SolicitaVisita=SolicitaVisita.ID_SolicitaVisita
					AND SolicitaVisita.ID_Periodo='$idPeriodo'
					AND SolicitaVisita.ID_Area=Area.ID_Area
					AND Area.ID_Empresa = Empresa.ID_Empresa
                    AND SolicitaVisita.ID_Personal=Personal.ID_Personal
					AND (SolicitaVisita.EstadoDeVisita=1 OR SolicitaVisita.EstadoDeVisita=5 OR SolicitaVisita.EstadoDeVisita=3)";
      $result=consultaSQL($sql);
			

			if(count($result)==0){
				echo 
					"<div class='noHay'>
                       <span><img src='img/avion.png' class='img-notif'></span>
                       <br>
                       Aún no hay visitas registradas...
            </div>";
			}
			else{
			echo"
				<thead id='table_header'>
            		<tr>
                		<th class='head' colspan=2> Fecha y Hora </th>
                		<th class='head'> Empresa </th>
                		<th class='head'> </th>
            		</tr>
        </thead>";
				
				foreach ($result as $row) {
         
        		
        		require_once "../php/fecha.php";

				$fecha=transformaFechaCorta($row['FechaSalidaProgramada']);

				$time  = strtotime($row['HoraSalida']);
   			
			  
        if($row['AprobacionDocente']!=1)
        {
        $hora="";
        }
        else{
        $hora=date('h:i',$time)." hrs.";  
        }

				$empresa=$row['NombreEmpresa'];
				$lugar=$row['Ubicacion'];	

				$profe=$row['Nombre']." ".$row['ApPaterno']." ".$row['ApMaterno']
        		?>	


        		<tr>
                	<td><?php echo $fecha; ?><br><?php echo $hora; ?></td>
                	<td></td>
                	<td><?php echo $empresa; ?> <br> <span class='m-text'><span class='bot-text'><?php echo $lugar; ?></span> <br> Docente: <span class='bot-text'><?php echo $profe; ?></span></span></td>
                	<td> 
                		<?php 

                    if($row['EnRevision']==1)
                    {
                    echo "<p class='process t-bold st'>Usted no ha sido autorizado aún...</p>";
                    }
                    else{
                      if($row['AprobacionDocente']!=1)
                    {
                  echo "<p class='canceled t-bold st'>Usted no está autorizado para asistir a la visita</p>";
                    }
                    else{
                    echo "<a class='verDetalles' href='detallesvisita.php?visita=".$row['ID_SolicitaVisita']."'>Ver Detalles</a>";}
                    }

                    
                		 ?>
            </tr>

        		
        <tbody>
        	<?php  
        	}} ?>
        </tbody>
    </table>
</div>

 <script>
        $('#example').dataTable( {
  		"lengthChange": false,
  		"paging":false,
  		"info":false,
  		"oLanguage": {
  		"sSearch": "<span>Buscar:</span> _INPUT_" //search
		}
		});

      </script>