-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               10.2.14-MariaDB-10.2.14+maria~jessie - mariadb.org binary distribution
-- Server OS:                    debian-linux-gnu
-- HeidiSQL Version:             9.5.0.5278
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for Vocabulary
DROP DATABASE IF EXISTS `Vocabulary`;
CREATE DATABASE IF NOT EXISTS `Vocabulary` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `Vocabulary`;

-- Dumping structure for table Vocabulary.audit_trail
DROP TABLE IF EXISTS `audit_trail`;
CREATE TABLE IF NOT EXISTS `audit_trail` (
  `id` binary(16) NOT NULL,
  `message` varchar(120) NOT NULL,
  `created_time` datetime NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table Vocabulary.audit_trail: ~6 rows (approximately)
/*!40000 ALTER TABLE `audit_trail` DISABLE KEYS */;
REPLACE INTO `audit_trail` (`id`, `message`, `created_time`) VALUES
	(_binary 0x1E4AD8D75AE211E8BC680242AC110002, 'Word akai was created', '2018-05-18 21:26:25'),
	(_binary 0x36AE96355AE111E8BC680242AC110002, '0', '2018-05-18 21:19:56'),
	(_binary 0x3AD640805AE211E8BC680242AC110002, 'Word ohoy was created', '2018-05-18 21:27:13'),
	(_binary 0x960D09115AE211E8BC680242AC110002, 'User gamanno was created', '2018-05-18 21:29:46'),
	(_binary 0xAD2D0EFD5AE111E8BC680242AC110002, 'Word was created', '2018-05-18 21:23:15'),
	(_binary 0xDF40998D5AE211E8BC680242AC110002, 'User newguy was created', '2018-05-18 21:31:48');
/*!40000 ALTER TABLE `audit_trail` ENABLE KEYS */;

-- Dumping structure for table Vocabulary.memory_palaces
DROP TABLE IF EXISTS `memory_palaces`;
CREATE TABLE IF NOT EXISTS `memory_palaces` (
  `id` binary(16) NOT NULL,
  `name` varchar(45) NOT NULL,
  `enabled` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table Vocabulary.memory_palaces: ~0 rows (approximately)
/*!40000 ALTER TABLE `memory_palaces` DISABLE KEYS */;
/*!40000 ALTER TABLE `memory_palaces` ENABLE KEYS */;

-- Dumping structure for table Vocabulary.memory_rooms
DROP TABLE IF EXISTS `memory_rooms`;
CREATE TABLE IF NOT EXISTS `memory_rooms` (
  `id` binary(16) NOT NULL,
  `name` varchar(45) NOT NULL,
  `enabled` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table Vocabulary.memory_rooms: ~0 rows (approximately)
/*!40000 ALTER TABLE `memory_rooms` DISABLE KEYS */;
/*!40000 ALTER TABLE `memory_rooms` ENABLE KEYS */;

-- Dumping structure for table Vocabulary.palace_to_room
DROP TABLE IF EXISTS `palace_to_room`;
CREATE TABLE IF NOT EXISTS `palace_to_room` (
  `id` binary(16) NOT NULL,
  `palace_id` binary(16) NOT NULL,
  `room_id` binary(16) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `palace_id` (`palace_id`),
  KEY `room_id` (`room_id`),
  CONSTRAINT `FK_palace_to_room_palace_id` FOREIGN KEY (`palace_id`) REFERENCES `memory_palaces` (`id`),
  CONSTRAINT `FK_palace_to_room_room_id` FOREIGN KEY (`room_id`) REFERENCES `memory_rooms` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table Vocabulary.palace_to_room: ~0 rows (approximately)
/*!40000 ALTER TABLE `palace_to_room` DISABLE KEYS */;
/*!40000 ALTER TABLE `palace_to_room` ENABLE KEYS */;

-- Dumping structure for table Vocabulary.users
DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` binary(16) NOT NULL,
  `nickname` varchar(45) NOT NULL,
  `password` varchar(36) NOT NULL,
  `enabled` tinyint(4) NOT NULL DEFAULT 0,
  `created` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `nickname` (`nickname`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table Vocabulary.users: ~4 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
REPLACE INTO `users` (`id`, `nickname`, `password`, `enabled`, `created`) VALUES
	(_binary 0x960B3F7E5AE211E8BC680242AC110002, 'gamanno', 'asecret', 1, '0000-00-00'),
	(_binary 0xDF3F7B9A5AE211E8BC680242AC110002, 'newguy', 'asecret', 1, '2018-05-18'),
	(_binary 0xE8FD748E5AD711E8BC680242AC110002, 'secret', 'levi', 1, '0000-00-00'),
	(_binary 0xEF3E0B8E5AD711E8BC680242AC110002, 'secret', 'canjono', 0, '0000-00-00'),
	(_binary 0xFEC9BD1B5AD711E8BC680242AC110002, 'canjono', 'secret', 1, '0000-00-00');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table Vocabulary.user_to_palace
DROP TABLE IF EXISTS `user_to_palace`;
CREATE TABLE IF NOT EXISTS `user_to_palace` (
  `id` binary(16) NOT NULL,
  `user_id` binary(16) NOT NULL,
  `palace_id` binary(16) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `palace_id` (`palace_id`),
  CONSTRAINT `FK_user_to_palace_memory_palaces_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_user_to_palace_palace_id` FOREIGN KEY (`palace_id`) REFERENCES `memory_palaces` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table Vocabulary.user_to_palace: ~0 rows (approximately)
/*!40000 ALTER TABLE `user_to_palace` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_to_palace` ENABLE KEYS */;

-- Dumping structure for table Vocabulary.words
DROP TABLE IF EXISTS `words`;
CREATE TABLE IF NOT EXISTS `words` (
  `id` binary(16) NOT NULL,
  `name` varchar(45) NOT NULL,
  `translation` varchar(45) DEFAULT NULL,
  `grammar` varchar(45) DEFAULT NULL,
  `story` longtext DEFAULT NULL,
  `created_time` datetime NOT NULL,
  `updated_time` datetime DEFAULT NULL,
  `enabled` tinyint(4) NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table Vocabulary.words: ~4 rows (approximately)
/*!40000 ALTER TABLE `words` DISABLE KEYS */;
REPLACE INTO `words` (`id`, `name`, `translation`, `grammar`, `story`, `created_time`, `updated_time`, `enabled`) VALUES
	(_binary 0x1E4A0DEF5AE211E8BC680242AC110002, 'akai', 'bright', 'adjective', 'some story thing', '2018-05-18 21:26:25', NULL, 1),
	(_binary 0x36AD61C35AE111E8BC680242AC110002, 'akarui', 'bright', 'adjective', 'some story thing', '2018-05-18 21:19:56', NULL, 1),
	(_binary 0x3AD524915AE211E8BC680242AC110002, 'ohoy', 'bright', 'adjective', 'some story thing', '2018-05-18 21:27:13', NULL, 1),
	(_binary 0x8EBB41895AE111E8BC680242AC110002, 'akarui', 'bright', 'adjective', 'some story thing', '2018-05-18 21:22:24', NULL, 1),
	(_binary 0xAD2C41315AE111E8BC680242AC110002, 'akarui', 'bright', 'adjective', 'some story thing', '2018-05-18 21:23:15', NULL, 1);
/*!40000 ALTER TABLE `words` ENABLE KEYS */;

-- Dumping structure for table Vocabulary.word_to_room
DROP TABLE IF EXISTS `word_to_room`;
CREATE TABLE IF NOT EXISTS `word_to_room` (
  `id` binary(16) NOT NULL,
  `word_id` binary(16) NOT NULL,
  `room_id` binary(16) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `word_id` (`word_id`),
  KEY `room_id` (`room_id`),
  CONSTRAINT `FK_word_to_room_room_id` FOREIGN KEY (`room_id`) REFERENCES `memory_rooms` (`id`),
  CONSTRAINT `FK_word_to_room_word_id` FOREIGN KEY (`word_id`) REFERENCES `words` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table Vocabulary.word_to_room: ~0 rows (approximately)
/*!40000 ALTER TABLE `word_to_room` DISABLE KEYS */;
/*!40000 ALTER TABLE `word_to_room` ENABLE KEYS */;

-- Dumping structure for table Vocabulary.word_to_user
DROP TABLE IF EXISTS `word_to_user`;
CREATE TABLE IF NOT EXISTS `word_to_user` (
  `id` binary(16) NOT NULL,
  `user_id` binary(16) NOT NULL,
  `word_id` binary(16) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `word_id` (`word_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `FK_word_to_user_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FK_word_to_user_word_id` FOREIGN KEY (`word_id`) REFERENCES `words` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table Vocabulary.word_to_user: ~0 rows (approximately)
/*!40000 ALTER TABLE `word_to_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `word_to_user` ENABLE KEYS */;

-- Dumping structure for procedure Vocabulary.Test
DROP PROCEDURE IF EXISTS `Test`;
DELIMITER //
CREATE DEFINER=`root`@`%` PROCEDURE `Test`(
	IN `userId` VARCHAR(50)
)
BEGIN
	declare wrong varchar(36);
	set wrong = 'wrong';
	
	if (userId IS NOT NULL) then
		select userId;
	else
		select wrong;
	end if;
END//
DELIMITER ;

-- Dumping structure for procedure Vocabulary.user_create
DROP PROCEDURE IF EXISTS `user_create`;
DELIMITER //
CREATE DEFINER=`root`@`%` PROCEDURE `user_create`(
	IN `nickname` VARCHAR(50),
	IN `password` VARCHAR(50)



)
    COMMENT 'Create a new user'
BEGIN
	INSERT INTO users VALUES(uuid_to_bin(uuid()), nickname, password, true, now());
	
	SET @message = concat('User ', nickname, ' was created');
	
	INSERT INTO audit_trail
		VALUES(uuid_to_bin(uuid()), @message, now());
END//
DELIMITER ;

-- Dumping structure for procedure Vocabulary.user_get
DROP PROCEDURE IF EXISTS `user_get`;
DELIMITER //
CREATE DEFINER=`root`@`%` PROCEDURE `user_get`(
	IN `nickname` VARCHAR(50)


)
BEGIN
	select bin_to_uuid(u.id) as id, u.nickname
		from users as u 
	where u.nickname = nickname and enabled = 1;
END//
DELIMITER ;

-- Dumping structure for procedure Vocabulary.word_all_get
DROP PROCEDURE IF EXISTS `word_all_get`;
DELIMITER //
CREATE DEFINER=`root`@`%` PROCEDURE `word_all_get`(
	IN `userId` VARCHAR(50)
)
BEGIN
	if (userId IS NOT NULL) then
		select *
			from words as w
				inner join word_to_user as wu on wu.word_id = w.id
				inner join users as u on u.id = wu.user_id;
	else
		select * from words;
	end if;
END//
DELIMITER ;

-- Dumping structure for procedure Vocabulary.word_create
DROP PROCEDURE IF EXISTS `word_create`;
DELIMITER //
CREATE DEFINER=`root`@`%` PROCEDURE `word_create`(
	IN `word` VARCHAR(50),
	IN `translation` VARCHAR(50),
	IN `grammar` VARCHAR(50),
	IN `story` VARCHAR(50)





,
	IN `userId` VARCHAR(50)

)
    COMMENT 'Create a new word'
BEGIN
	-- Insert word.
	set @wordId = uuid_to_bin(uuid());
	
	insert into words
		values(@wordId, word, translation, grammar, story, now(), null, 1);
	
	-- Connect to user.
	if (userId IS NOT NULL) then
		insert into word_to_user values(uuid_to_bin(uuid()), uuid_to_bin(userId), @wordId);
	end if;
	
	-- Audit trail.
	set @message = concat('Word ', word, ' was created');
	
	insert into audit_trail
		values(uuid_to_bin(uuid()), @message, now());
END//
DELIMITER ;

-- Dumping structure for function Vocabulary.bin_to_uuid
DROP FUNCTION IF EXISTS `bin_to_uuid`;
DELIMITER //
CREATE DEFINER=`root`@`%` FUNCTION `bin_to_uuid`(
	`bin` BINARY(16)

) RETURNS varchar(36) CHARSET latin1
BEGIN
	set @hexedBin = hex(bin);
	
	return (SELECT LOWER(CONCAT_WS('-',
    SUBSTR(@hexedBin, 1, 8),
    SUBSTR(@hexedBin, 9, 4),
    SUBSTR(@hexedBin, 13, 4),
    SUBSTR(@hexedBin, 17, 4),
    SUBSTR(@hexedBin, 21)
    )));
END//
DELIMITER ;

-- Dumping structure for function Vocabulary.uuid_to_bin
DROP FUNCTION IF EXISTS `uuid_to_bin`;
DELIMITER //
CREATE DEFINER=`root`@`%` FUNCTION `uuid_to_bin`(
	`uuid` VARCHAR(50)

) RETURNS binary(16)
    COMMENT 'Convert uuid string to binary'
BEGIN
	return unhex(replace(uuid, '-', ''));
END//
DELIMITER ;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
