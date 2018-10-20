//Consulta para saber las visitas PROGRAMADAS Y REPROGRAMADAS DE UN DEPTO
SELECT  SolicitaVisita.FechaSalidaProgramada,
              SolicitaVisita.HoraSalida,
              Empresa.NombreEmpresa,
              Empresa.Ubicacion
          FROM   SolicitaVisita, Empresa, Area
          WHERE  (SolicitaVisita.EstadoDeVisita=1 OR SolicitaVisita.EstadoDeVisita=5)
          AND SolicitaVisita.ID_Departamento='$idDepto'
          AND SolicitaVisita.ID_Area=Area.ID_Area
          AND Area.ID_Empresa= Empresa.ID_Empresa
          ORDER BY SolicitaVisita.FechaSalidaProgramada ;


//Mostrar la carrera de un alumno
SELECT Alumno.Nombre,Alumno.NoControl, Carrera.NombreCarrera
FROM Alumno, Carrera, Departamentos
WHERE
    alumno.ID_Carrera=Carrera.ID_Carrera
AND carrera.ID_Departamento=departamentos.ID_Departamento;


//LA CARRERA DE UN ALUMNO EN ESPECÍFICO
SELECT Carrera.NombreCarrera
FROM Alumno, Carrera, Departamentos
WHERE
    alumno.NoControl='E14021294'   
AND alumno.ID_Carrera=Carrera.ID_Carrera
AND carrera.ID_Departamento=departamentos.ID_Departamento;


//EL ID DEL Departamento DEL ALUMNO
  SELECT Departamentos.ID_Departamento
        FROM Alumno, Carrera, Departamentos
        WHERE
        alumno.NoControl='E14021294'   
        AND alumno.ID_Carrera=Carrera.ID_Carrera
        AND carrera.ID_Departamento=departamentos.ID_Departamento;

//EL NOMBRE DEL DEPARTAMENTO DE UN ALUMNO
SELECT Departamentos.NombreDepto
        FROM Alumno, Carrera, Departamentos
        WHERE
        alumno.NoControl='E16021234'   
        AND alumno.ID_Carrera=Carrera.ID_Carrera
        AND carrera.ID_Departamento=departamentos.ID_Departamento;

//EL PERIODO ACTUAL



//VISITAS EN LAS QUE ESTA REGISTRADO EL ALUMNO
SELECT  SolicitaVisita.FechaSalidaProgramada,
        			SolicitaVisita.HoraSalida,
        			Empresa.NombreEmpresa,
        			Empresa.Ubicacion
					FROM   SolicitaVisita, Empresa, Area
					WHERE  (SolicitaVisita.EstadoDeVisita=1 OR SolicitaVisita.EstadoDeVisita=5)
					AND SolicitaVisita.ID_Periodo=3
					AND SolicitaVisita.ID_Area=Area.ID_Area
       				AND Area.ID_Empresa= Empresa.ID_Empresa
       				ORDER BY SolicitaVisita.FechaSalidaProgramada

//SOLICITAR DETALLES DE LA VISISTA DE UNA ALUMNO
SELECT Asiste.NoControl,
              Asiste.ID_SolicitaVisita,
              SolicitaVisita.FechaSalidaProgramada,
              SolicitaVisita.HoraSalida,
              SolicitaVisita.EstadoDeVisita,
              Empresa.NombreEmpresa,
              Empresa.Ubicacion,
              Asiste.AprobacionDocente,
                        Personal.Nombre, Personal.ApPaterno, Personal.ApMaterno
          FROM   Asiste, SolicitaVisita, Empresa, Area, Personal

          WHERE Asiste.NoControl='E14021294'
          AND Asiste.ID_SolicitaVisita=SolicitaVisita.ID_SolicitaVisita
          AND SolicitaVisita.ID_Periodo=2
          AND SolicitaVisita.ID_Area=Area.ID_Area
          AND Area.ID_Empresa = Empresa.ID_Empresa
                    AND SolicitaVisita.ID_Personal=Personal.ID_Personal
          AND (SolicitaVisita.EstadoDeVisita=1 OR SolicitaVisita.EstadoDeVisita=5 OR SolicitaVisita.EstadoDeVisita=3)

//DETALLES DE UNA VISITA
SELECT 
               Empresa.NombreEmpresa,
               Empresa.Ubicacion,
               Empresa.Reglamento,
               Empresa.Recomendaciones,
               Personal.Nombre, Personal.ApPaterno, Personal.ApMaterno,
               SolicitaVisita.EstadoDeVisita,
               SolicitaVisita.ObjetivoVisita,
               SolicitaVisita.FechaSalidaProgramada,
               SolicitaVisita.HoraSalida
          FROM  SolicitaVisita, Empresa, Area, Personal

          WHERE SolicitaVisita.ID_SolicitaVisita=14
          AND SolicitaVisita.ID_Area=Area.ID_Area
          AND Area.ID_Empresa = Empresa.ID_Empresa
          AND SolicitaVisita.ID_Personal=Personal.ID_Personal

//CONSULTA PARA SABER LAS MATERIAS ASOCIADAS A LA VISITA
SELECT Materia.NombreMateria FROM MateriasAsociadas, Materia 
WHERE ID_SolicitaVisita='$idVisita' 
AND Materia.ID_Materia=MateriasAsociadas.ID_Materia

