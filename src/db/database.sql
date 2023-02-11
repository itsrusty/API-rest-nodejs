SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `salary` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

INSERT INTO `employee` (`id`, `name`, `salary`) VALUES
(16, 'henrry', '3500'),
(17, 'henrry', '3500'),
(18, 'henrry', '3500'),
(19, 'henrry', '3500'),
(20, 'rusty', '3500'),
(21, 'rusty', '3500'),
(22, 'fragancia', '3500'),
(23, 'marcy', '3500'),
(24, 'marcay', '3500');

ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`);


ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;
COMMIT;