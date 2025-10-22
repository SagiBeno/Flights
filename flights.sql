-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2025. Okt 22. 07:47
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `flights`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `accounts`
--

CREATE TABLE `accounts` (
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `accounts`
--

INSERT INTO `accounts` (`username`, `email`, `password`) VALUES
('JohnDoe', 'JohnDoe@example.com', '$2a$12$Bvb7MjKxYZM1rvSa5M5GbuoyKzMrOE8tTR/d1Zw1ze0sJn2KfrFcm');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `destinations`
--

CREATE TABLE `destinations` (
  `name` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `destinations`
--

INSERT INTO `destinations` (`name`, `country`, `image`) VALUES
('Iklódbördőce', 'Hungary', '/iklodbordoce.jpg'),
('Kazincbarcika', 'Hungary', '/kazincbarcika.jpg'),
('Lipseszentadorján', 'Hungary', '/lipseszentadorjan.jpg'),
('New York', 'USA', '/newyork.jpg'),
('Paris', 'France', '/paris.jpg'),
('Tokyo', 'Japan', '/tokyo.jpg');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `flights`
--

CREATE TABLE `flights` (
  `cityfrom` varchar(255) NOT NULL,
  `cityto` varchar(255) NOT NULL,
  `flight` varchar(255) NOT NULL,
  `depart` varchar(255) NOT NULL,
  `arrive` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `flights`
--

INSERT INTO `flights` (`cityfrom`, `cityto`, `flight`, `depart`, `arrive`, `price`) VALUES
('Paris', 'Tokyo', 'AF274', '10:30', '04:45', '€850'),
('New York', 'Kazincbarcika', 'DL198', '13:00', '02:15', '€750'),
('Iklódbördőce', 'Tokyo', 'AF265', '08:20', '22:30', '€1200'),
('Kazincbarcika', 'Lipseszentadorján', 'CI64NY', '03:40', '04:20', '€20'),
('Paris', 'Kazincbarcika', 'G1PS1', '05:30', '08:00', '€150');

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `accounts`
--
ALTER TABLE `accounts`
  ADD KEY `index_email` (`email`),
  ADD KEY `index_password` (`password`);

--
-- A tábla indexei `destinations`
--
ALTER TABLE `destinations`
  ADD UNIQUE KEY `name` (`name`);

--
-- A tábla indexei `flights`
--
ALTER TABLE `flights`
  ADD KEY `idx_from` (`cityfrom`),
  ADD KEY `idx_to` (`cityto`) USING BTREE;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `flights`
--
ALTER TABLE `flights`
  ADD CONSTRAINT `flights_ibfk_1` FOREIGN KEY (`cityfrom`) REFERENCES `destinations` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `flights_ibfk_2` FOREIGN KEY (`cityto`) REFERENCES `destinations` (`name`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
