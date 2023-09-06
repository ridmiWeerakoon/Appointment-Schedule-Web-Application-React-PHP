-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Sep 06, 2023 at 08:39 AM
-- Server version: 8.0.31
-- PHP Version: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `web_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `auser`
--

DROP TABLE IF EXISTS `auser`;
CREATE TABLE IF NOT EXISTS `auser` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user` text NOT NULL,
  `pass` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `auser`
--

INSERT INTO `auser` (`id`, `user`, `pass`) VALUES
(1, 'admin', 'admin');

-- --------------------------------------------------------

--
-- Table structure for table `cuser`
--

DROP TABLE IF EXISTS `cuser`;
CREATE TABLE IF NOT EXISTS `cuser` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `username` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `specialization` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `cuser`
--

INSERT INTO `cuser` (`id`, `name`, `username`, `email`, `password`, `specialization`) VALUES
(14, 'Tharindu Perera', 'tperera', 'tharindup@gmail.com', 'perera@123', 'Financial Management');

-- --------------------------------------------------------

--
-- Table structure for table `juser`
--

DROP TABLE IF EXISTS `juser`;
CREATE TABLE IF NOT EXISTS `juser` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `username` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `category` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `juser`
--

INSERT INTO `juser` (`id`, `name`, `username`, `email`, `password`, `category`) VALUES
(10, 'Gayan Madusanka', 'gmadusanka', 'gayanm@gmail.com', 'gayan@123', 'IT-Mobile App Development'),
(11, 'Ridmi Tharuka', 'rtharuka', 'ridmitharuka@gmail.com', 'ridmi@123', 'Bank Manager');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `mobile` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `date` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `time` text NOT NULL,
  `c_name` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `mobile`, `created_at`, `updated_at`, `date`, `time`, `c_name`) VALUES
(22, 'Gayan Madusanka', 'gayanm@gmail.com', '0770000001', '2023-09-05 18:30:00', '2023-09-06 06:52:40', '2023-09-10T18:30:00.000Z', '08:00', 'Tharindu Perera'),
(23, 'Ridmi Tharuka', 'ridmitharuka@gmail.com', '0770000002', '2023-09-05 18:30:00', '2023-09-06 06:57:38', '2023-09-10T18:30:00.000Z', '11:00', 'Tharindu Perera');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
