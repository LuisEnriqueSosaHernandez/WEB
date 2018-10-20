<?php 
	require 'checarSesion.php';
	require_once 'consultas/consultaMySQLi.php';
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

			//Prepara la consulta
			$sql="SELECT Asiste.NoControl,
    					Asiste.ID_SolicitaVisita,
    					SolicitaVisita.FechaSalidaProgramada,
    					SolicitaVisita.HoraSalida,
					    SolicitaVisita.EstadoDeVisita,
					    Empresa.NombreEmpresa,
					    Empresa.Ubicacion,
					    Asiste.AprobacionDocente,
					    Asiste.EnRevision
					FROM   Asiste, SolicitaVisita, Empresa, Area

					WHERE Asiste.NoControl='$noControl'
					AND Asiste.ID_SolicitaVisita=SolicitaVisita.ID_SolicitaVisita
					AND SolicitaVisita.ID_Periodo=$idPeriodo
					AND SolicitaVisita.ID_Area=Area.ID_Area
					AND Area.ID_Empresa = Empresa.ID_Empresa
					AND (SolicitaVisita.EstadoDeVisita=1 OR SolicitaVisita.EstadoDeVisita=5 OR SolicitaVisita.EstadoDeVisita=3)";

			$rs=consultaSQL($sql);
			
			

			if(count($rs)==0)
			{
			echo "<div class='notif'>
                  <span><img src='img/avion.png' class='img-notif'></span>
                   <h5>Aún no tienes visitas registradas...</h5>
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
			

			if($row['EnRevision']==1){ //No has sido aceptado o rechazado
			$estado="<p class='process t-bold st'>Por autorizar</p>";	
			$hora="";
			}
			else{
			if($row['AprobacionDocente']!=1)
			{
				$estado="<p class='canceled t-bold st'>Rechazado</p>";
				$hora="";
			}
			else{
			if($row['EstadoDeVisita']==1)
			{
				$estado="<p class='confirmed t-bold st'>Confirmada</p>";
			}
			else{
				if($row['EstadoDeVisita']==3){
					$estado="<p class='canceled t-bold st'>Cancelada</p>";
					$hora="";
				}
				else{
					$estado="<p class='rejected  t-bold st'>Reprogramada</p>";	
				}	
			}
		}
			

			}

			if($par==0){
				
				$par=1;
				?>
				<tr>
                              <td class="table-hard-blue text-white"><p><?php echo $fecha;?><br><?php echo $hora;?></p></td>
                              <td class="table-hard-gray"><p class="emp"><span class="t-bold"><?php echo $empresa ?></span> <br><?php echo $lugar ?></p></td>
                              <td class="table-hard-gray"><?php echo $estado; ?></td>
                </tr>
				<?php  	
			}
			else{
				$par=0;
				?>
				<tr>
                            <td class="table-low-blue text-white"><p><?php echo $fecha; ?><br><?php echo $hora;?></p></td>
                              <td class="table-low-gray"><p class="emp"><span class="t-bold"><?php echo $empresa ?></span> <br><?php echo $lugar ?></p></td>
                              <td class="table-low-gray"><?php echo $estado; ?></td>  
                </tr>
                
				<?php 
			}
			?>
			
                            
            </tbody>
            
			<?php 
			}}
			 ?>
			
			
			
			
		</table>
	</div>

</div>


