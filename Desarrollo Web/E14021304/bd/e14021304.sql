-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 07-12-2017 a las 16:05:46
-- Versión del servidor: 10.1.22-MariaDB
-- Versión de PHP: 7.1.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `e14021304`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente1304`
--

CREATE TABLE `cliente1304` (
  `IDCLIENTE` varchar(13) COLLATE utf8_spanish2_ci NOT NULL,
  `NOMBRE` varchar(30) COLLATE utf8_spanish2_ci NOT NULL,
  `APELLIDOS` varchar(45) COLLATE utf8_spanish2_ci NOT NULL,
  `TELEFONO` varchar(10) COLLATE utf8_spanish2_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;

--
-- Volcado de datos para la tabla `cliente1304`
--

INSERT INTO `cliente1304` (`IDCLIENTE`, `NOMBRE`, `APELLIDOS`, `TELEFONO`) VALUES
('1234', 'kike', 'sosa', '229176675'),
('sksks', 'Luis Enrique', 'Sosa Hernandez', '1234567890');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `cliente1304`
--
ALTER TABLE `cliente1304`
  ADD PRIMARY KEY (`IDCLIENTE`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
