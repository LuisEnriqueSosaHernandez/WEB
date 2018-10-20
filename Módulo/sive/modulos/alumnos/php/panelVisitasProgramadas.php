<?php 
	require 'checarSesion.php';
	require 'consultas/consultaMySQLi.php';
	require 'consultas/periodo.php';
 ?>

<div class="row">
	<div class="col-sm-12">
		<table class="table-striped">
		
			<tbody>

			<?php
			$sql="SELECT ID_Periodo FROM Periodo WHERE PeriodoActual=1";
			$rs1=firstResult($sql);
			$idPeriodo=$rs1['ID_Periodo'];	
			$periodo=definirPeriodo();

			//Prepara la consulta de las visitas
			$sql="SELECT SolicitaVisita.FechaSalidaProgramada,
        	SolicitaVisita.HoraSalida,
        	Empresa.NombreEmpresa,
        	Empresa.Ubicacion
        	FROM SolicitaVisita, Empresa, Area
			WHERE  (SolicitaVisita.EstadoDeVisita=1 OR SolicitaVisita.EstadoDeVisita=5)
			AND SolicitaVisita.ID_Periodo=$idPeriodo
			AND SolicitaVisita.ID_Area=Area.ID_Area
       		AND Area.ID_Empresa= Empresa.ID_Empresa
       		ORDER BY SolicitaVisita.FechaSalidaProgramada";
			//Recupera el resultado
			$rs=consultaSQL($sql);
			//Recupera el Arreglo asociativo
			

			if(count($rs)==0)
			{
				echo "<div class='notif'>
                       <span><img src='img/avion.png' class='img-notif'></span>
                       <h5>Aún no hay visitas autorizadas...</h5>
                     </div>";
			}
			else{
			$par=0;

			foreach ($rs as $row) {
				require_once "../php/fecha.php";
			$fecha=transformaFechaCorta($row['FechaSalidaProgramada']);

			$time  = strtotime($row['HoraSalida']);
   			$hora=date('h:i',$time)." hrs.";
			
			$empresa=$row['NombreEmpresa'];
			$lugar=$row['Ubicacion'];

			if($par==0){
				
				$par=1;
				?>
				<tr>
                    <td class="table-hard-blue text-white"><p><?php echo $fecha; ?> <br><?php echo $hora ?></p></td>
                    <td class="table-hard-gray"><p class="emp"><span class="t-bold"><?php echo $empresa ?></span> <br><?php echo $lugar; ?></p></td>
                </tr> 
				<?php  	
			}
			else{
				$par=0;
				?>
				<tr>
                    <td class="table-low-blue text-white"><p><?php echo $fecha; ?> <br><?php echo $hora ?></p></td>
                    <td class="table-low-gray"><p class="emp"><span class="t-bold"><?php echo $empresa ?></span> <br><?php echo $lugar; ?></p></td>
                </tr> 
                
				<?php 
			}
			?>
			
                            
            </tbody>
			<?php 
			}

			

			}
			 ?>
			
			
			
			
		</table>
	</div>

</div>


