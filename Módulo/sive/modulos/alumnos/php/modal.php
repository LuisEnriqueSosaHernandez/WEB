<?php 

if($actualizoPerfil!=1){ //Si lo actualizó
 ?>
 <!--SE AGREGA LA VENTANA MODAL-->
        <div class="modal fade modal_bienvenida" id="mostrarmodal" tabindex="-1" role="dialog" aria-labelledby="basicModal" aria-hidden="true">
           <div class="modal-dialog modal-sm" >
              <div class="modal-content">
                 <div class="modal-header">
                    <h3 class="modal-title"></h3>
                    <button type="button" class="close" id="cerrar" data-dismiss="modal" aria-hidden="true">&times;</button>
             </div>
                 <div class="modal-body">
                    <h4 class="encabezado">
                       Bienvenido al Sistema de visitas a Empresas, por favor actualice su perfil
                    </h4>
                    <h5 class="subtitulo">
                        Para actualizar su perfil ir a Perfil -> Actualizar Perfil o puede dar clic en el siguiente botón
                    </h5>
                    
                    <div class="campo">
                      <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#myModal" onClick="window.location.href='actperfil.php'" id="ir">Actualizar Perfil</button>
                    </div>
              </div>
           </div>
        </div>
        </div>
      <!--TERMINA EL MODAL-->
<?php  
}
?>
