-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Jul 06, 2022 at 09:31 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `kasingodb`
--

-- --------------------------------------------------------

--
-- Table structure for table `useraccount`
--

CREATE TABLE `useraccount` (
  `userId` int(11) NOT NULL,
  `phoneNumber` varchar(20) NOT NULL,
  `userName` varchar(250) DEFAULT NULL,
  `accountBalance` decimal(15,2) DEFAULT 0.00,
  `withdrawAccount` varchar(250) DEFAULT NULL,
  `accountPassword` varchar(250) DEFAULT NULL,
  `validCode` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `useraccount`
--

INSERT INTO `useraccount` (`userId`, `phoneNumber`, `userName`, `accountBalance`, `withdrawAccount`, `accountPassword`, `validCode`) VALUES
(2, '+2511119329999', NULL, '10.00', NULL, NULL, 'zd8h4s'),
(3, '+251122222222222', NULL, '100.00', NULL, NULL, '!&q#5g'),
(4, '+251985042445', 'Fanuel', '10.00', NULL, NULL, 'ha&9zn'),
(5, '+251930861058', 'Habtsh', '0.00', NULL, NULL, 'sz1k@k');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `useraccount`
--
ALTER TABLE `useraccount`
  ADD PRIMARY KEY (`userId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `useraccount`
--
ALTER TABLE `useraccount`
  MODIFY `userId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
