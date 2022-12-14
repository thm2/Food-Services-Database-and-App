-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: dbcs411s3
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping events for database 'dbcs411s3'
--

--
-- Dumping routines for database 'dbcs411s3'
--
/*!50003 DROP PROCEDURE IF EXISTS `calc_vendors_avg_price` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `calc_vendors_avg_price`(IN vendor_id INT)
BEGIN

	DECLARE varAvgPrice REAL DEFAULT 0.0;
	DECLARE varCustStatus VARCHAR(60);
	DECLARE exit_loop BOOLEAN DEFAULT FALSE;

	DECLARE custCur CURSOR FOR (SELECT AVG(Price) as avg_vendor_price
									FROM vendor NATURAL JOIN menuitem
									GROUP BY VendorId
									HAVING VendorId = vendor_id);



	DECLARE CONTINUE HANDLER FOR NOT FOUND SET exit_loop = TRUE;

-- Previous procedure:
-- BEGIN
	-- SELECT AVG(price)
	-- INTO varAvgPrice
	-- FROM vendor NATURAL JOIN menuitem
	-- -- WHERE VendorId = vendor_id
	-- GROUP BY VendorId
	-- HAVING VendorId = vendor_id;

	-- SELECT ROUND(varAvgPrice,2) as avg_vendor_price;
-- END

   DROP TABLE IF EXISTS FinalTable;
    CREATE TABLE FinalTable(
    AvgPrice REAL DEFAULT 0.0,
    CustStatus VARCHAR(60)
    );


	OPEN custCur;
	cloop: LOOP
		FETCH custCur INTO varAvgPrice;       
		IF(exit_loop) THEN
			LEAVE cloop;
		END IF;
		
		IF (varAvgPrice>100) THEN
			SET varCustStatus = "Very Expensive";
		ELSEIF (varAvgPrice>75) AND (varAvgPrice<=100) THEN
			SET varCustStatus = "Expensive";
		ELSEIF (varAvgPrice>50) AND (varAvgPrice<=75) THEN
			SET varCustStatus = "Moderate";
		ELSEIF (varAvgPrice>25) AND (varAvgPrice<=50) THEN
			SET varCustStatus = "Inexpensive";
		ELSE
			SET varCustStatus = "Very Inexpensive";                
		END IF;
		INSERT INTO NewTable Values (varAvgPrice, varCustStatus);
	
	END LOOP cloop;
	CLOSE custCur;


	SELECT ROUND(AvgPrice,2) as AvgPrice, CustStatus
    FROM FinalTable;
    
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-14 18:50:37
