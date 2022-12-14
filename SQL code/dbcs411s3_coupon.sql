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
-- Table structure for table `coupon`
--

DROP TABLE IF EXISTS `coupon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `coupon` (
  `CouponId` bigint NOT NULL,
  `DiscountPercentage` int NOT NULL,
  `Active` tinyint NOT NULL,
  `UserId` int DEFAULT NULL,
  `VendorId` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `coupon`
--

LOCK TABLES `coupon` WRITE;
/*!40000 ALTER TABLE `coupon` DISABLE KEYS */;
INSERT INTO `coupon` VALUES (9635270094,50,1,62631888,63174877),(9635270094,50,1,77461264,NULL),(9635270094,50,1,66764163,NULL),(9635270094,50,1,NULL,NULL),(9635270094,50,1,NULL,NULL),(9618520611,70,1,64391976,69477552),(9618520611,70,1,39946258,28292783),(9618520611,70,1,55826526,NULL),(9618520611,70,1,36892475,NULL),(9618520611,70,1,NULL,NULL),(3936416261,60,0,58382254,89676886),(3936416261,60,0,NULL,76228662),(3936416261,60,0,NULL,NULL),(3936416261,60,0,NULL,NULL),(3936416261,60,0,NULL,NULL),(6619021526,20,1,55166459,81755124),(6619021526,20,1,69519594,91689689),(6619021526,20,1,69319444,NULL),(6619021526,20,1,54719586,NULL),(6619021526,20,1,NULL,NULL),(9835506634,20,0,71141525,77868362),(9835506634,20,0,NULL,66532396),(9835506634,20,0,NULL,49677265),(9835506634,20,0,NULL,51139125),(9835506634,20,0,NULL,NULL),(8866249373,90,1,85281365,32968686),(8866249373,90,1,46128832,66157459),(8866249373,90,1,37125694,NULL),(8866249373,90,1,69641846,NULL),(8866249373,90,1,25271521,NULL),(1427900480,100,0,64949589,88739662),(1427900480,100,0,35938837,25529522),(1427900480,100,0,62389687,NULL),(1427900480,100,0,89944992,NULL),(1427900480,100,0,NULL,NULL),(4082241549,100,1,18457438,39956831),(4082241549,100,1,96833672,NULL),(4082241549,100,1,49395414,NULL),(4082241549,100,1,77537334,NULL),(4082241549,100,1,NULL,NULL),(2816173355,70,0,77441689,68777448),(2816173355,70,0,21543652,71898181),(2816173355,70,0,NULL,NULL),(2816173355,70,0,NULL,NULL),(2816173355,70,0,NULL,NULL),(2144193732,90,0,86214369,26644813),(2144193732,90,0,NULL,37671815),(2144193732,90,0,NULL,94711515),(2144193732,90,0,NULL,29839971),(2144193732,90,0,NULL,58323744),(8699444760,10,0,25832159,31965856),(8699444760,10,0,57592879,NULL),(8699444760,10,0,76784696,NULL),(8699444760,10,0,11614283,NULL),(8699444760,10,0,NULL,NULL),(9479238585,100,1,21843543,24625559),(9479238585,100,1,18353393,NULL),(9479238585,100,1,41744255,NULL),(9479238585,100,1,NULL,NULL),(9479238585,100,1,NULL,NULL),(8803451951,20,1,52367169,95295949),(8803451951,20,1,NULL,NULL),(8803451951,20,1,NULL,NULL),(8803451951,20,1,NULL,NULL),(8803451951,20,1,NULL,NULL),(4301717429,100,1,91873437,38576782),(4301717429,100,1,77173118,NULL),(4301717429,100,1,69179687,NULL),(4301717429,100,1,NULL,NULL),(4301717429,100,1,NULL,NULL),(8960942762,40,0,44529485,72573933),(8960942762,40,0,29446751,84783486),(8960942762,40,0,18654851,91481572),(8960942762,40,0,NULL,99379552),(8960942762,40,0,NULL,NULL),(1050853998,100,0,83264341,84332792),(1050853998,100,0,NULL,NULL),(1050853998,100,0,NULL,NULL),(1050853998,100,0,NULL,NULL),(1050853998,100,0,NULL,NULL),(7420972922,90,1,94877575,54547458),(7420972922,90,1,58911224,NULL),(7420972922,90,1,NULL,NULL),(7420972922,90,1,NULL,NULL),(7420972922,90,1,NULL,NULL),(4907563075,50,0,29189468,68516456),(4907563075,50,0,NULL,79281467),(4907563075,50,0,NULL,88189778),(4907563075,50,0,NULL,45647888),(4907563075,50,0,NULL,24568663),(6257747408,70,1,72898877,91942965),(6257747408,70,1,41298663,23197649),(6257747408,70,1,62911869,74599526),(6257747408,70,1,61734718,17319332),(6257747408,70,1,NULL,12912297),(4197163291,40,1,63282295,64228632),(4197163291,40,1,81314553,NULL),(4197163291,40,1,61428966,NULL),(4197163291,40,1,24898369,NULL),(4197163291,40,1,85558452,NULL),(9544027143,80,0,29446751,93282266),(9544027143,80,0,42845949,NULL),(9544027143,80,0,47484453,NULL),(9544027143,80,0,78517394,NULL),(9544027143,80,0,NULL,NULL),(9785445841,10,0,74755448,68961741),(9785445841,10,0,11229886,NULL),(9785445841,10,0,NULL,NULL),(9785445841,10,0,NULL,NULL),(9785445841,10,0,NULL,NULL),(1187255483,40,1,56922569,48532982),(1187255483,40,1,26988476,35381559),(1187255483,40,1,NULL,35694363),(1187255483,40,1,NULL,88189778),(1187255483,40,1,NULL,47826794),(1967260968,10,1,82313244,38966315),(1967260968,10,1,41485981,78545516),(1967260968,10,1,38373114,81638373),(1967260968,10,1,87471843,63948156),(1967260968,10,1,55815214,54756636),(3153888585,90,0,23312492,26345161),(3153888585,90,0,64949589,17151914),(3153888585,90,0,62384119,69945657),(3153888585,90,0,51553334,NULL),(3153888585,90,0,NULL,NULL),(8993232983,50,0,88757392,69585549),(8993232983,50,0,NULL,41772711),(8993232983,50,0,NULL,14142433),(8993232983,50,0,NULL,75787351),(8993232983,50,0,NULL,59847193),(3821685337,30,0,85558452,82673676),(3821685337,30,0,NULL,35664453),(3821685337,30,0,NULL,75965999),(3821685337,30,0,NULL,92189821),(3821685337,30,0,NULL,NULL),(5139877019,20,0,33229992,32968686),(5139877019,20,0,94877575,68449616),(5139877019,20,0,NULL,83665135),(5139877019,20,0,NULL,59985617),(5139877019,20,0,NULL,NULL),(3266073023,40,0,96241486,77516253),(3266073023,40,0,56737271,45494765),(3266073023,40,0,39238753,34894599),(3266073023,40,0,62184819,NULL),(3266073023,40,0,NULL,NULL),(7307368002,50,0,47451886,14269518),(7307368002,50,0,54274823,92713287),(7307368002,50,0,NULL,NULL),(7307368002,50,0,NULL,NULL),(7307368002,50,0,NULL,NULL),(7856841818,10,0,47174733,43848763),(7856841818,10,0,22894439,NULL),(7856841818,10,0,33995265,NULL),(7856841818,10,0,73274825,NULL),(7856841818,10,0,62384119,NULL),(9606098244,40,0,99597722,63394468),(9606098244,40,0,58537425,29736726),(9606098244,40,0,39238753,16899219),(9606098244,40,0,26943555,NULL),(9606098244,40,0,NULL,NULL),(8547155937,20,1,53599355,91249479),(8547155937,20,1,27269983,23989819),(8547155937,20,1,NULL,67878968),(8547155937,20,1,NULL,38746517),(8547155937,20,1,NULL,84142529),(1792366178,80,1,95955163,43764832),(1792366178,80,1,82847367,53771553),(1792366178,80,1,12317642,NULL),(1792366178,80,1,38186977,NULL),(1792366178,80,1,21381282,NULL),(2274541423,70,0,96944995,55311163),(2274541423,70,0,NULL,87844686),(2274541423,70,0,NULL,72242459),(2274541423,70,0,NULL,12691473),(2274541423,70,0,NULL,94711515),(1011689626,10,1,12765952,96342379),(1011689626,10,1,27976282,66841442),(1011689626,10,1,NULL,NULL),(1011689626,10,1,NULL,NULL),(1011689626,10,1,NULL,NULL),(4692047057,80,0,49386136,34751451),(4692047057,80,0,49219362,73866857),(4692047057,80,0,NULL,69328238),(4692047057,80,0,NULL,18824564),(4692047057,80,0,NULL,NULL),(9728234444,60,0,74755448,95131258),(9728234444,60,0,82787845,16729864),(9728234444,60,0,18444383,25529522),(9728234444,60,0,68645488,63931151),(9728234444,60,0,56593199,97475567),(4065184980,50,1,97492251,44515566),(4065184980,50,1,NULL,NULL),(4065184980,50,1,NULL,NULL),(4065184980,50,1,NULL,NULL),(4065184980,50,1,NULL,NULL),(1298391443,40,1,56783936,96543718),(1298391443,40,1,83939542,NULL),(1298391443,40,1,37434391,NULL),(1298391443,40,1,32712127,NULL),(1298391443,40,1,NULL,NULL);
/*!40000 ALTER TABLE `coupon` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-14 18:50:36
