CREATE DATABASE IF NOT EXISTS `visitas` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `visitas`;

CREATE TABLE `alumno` (
  `NoControl` varchar(10) CHARACTER SET utf8 NOT NULL,
  `FechaDeNacimiento` date DEFAULT NULL,
  `Sexo` varchar(1) CHARACTER SET utf8 DEFAULT NULL,
  `PeriodoDeIngreso` int(11) DEFAULT NULL,
  `Nombre` varchar(25) CHARACTER SET utf8 DEFAULT NULL,
  `Foto` varchar(35) CHARACTER SET utf8 DEFAULT NULL,
  `Correo` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `Telefono` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `PersonaContacto1` varchar(35) CHARACTER SET utf8 DEFAULT NULL,
  `PersonaContacto2` varchar(35) CHARACTER SET utf8 DEFAULT NULL,
  `TelefonoContacto1` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `TelefonoContacto2` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `ApPaterno` varchar(15) CHARACTER SET utf8 DEFAULT NULL,
  `ApMaterno` varchar(15) CHARACTER SET utf8 DEFAULT NULL,
  `ID_Carrera` int(11) NOT NULL,
  `Nip` varchar(4) CHARACTER SET utf8 DEFAULT NULL,
  `EstadoDelAlumno` int(11) DEFAULT NULL,
  `AñoDeIngreso` int(11) DEFAULT NULL,
  `Semestre` int(11) DEFAULT NULL,
  `PerfilActualizado` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `alumno` (`NoControl`, `FechaDeNacimiento`, `Sexo`, `PeriodoDeIngreso`, `Nombre`, `Foto`, `Correo`, `Telefono`, `PersonaContacto1`, `PersonaContacto2`, `TelefonoContacto1`, `TelefonoContacto2`, `ApPaterno`, `ApMaterno`, `ID_Carrera`, `Nip`, `EstadoDelAlumno`, `AñoDeIngreso`, `Semestre`, `PerfilActualizado`) VALUES
('E14020822', '1996-06-16', 'H', 2, 'Haziel Harim', 'harim.jpg', 'taliban@correo.com', '2233445566', 'Topacio Salomón', 'Anabel Naranjo', '2266775544', '9988776655', 'Reyes', 'Naranjo', 1, '0908', 1, 2014, 7, 1),
('E14021176', '1995-09-28', 'H', 2, 'Ernesto', 'ernesto.jpg', 'ernesto@correo.gmail', '2961033176', 'Carlitos Alvarez', 'Julia Calderón', '2233445566', '9988776644', 'Álvarez', 'Calderón', 1, '9999', 1, 2017, 7, 1),
('E14021193', '1996-07-15', 'H', 2, 'Martin Francisco', 'martin.jpg', 'martiiinf@gmail.com', '2299057063', 'Liliana Rendon Lezama', 'Martin Carrillo Perez', '2291200837', '2291063805', 'Carrillo', 'Rendon', 1, '1234', 1, 2014, 7, 1),
('E14021231', '1996-05-15', 'H', 2, 'Jair Ernesto', 'jair.jpg', 'jair@gmail.com', '2292559883', 'Maria Bonastre Gomez', 'Marcos Gonzales Marquez', '2295678907', '2293245680', 'Gonzales', 'Bonastre', 1, '4026', 1, 2014, 7, 1),
('E14021237', '1995-11-17', 'H', 2, 'Erik', 'erik.jpg', 'erik@gmail.com', '2292345124', 'Lucia Macias Martinez', 'Adolfo Gutierrez Enriquez', '2293546890', '2291890998', 'Gutierrez', 'Macias', 1, '7230', 1, 2014, 7, 1),
('E14021258', '0000-00-00', 'H', 2, 'Ángel Guillermo', 'angel.jpg', 'angel@gmail.com', '2233445566', 'Leticia Cabrales', 'Jaime De León', '1122334455', '9988776655', 'Martínez', 'Cabrales', 1, '4321', 1, 2014, 7, 1),
('E14021264', '1995-11-19', 'M', 2, 'Frida Alejandra', 'frida.jpg', 'frida@gmail.com', '2291234576', 'Lilia Hernández', 'Gustavo Eduardo Molina', '2293567698', '2291789009', 'Molina', 'Hernandez', 1, '5678', 1, 2014, 7, 1),
('E14021294', '1995-09-18', 'H', 2, 'Luis Uriel', 'uriel.jpg', 'uriel@gmail.com', '2791002513', 'Angélica González', 'Victor Manuel Rodríguez', '2291657849', '2291678909', 'Rodríguez', 'González', 1, '1234', 1, 2014, 7, 1),
('E14022087', '1996-02-18', 'H', 2, 'Israel', 'israel.jpg', 'israel@gmail.com', '2292312346', 'Kenia Parra Ortiz', 'Raul Marcial Ortega', '2293675432', '2293769087', 'Marcial', 'Parra', 1, '9097', 1, 2014, 7, 1),
('E16021234', '1997-08-18', 'H', 2, 'Raúl Lynn', 'raul.jpg', 'barragan@gmail.com', '2299887766', 'Mónica Mijangos', 'Teodoro Barragán', '2299886644', '2244556677', 'Barragán', 'Mijangos', 9, '7890', 2, 2016, 4, 1),
('E17020204', '1996-01-23', 'M', 1, 'Maritza', 'maritza.jpg', 'maritza@correo.com', '2233445566', 'Maribel Garcia', 'Luis Garcia', '2233445566', '2233556600', 'Contreras', 'Garcia', 6, '1997', 1, 2017, 2, 1),
('E17021234', '1997-03-10', 'H', 1, 'Mario', 'mario.jpg', 'marioc@correo.com', '2291643527', 'Josh Nichols', 'Drake Parker', '2244556677', '9968321256', 'Castañeda', 'Ruiz', 4, '1122', 1, 2017, 2, 1);

CREATE TABLE `area` (
  `ID_Area` int(11) NOT NULL,
  `NombreArea` varchar(25) CHARACTER SET utf8 DEFAULT NULL,
  `ID_Empresa` int(11) NOT NULL,
  `DescripcionArea` varchar(150) CHARACTER SET utf8 DEFAULT NULL,
  `Capacidad` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `area` (`ID_Area`, `NombreArea`, `ID_Empresa`, `DescripcionArea`, `Capacidad`) VALUES
(1, 'Computo', 1, 'Area de computo de la empresa', 25),
(2, 'Produccion', 2, 'Area de produccion de la empresa', 25),
(3, 'Centro  de Investigación', 3, 'Centro de Investigación y simuladores', 0),
(4, 'Área de visitas', 4, 'Área acondicionada para las visitas', 25),
(5, 'Área de visitas', 5, 'Área de visitas y recorrido', 30),
(6, 'Planta', 5, 'Planta NucleoEléctrica', 20),
(7, 'Biblioteca Digital', 6, 'Bilioteca Digital de la fundación Carlos Slim', 30);

CREATE TABLE `asiste` (
  `ID_Asiste` int(11) NOT NULL,
  `Asistencia` int(11) DEFAULT NULL,
  `NoControl` varchar(9) NOT NULL,
  `ID_SolicitaVisita` int(11) NOT NULL,
  `AprobacionDocente` int(11) NOT NULL,
  `ID_Personal` int(11) NOT NULL,
  `EnRevision` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `asiste` (`ID_Asiste`, `Asistencia`, `NoControl`, `ID_SolicitaVisita`, `AprobacionDocente`, `ID_Personal`, `EnRevision`) VALUES
(5, NULL, 'E14021294', 1, 1, 1, 0),
(6, NULL, 'E14021258', 1, 1, 1, 0),
(7, NULL, 'E14021264', 1, 1, 2, 0),
(8, NULL, 'E14021264', 5, 1, 11, 0),
(9, NULL, 'E14021294', 5, 1, 11, 0),
(10, NULL, 'E14021231', 5, 1, 11, 0),
(11, NULL, 'E14021176', 5, 1, 11, 0);

CREATE TABLE `asiste_docente` (
  `ID_AsisteDocente` int(11) NOT NULL,
  `ID_SolicitaVisita` int(11) NOT NULL,
  `ID_Personal` int(11) NOT NULL,
  `RolDocente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `asiste_docente` (`ID_AsisteDocente`, `ID_SolicitaVisita`, `ID_Personal`, `RolDocente`) VALUES
(1, 1, 2, 1),
(2, 2, 2, 1),
(3, 3, 4, 1),
(4, 4, 4, 1),
(5, 5, 11, 1),
(6, 5, 1, 0);

CREATE TABLE `asuntos` (
  `ID_Asuntos` int(11) NOT NULL,
  `Titulo` varchar(25) CHARACTER SET utf8 DEFAULT NULL,
  `Descripcion` varchar(250) CHARACTER SET utf8 DEFAULT NULL,
  `Status` int(11) DEFAULT NULL,
  `ID_SolicitaVisita` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

CREATE TABLE `carrera` (
  `ID_Carrera` int(11) NOT NULL,
  `NombreCarrera` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `ID_Departamento` int(11) NOT NULL,
  `Abreviatura` varchar(5) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `carrera` (`ID_Carrera`, `NombreCarrera`, `ID_Departamento`, `Abreviatura`) VALUES
(1, 'Sistemas Computacionales', 1, 'ISC'),
(2, 'Industrial', 2, 'IND'),
(3, 'Eléctrica', 3, 'ELE'),
(4, 'Electrónica', 3, 'ELC'),
(5, 'Química', 5, 'QUI'),
(6, 'Bioquímica', 5, 'BQA'),
(7, 'Gestión Empresarial', 6, 'GEM'),
(8, 'Administración', 6, 'ADM'),
(9, 'Mecánica', 7, 'MEC'),
(10, 'Mecatrónica', 7, 'MCT'),
(11, 'Energías Renovables', 3, 'ENR');

CREATE TABLE `departamentos` (
  `ID_Departamento` int(11) NOT NULL,
  `NombreDepto` varchar(35) CHARACTER SET utf8 DEFAULT NULL,
  `DepartamentoAcademico` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `departamentos` (`ID_Departamento`, `NombreDepto`, `DepartamentoAcademico`) VALUES
(1, 'Sistemas y Computación', 1),
(2, 'Industrial', 1),
(3, 'Eléctrica-Electrónica', 1),
(4, 'Ciencias Básicas', 1),
(5, 'Química-Bioquímica', 1),
(6, 'Económico-Administrativo', 1),
(7, 'Metal-Mecánica y Mecatrónica', 1),
(8, 'Gestión Tecnológica y Vinculación', 0),
(9, 'Subdirección Académica', 0);

CREATE TABLE `empresa` (
  `ID_Empresa` int(11) NOT NULL,
  `NombreEmpresa` varchar(35) CHARACTER SET utf8 DEFAULT NULL,
  `Imagen` varchar(35) CHARACTER SET utf8 DEFAULT NULL,
  `Ubicacion` varchar(25) CHARACTER SET utf8 DEFAULT NULL,
  `Encargado` varchar(35) CHARACTER SET utf8 DEFAULT NULL,
  `CargoEncargado` varchar(50) CHARACTER SET utf8 DEFAULT NULL,
  `LogoDeEmpresa` varchar(35) CHARACTER SET utf8 DEFAULT NULL,
  `PaginaWeb` varchar(25) CHARACTER SET utf8 DEFAULT NULL,
  `Reglamento` varchar(35) CHARACTER SET utf8 DEFAULT NULL,
  `DescripcionEmpresa` varchar(300) CHARACTER SET utf8 DEFAULT NULL,
  `Recomendaciones` varchar(300) CHARACTER SET utf8 DEFAULT NULL,
  `TituloEncargado` varchar(6) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `empresa` (`ID_Empresa`, `NombreEmpresa`, `Imagen`, `Ubicacion`, `Encargado`, `CargoEncargado`, `LogoDeEmpresa`, `PaginaWeb`, `Reglamento`, `DescripcionEmpresa`, `Recomendaciones`, `TituloEncargado`) VALUES
(1, 'Tenaris Tamsa', 'Tamsa.jpg', 'Ciudad Industrial', 'Felipe Mora', 'Jefe del centro de cómputo', 'logo.jpg', 'www.tamsa.com', 'files/tamsa.pdf', 'TenarisTamsa, el Centro Industrial de Tenaris en México, es uno de los más grandes del mundo en la fabricación de tubos de acero para la industria energética.', 'Mantener la compostura durante el recorrido\r', 'Ing.'),
(2, 'Bimbo', 'bimbo.jpg', 'Ciudad Industrial', 'Andres Morales', 'Jefe de produccion', 'bimbo_logo.png', 'www.bimbo.com', 'www.reglasbimbo.com', 'Hoy en día, somos la Empresa de Panificación más importante del mundo por posicionamiento de marca, por volumen de producción y ventas, además somos el líder indiscutible de nuestro ramo en México, Latinoamérica y Estados Unidos.', 'Poner atencion durante el recorrido\r', 'L.C'),
(3, 'INIDETAM', 'inidetam.png', 'Antón Lizardo', 'Maribel Lagos', 'Encargado de Vinculación', 'logo.png', 'www.inidetam.gob.mx', '', 'Instituto de Investigación y Desarrollo Tecnológico de la Armada de M?xico', 'No usar cámaras\r\n', 'Ing.'),
(4, 'iLab', 'iLab.jpg', 'Xalapa', 'Lino Mora', 'Encargado de Vinculación', 'iLab.png', 'www.ilab.com', '../reglas/iLab.pdf', '\"Imagina, Inoova, Incuba\"\r\n Somos una fábrica de Startups, impulsamos a jóvenes para crear innovación de alto impacto que resuelve retos globales con un enfoque social a través de la tecnología.', 'Llevar Ropa cómoda', 'Dr.'),
(5, 'CFE Laguna Verde', 'Laguna.jpg', 'Alto Lucero', 'Josué Luis Arriaga Málaga', 'Encargado de Visitas', 'cfe.png', 'www.cfe.gob.com', '../reglas/iLab.pdf', 'Empresa 100% mexicana y orgullosamente veracruzanda dedicada a la generación de energía electrica a partir de fusión nuclear', 'Prohibido tomar fotos\r', 'M.C.'),
(6, 'Telmex Biblioteca Digital', 'telmex.png', 'Nuevo Veracruz', 'José Julián Figueroa Correa', 'Encargado de la biblioteca', 'telmex.png', 'www.telmex.com', 'telmex.pdf', 'Empresa de telecomunicaciones preocupada por hacer llegar a todos las TIC\'s', 'No es necesario llevar computadora, en el lugar cuentan con ellas.\r\n', 'Ing.');

CREATE TABLE `fechasdisponibles` (
  `ID_FechasDisponibles` int(11) NOT NULL,
  `FechaDisponible` date DEFAULT NULL,
  `Hora` time DEFAULT NULL,
  `ID_Area` int(11) NOT NULL,
  `FechaSolicitada` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `fechasdisponibles` (`ID_FechasDisponibles`, `FechaDisponible`, `Hora`, `ID_Area`, `FechaSolicitada`) VALUES
(1, '2018-03-20', '10:00:00', 2, 0),
(2, '2018-04-09', '09:00:00', 4, 0),
(3, '2018-05-30', '10:30:00', 1, 0);

CREATE TABLE `materia` (
  `ID_Materia` int(11) NOT NULL,
  `NombreMateria` varchar(40) CHARACTER SET utf8 NOT NULL,
  `ID_Carrera` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `materia` (`ID_Materia`, `NombreMateria`, `ID_Carrera`) VALUES
(1, 'Fund. de Programación', 1),
(2, 'Programación Web', 1),
(3, 'Desarrollo Sustentable', 1),
(4, 'Top. Avanzados de Programación', 1),
(5, 'Graficación', 1),
(6, 'Fund. de Base de Datos', 1),
(7, 'Taller de Base de Datos', 1),
(8, 'Fund. de Ing. de Software', 1),
(9, 'Ing. de Software', 1),
(10, 'Lenguajes de Interfaz', 1),
(11, 'Sistemas Programables', 1),
(12, 'Lenguajes y Autómatas I', 1),
(13, 'Lenguajes y Autómatas II', 1),
(14, 'Mecánica de Materiales I', 9),
(15, 'Mecánica de Materiales II', 9),
(16, 'Mecanismos', 9),
(17, 'Circuitos y Máquinas Eléctricas', 9),
(18, 'Vibraciones Mecánicas', 9),
(19, 'Sistemas e Instalaciones Hidráulicas', 9),
(20, 'Instrumentación y Control', 9),
(21, 'Higiene y seguridad industrial', 9);

CREATE TABLE `materiasasociadas` (
  `idMateriasAsociadas` int(11) NOT NULL,
  `ID_Materia` int(11) NOT NULL,
  `ID_SolicitaVisita` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `materiasasociadas` (`idMateriasAsociadas`, `ID_Materia`, `ID_SolicitaVisita`) VALUES
(1, 10, 1),
(2, 8, 2),
(3, 9, 2),
(4, 12, 3),
(5, 13, 3),
(6, 10, 4),
(7, 2, 5),
(8, 11, 1),
(9, 9, 5);

CREATE TABLE `periodo` (
  `ID_Periodo` int(11) NOT NULL,
  `Periodo` int(11) NOT NULL,
  `Anio` int(11) NOT NULL,
  `InicioSolicitud` date DEFAULT NULL,
  `FinSolicitud` date DEFAULT NULL,
  `InicioVisitas` date DEFAULT NULL,
  `FinVisitas` date DEFAULT NULL,
  `PeriodoActual` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `periodo` (`ID_Periodo`, `Periodo`, `Anio`, `InicioSolicitud`, `FinSolicitud`, `InicioVisitas`, `FinVisitas`, `PeriodoActual`) VALUES
(1, 1, 2017, '2017-01-23', '2017-01-30', '2017-02-06', '2017-06-06', 0),
(2, 2, 2017, '2017-08-01', '2017-08-08', '2017-09-01', '2017-12-01', 1);

CREATE TABLE `personal` (
  `ID_Personal` int(11) NOT NULL,
  `Nombre` varchar(25) CHARACTER SET utf8 DEFAULT NULL,
  `FechaDeNacimiento` date DEFAULT NULL,
  `Sexo` varchar(1) CHARACTER SET utf8 DEFAULT NULL,
  `RFC` varchar(13) CHARACTER SET utf8 DEFAULT NULL,
  `Contraseña` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `ID_Puesto` int(11) NOT NULL,
  `ApPaterno` varchar(15) CHARACTER SET utf8 DEFAULT NULL,
  `ApMaterno` varchar(15) CHARACTER SET utf8 DEFAULT NULL,
  `PersonaContacto1` varchar(35) CHARACTER SET utf8 DEFAULT NULL,
  `PersonaContacto2` varchar(35) CHARACTER SET utf8 DEFAULT NULL,
  `TelefonoContacto1` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `TelefonoContacto2` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `Foto` varchar(35) CHARACTER SET utf8 DEFAULT NULL,
  `Correo` varchar(30) CHARACTER SET utf8 DEFAULT NULL,
  `Telefono` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `Titulo` varchar(6) COLLATE utf8_spanish_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `personal` (`ID_Personal`, `Nombre`, `FechaDeNacimiento`, `Sexo`, `RFC`, `Contraseña`, `ID_Puesto`, `ApPaterno`, `ApMaterno`, `PersonaContacto1`, `PersonaContacto2`, `TelefonoContacto1`, `TelefonoContacto2`, `Foto`, `Correo`, `Telefono`, `Titulo`) VALUES
(1, 'Ezequiel', '0000-00-00', 'H', 'PIOE7204121H0', 'Pina12345', 1, 'Piña', 'Ortiz', 'Maria Gonzales Marquez', 'Marcos Rosas Diaz', '0', '', 'pina.jpg', NULL, NULL, ''),
(2, 'Guillermo', '0000-00-00', 'H', 'MUAG691111MO1', 'Arzate', 1, 'Muñoz', 'Arzate', 'Ana Mar?a Cabada', 'Ernesto Cruz', '8877665544', '4455667788', 'arzate.jpg', NULL, NULL, ''),
(3, 'Carlos', '0000-00-00', 'H', 'GOEC701025RT6', 'Escarpeta', 1, 'González', 'Escarpeta', 'Alicia Ju?rez', 'Miguel D?az', '8877660044', '7744332211', NULL, NULL, NULL, ''),
(4, 'Martha', '0000-00-00', 'M', 'MAMM710630AB1', 'Martha', 1, 'Martínez', 'Moreno', 'Juan Luis Martinez', 'Juan Carlos Gonz?lez', '8877665544', '4455667788', NULL, NULL, NULL, ''),
(5, 'Jaime Alberto', '0000-00-00', 'H', 'MEMJ800910XL3', 'Jaime', 3, 'Mendoza', 'Melchor', '', '', '', '\r', NULL, NULL, NULL, ''),
(6, 'Genoveva', '0000-00-00', 'M', 'DOSG750316PH8', 'Geno', 4, 'Domínguez', 'S?nchez', '', '', '', '', NULL, NULL, NULL, ''),
(7, 'Teodoro', '0000-00-00', 'H', 'ARMT820503AB1', 'Teodoro', 2, 'Arana', 'Miller', '', '', '', '\r', NULL, NULL, NULL, ''),
(8, 'Leonardo', '0000-00-00', 'H', 'LEHL560701QW2', 'Lezama', 2, 'Lezama', 'Hernández', '', '', '', '', NULL, NULL, NULL, ''),
(10, 'Evaristo', '0000-00-00', 'H', 'PAVE6503191H0', 'Eva1234', 1, 'Pacheco', 'Velasco', 'Maria Velasco Marquez', 'Marcos Pacheco Diaz', '2292467898', '2291235488', NULL, NULL, NULL, ''),
(11, 'Delio', '0000-00-00', 'H', 'PAVE6205291H0', 'Delio234', 1, 'Coss', 'Camilo', 'Maria Camilo Marquez', 'Marcos Coss Diaz', '2292466790', '2291230098', 'delio.jpg', NULL, NULL, '');

CREATE TABLE `pertenece` (
  `ID_Pertenece` int(11) NOT NULL,
  `ID_Departamento` int(11) NOT NULL,
  `ID_Personal` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `pertenece` (`ID_Pertenece`, `ID_Departamento`, `ID_Personal`) VALUES
(1, 1, 1),
(2, 1, 4),
(3, 1, 8),
(5, 1, 10),
(6, 8, 5),
(7, 8, 7),
(8, 9, 6),
(9, 3, 2),
(10, 3, 3),
(11, 1, 11);

CREATE TABLE `puestos` (
  `ID_Puesto` int(11) NOT NULL,
  `NombreDePuesto` varchar(40) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `puestos` (`ID_Puesto`, `NombreDePuesto`) VALUES
(1, 'Docente\r'),
(2, 'Jefe de Departamento\r'),
(3, 'Coordinador de Visitas a Empresas\r'),
(4, 'Subdirector Academico\r');

CREATE TABLE `solicitavisita` (
  `ID_SolicitaVisita` int(11) NOT NULL,
  `ClaveVisita` varchar(8) CHARACTER SET utf8 DEFAULT NULL,
  `FechaSolicitada` date DEFAULT NULL,
  `FechaSalidaProgramada` date DEFAULT NULL,
  `FechaLlegadaProgramada` date DEFAULT NULL,
  `ID_Area` int(11) NOT NULL,
  `ID_Departamento` int(11) NOT NULL,
  `HoraSalida` time DEFAULT NULL,
  `Folio` varchar(10) CHARACTER SET utf8 DEFAULT NULL,
  `ObjetivoVisita` varchar(150) CHARACTER SET utf8 DEFAULT NULL,
  `EstadoDeVisita` int(11) DEFAULT NULL,
  `HoraLlegada` time DEFAULT NULL,
  `FechaConfirmacion` date DEFAULT NULL,
  `HoraVisita` time DEFAULT NULL,
  `Comentario` varchar(150) CHARACTER SET utf8 DEFAULT NULL,
  `CantidadMinAlu` int(11) DEFAULT NULL,
  `CantidadMaxAlu` int(11) DEFAULT NULL,
  `AlumnosRegistrados` int(11) DEFAULT NULL,
  `ID_Personal` int(11) NOT NULL,
  `ID_Periodo` int(11) NOT NULL,
  `Turno` int(11) DEFAULT NULL,
  `ConfirmacionFecha` int(11) DEFAULT NULL,
  `CumplimientoObjetivos` int(11) DEFAULT NULL,
  `ConfirmaAcademicos` int(11) DEFAULT NULL,
  `ConfirmaSubdireccionAcademica` int(11) DEFAULT NULL,
  `Incidentes` varchar(50) CHARACTER SET utf8 DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

INSERT INTO `solicitavisita` (`ID_SolicitaVisita`, `ClaveVisita`, `FechaSolicitada`, `FechaSalidaProgramada`, `FechaLlegadaProgramada`, `ID_Area`, `ID_Departamento`, `HoraSalida`, `Folio`, `ObjetivoVisita`, `EstadoDeVisita`, `HoraLlegada`, `FechaConfirmacion`, `HoraVisita`, `Comentario`, `CantidadMinAlu`, `CantidadMaxAlu`, `AlumnosRegistrados`, `ID_Personal`, `ID_Periodo`, `Turno`, `ConfirmacionFecha`, `CumplimientoObjetivos`, `ConfirmaAcademicos`, `ConfirmaSubdireccionAcademica`, `Incidentes`) VALUES
(1, '12345', '2017-08-01', '2017-09-02', '2017-09-02', 1, 3, '08:00:00', '001', 'Conocer los procesos productivos de automatización de la empresa', 1, '14:00:00', '2017-08-10', '09:30:00', '', 20, 30, 0, 2, 2, 1, 0, 0, 1, 1, 'Ninguno'),
(2, '12345', '2017-08-01', '2017-09-18', '2017-08-18', 5, 3, '30:00:00', '002', 'Conocer los procesos productivos de automatización de la empresa', 1, '15:00:00', '2017-08-10', '10:00:00', '', 20, 30, 0, 2, 2, 1, 1, 1, 1, 1, 'Ninguno'),
(3, '12345', '2017-08-02', '2017-10-20', '2017-10-20', 4, 1, '08:00:00', '003', 'Conocer las instalaciones y cultura empresarial del la organizaci?n', 1, '14:00:00', '2017-08-10', '10:00:00', '', 30, 35, 0, 4, 2, 1, 0, 0, 1, 1, 'Ninguno'),
(4, '12345', '2017-08-02', '2017-11-17', '2017-11-17', 1, 1, '07:30:00', '004', 'Recorrido por las instalaciones y observación de los simuladores', 1, '15:00:00', '2017-08-10', '09:30:00', '', 25, 40, 0, 4, 2, 1, 0, 0, 1, 1, 'N'),
(5, '12345', '2017-08-02', '2017-10-25', '2017-10-25', 7, 1, '08:30:00', '0005', 'Aprender el desarrollo de Aplicaciones móviles para Android', 1, '00:00:00', '0000-00-00', '30:00:00', '', 30, 30, 0, 11, 2, 1, 0, 0, 1, 0, NULL),
(6, '5678', '2017-08-03', '2017-09-22', '2017-09-22', 2, 1, NULL, '005', 'Conocer la empresa', 3, '15:30:00', '2017-08-11', '11:00:00', 'Espero me la acepten', 10, 30, 0, 10, 2, 1, 0, 0, 1, 1, 'Ninguno'),
(7, '4563', '2017-08-04', '2017-09-22', '2017-09-22', 5, 3, '07:00:00', '006', 'Recorrido por las instalaciones y conocer el proceso de obtención de la energía eléctrica', 4, '17:00:00', '2017-08-11', '10:30:00', NULL, 20, 40, 0, 3, 2, 1, 0, 0, 1, 0, 'Ninguno'),
(8, '7654', '2017-02-01', '2017-03-02', '2017-03-02', 6, 3, '07:00:00', '001', 'Conocer los procesos productivos de automatización de la empresa', 6, '14:00:00', '2017-02-02', '09:30:00', '', 20, 30, 0, 2, 1, 1, 1, 1, 1, 1, 'Excelente'),
(9, '12345', '2017-02-01', '2017-05-17', '2017-05-17', 4, 1, '08:00:00', '003', 'Conocer las instalaciones y cultura empresarial del la organizaci?n', 6, '14:00:00', '2017-08-10', '10:00:00', '', 30, 35, 0, 4, 1, 1, 1, 1, 1, 1, 'Ninguno'),
(10, '12345', '2017-02-02', '2017-05-25', '2017-10-25', 3, 1, '30:00:00', '0005', 'Aprender el desarrollo de Aplicaciones móviles para Android', 6, '00:00:00', '0000-00-00', '30:00:00', '', 30, 30, 0, 11, 1, 1, 1, 1, 1, 1, NULL);


ALTER TABLE `alumno`
  ADD PRIMARY KEY (`NoControl`),
  ADD KEY `ID_Carrera` (`ID_Carrera`);

ALTER TABLE `area`
  ADD PRIMARY KEY (`ID_Area`),
  ADD KEY `ID_Empresa` (`ID_Empresa`);

ALTER TABLE `asiste`
  ADD PRIMARY KEY (`ID_Asiste`),
  ADD KEY `ID_SolicitaVisita` (`ID_SolicitaVisita`),
  ADD KEY `ID_Personal` (`ID_Personal`);

ALTER TABLE `asiste_docente`
  ADD PRIMARY KEY (`ID_AsisteDocente`),
  ADD KEY `ID_SolicitaVisita` (`ID_SolicitaVisita`),
  ADD KEY `ID_Personal` (`ID_Personal`);

ALTER TABLE `asuntos`
  ADD PRIMARY KEY (`ID_Asuntos`),
  ADD KEY `ID_SolicitaVisita` (`ID_SolicitaVisita`);

ALTER TABLE `carrera`
  ADD PRIMARY KEY (`ID_Carrera`),
  ADD KEY `ID_Departamento` (`ID_Departamento`);

ALTER TABLE `departamentos`
  ADD PRIMARY KEY (`ID_Departamento`);

ALTER TABLE `empresa`
  ADD PRIMARY KEY (`ID_Empresa`);

ALTER TABLE `fechasdisponibles`
  ADD PRIMARY KEY (`ID_FechasDisponibles`),
  ADD KEY `ID_Area` (`ID_Area`);

ALTER TABLE `materia`
  ADD PRIMARY KEY (`ID_Materia`),
  ADD KEY `ID_Carrera` (`ID_Carrera`);

ALTER TABLE `materiasasociadas`
  ADD PRIMARY KEY (`idMateriasAsociadas`),
  ADD KEY `ID_Materia` (`ID_Materia`),
  ADD KEY `ID_SolicitaVisita` (`ID_SolicitaVisita`);

ALTER TABLE `periodo`
  ADD PRIMARY KEY (`ID_Periodo`);

ALTER TABLE `personal`
  ADD PRIMARY KEY (`ID_Personal`),
  ADD KEY `ID_Puesto` (`ID_Puesto`);

ALTER TABLE `pertenece`
  ADD PRIMARY KEY (`ID_Pertenece`),
  ADD KEY `ID_Departamento` (`ID_Departamento`),
  ADD KEY `ID_Personal` (`ID_Personal`);

ALTER TABLE `puestos`
  ADD PRIMARY KEY (`ID_Puesto`);

ALTER TABLE `solicitavisita`
  ADD PRIMARY KEY (`ID_SolicitaVisita`),
  ADD KEY `ID_Area` (`ID_Area`),
  ADD KEY `ID_Departamento` (`ID_Departamento`),
  ADD KEY `ID_Personal` (`ID_Personal`),
  ADD KEY `ID_Periodo` (`ID_Periodo`);


ALTER TABLE `area`
  MODIFY `ID_Area` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
ALTER TABLE `asiste`
  MODIFY `ID_Asiste` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
ALTER TABLE `asiste_docente`
  MODIFY `ID_AsisteDocente` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
ALTER TABLE `asuntos`
  MODIFY `ID_Asuntos` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `carrera`
  MODIFY `ID_Carrera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
ALTER TABLE `departamentos`
  MODIFY `ID_Departamento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
ALTER TABLE `empresa`
  MODIFY `ID_Empresa` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
ALTER TABLE `fechasdisponibles`
  MODIFY `ID_FechasDisponibles` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
ALTER TABLE `materia`
  MODIFY `ID_Materia` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
ALTER TABLE `materiasasociadas`
  MODIFY `idMateriasAsociadas` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
ALTER TABLE `periodo`
  MODIFY `ID_Periodo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
ALTER TABLE `personal`
  MODIFY `ID_Personal` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
ALTER TABLE `pertenece`
  MODIFY `ID_Pertenece` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
ALTER TABLE `puestos`
  MODIFY `ID_Puesto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
ALTER TABLE `solicitavisita`
  MODIFY `ID_SolicitaVisita` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

ALTER TABLE `alumno`
  ADD CONSTRAINT `alumno_ibfk_1` FOREIGN KEY (`ID_Carrera`) REFERENCES `carrera` (`ID_Carrera`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `area`
  ADD CONSTRAINT `area_ibfk_1` FOREIGN KEY (`ID_Empresa`) REFERENCES `empresa` (`ID_Empresa`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `asiste`
  ADD CONSTRAINT `asiste_ibfk_1` FOREIGN KEY (`ID_SolicitaVisita`) REFERENCES `solicitavisita` (`ID_SolicitaVisita`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `asiste_ibfk_2` FOREIGN KEY (`ID_Personal`) REFERENCES `personal` (`ID_Personal`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `asiste_docente`
  ADD CONSTRAINT `asiste_docente_ibfk_1` FOREIGN KEY (`ID_SolicitaVisita`) REFERENCES `solicitavisita` (`ID_SolicitaVisita`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `asiste_docente_ibfk_2` FOREIGN KEY (`ID_Personal`) REFERENCES `personal` (`ID_Personal`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `asuntos`
  ADD CONSTRAINT `asuntos_ibfk_1` FOREIGN KEY (`ID_SolicitaVisita`) REFERENCES `solicitavisita` (`ID_SolicitaVisita`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `carrera`
  ADD CONSTRAINT `carrera_ibfk_1` FOREIGN KEY (`ID_Departamento`) REFERENCES `departamentos` (`ID_Departamento`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `fechasdisponibles`
  ADD CONSTRAINT `fechasdisponibles_ibfk_1` FOREIGN KEY (`ID_Area`) REFERENCES `area` (`ID_Area`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `materia`
  ADD CONSTRAINT `materia_ibfk_1` FOREIGN KEY (`ID_Carrera`) REFERENCES `carrera` (`ID_Carrera`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `materiasasociadas`
  ADD CONSTRAINT `materiasasociadas_ibfk_1` FOREIGN KEY (`ID_Materia`) REFERENCES `materia` (`ID_Materia`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `materiasasociadas_ibfk_2` FOREIGN KEY (`ID_SolicitaVisita`) REFERENCES `solicitavisita` (`ID_SolicitaVisita`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `personal`
  ADD CONSTRAINT `personal_ibfk_1` FOREIGN KEY (`ID_Puesto`) REFERENCES `puestos` (`ID_Puesto`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `pertenece`
  ADD CONSTRAINT `pertenece_ibfk_1` FOREIGN KEY (`ID_Departamento`) REFERENCES `departamentos` (`ID_Departamento`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `pertenece_ibfk_2` FOREIGN KEY (`ID_Personal`) REFERENCES `personal` (`ID_Personal`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `solicitavisita`
  ADD CONSTRAINT `solicitavisita_ibfk_1` FOREIGN KEY (`ID_Area`) REFERENCES `area` (`ID_Area`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `solicitavisita_ibfk_2` FOREIGN KEY (`ID_Departamento`) REFERENCES `departamentos` (`ID_Departamento`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `solicitavisita_ibfk_3` FOREIGN KEY (`ID_Personal`) REFERENCES `personal` (`ID_Personal`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `solicitavisita_ibfk_4` FOREIGN KEY (`ID_Periodo`) REFERENCES `periodo` (`ID_Periodo`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;
