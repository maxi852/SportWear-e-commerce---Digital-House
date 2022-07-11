CREATE DATABASE  IF NOT EXISTS `sport_wear` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `sport_wear`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: sport_wear
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `carrito_de_compras`
--

DROP TABLE IF EXISTS `carrito_de_compras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carrito_de_compras` (
  `idcarrito_de_compras` int NOT NULL AUTO_INCREMENT,
  `fecha` date NOT NULL,
  `usuario_id` int NOT NULL,
  `sum_precio` decimal(10,0) NOT NULL,
  `login_id` varchar(45) NOT NULL,
  PRIMARY KEY (`idcarrito_de_compras`),
  KEY `fk_carrito_usuario_idx` (`usuario_id`),
  CONSTRAINT `fk_carrito_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`idusuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito_de_compras`
--

LOCK TABLES `carrito_de_compras` WRITE;
/*!40000 ALTER TABLE `carrito_de_compras` DISABLE KEYS */;
/*!40000 ALTER TABLE `carrito_de_compras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marca`
--

DROP TABLE IF EXISTS `marca`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `marca` (
  `idmarca` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`idmarca`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marca`
--

LOCK TABLES `marca` WRITE;
/*!40000 ALTER TABLE `marca` DISABLE KEYS */;
INSERT INTO `marca` VALUES (9,'Adidas'),(10,'Nike');
/*!40000 ALTER TABLE `marca` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto`
--

DROP TABLE IF EXISTS `producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto` (
  `idproducto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `color` varchar(25) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `image` varchar(100) NOT NULL,
  `tipo_calzado_id` int NOT NULL,
  `marca_id` int NOT NULL,
  PRIMARY KEY (`idproducto`),
  KEY `fk_producto_tipocalzado_id_idx` (`tipo_calzado_id`),
  KEY `fk_producto_marca_id_idx` (`marca_id`),
  CONSTRAINT `fk_producto_marca_id` FOREIGN KEY (`marca_id`) REFERENCES `marca` (`idmarca`),
  CONSTRAINT `fk_producto_tipocalzado_id` FOREIGN KEY (`tipo_calzado_id`) REFERENCES `tipo_calzado` (`idtipo_calzado`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto`
--

LOCK TABLES `producto` WRITE;
/*!40000 ALTER TABLE `producto` DISABLE KEYS */;
INSERT INTO `producto` VALUES (2,'New York','Ochentosa','gris',15000,'kalshjfkldjsahlkdjsa',2,9);
/*!40000 ALTER TABLE `producto` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `producto_talle`
--

DROP TABLE IF EXISTS `producto_talle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `producto_talle` (
  `idproducto_talle` int NOT NULL AUTO_INCREMENT,
  `producto_id` int NOT NULL,
  `talle_id` int NOT NULL,
  PRIMARY KEY (`idproducto_talle`),
  KEY `fk_produtalle_talle_id_idx` (`talle_id`),
  KEY `fk_produtalle_producto_id_idx` (`producto_id`),
  CONSTRAINT `fk_produtalle_producto_id` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`idproducto`),
  CONSTRAINT `fk_produtalle_talle_id` FOREIGN KEY (`talle_id`) REFERENCES `talle` (`idtalle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `producto_talle`
--

LOCK TABLES `producto_talle` WRITE;
/*!40000 ALTER TABLE `producto_talle` DISABLE KEYS */;
/*!40000 ALTER TABLE `producto_talle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produtalle_carrito`
--

DROP TABLE IF EXISTS `produtalle_carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtalle_carrito` (
  `idprodutalle_carrito` int NOT NULL AUTO_INCREMENT,
  `produtalle_id` int NOT NULL,
  `carrito_id` int NOT NULL,
  PRIMARY KEY (`idprodutalle_carrito`),
  KEY `fk_produtallecarrito_produtalle_id_idx` (`produtalle_id`),
  KEY `fk_produtallecarrito_carrito_id_idx` (`carrito_id`),
  CONSTRAINT `fk_produtallecarrito_carrito_id` FOREIGN KEY (`carrito_id`) REFERENCES `carrito_de_compras` (`idcarrito_de_compras`),
  CONSTRAINT `fk_produtallecarrito_produtalle_id` FOREIGN KEY (`produtalle_id`) REFERENCES `producto_talle` (`idproducto_talle`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtalle_carrito`
--

LOCK TABLES `produtalle_carrito` WRITE;
/*!40000 ALTER TABLE `produtalle_carrito` DISABLE KEYS */;
/*!40000 ALTER TABLE `produtalle_carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talle`
--

DROP TABLE IF EXISTS `talle`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talle` (
  `idtalle` int NOT NULL AUTO_INCREMENT,
  `talle` varchar(2) NOT NULL,
  PRIMARY KEY (`idtalle`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talle`
--

LOCK TABLES `talle` WRITE;
/*!40000 ALTER TABLE `talle` DISABLE KEYS */;
INSERT INTO `talle` VALUES (18,'40');
/*!40000 ALTER TABLE `talle` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_calzado`
--

DROP TABLE IF EXISTS `tipo_calzado`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_calzado` (
  `idtipo_calzado` int NOT NULL AUTO_INCREMENT,
  `tipo_de_calzado` varchar(45) NOT NULL,
  `descripcion` varchar(120) NOT NULL,
  `genero` varchar(9) NOT NULL,
  PRIMARY KEY (`idtipo_calzado`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_calzado`
--

LOCK TABLES `tipo_calzado` WRITE;
/*!40000 ALTER TABLE `tipo_calzado` DISABLE KEYS */;
INSERT INTO `tipo_calzado` VALUES (1,'Deportivo','Calzado para realizar todo tipo de deportes, para mayor especificación mirar el modelo de cada calzado','masculino'),(2,'Casual','Calzado no específico para realizar deportes sino calzado urbano para mayor comodidad en la actividad diaria','masculino'),(3,'Trekking','Calzado para realizar caminatas y actividades outdoor y de montaña,','masculino'),(4,'Fulbol','Calzado para la practica de fútbol al aire libre e indoor','masculino'),(5,'Deportivo','Calzado para realizar todo tipo de deportes, para mayor especificación mirar el modelo de cada calzado','femenino'),(6,'Casual','Calzado no específico para realizar deportes sino calzado urbano para mayor comodidad en la actividad diaria','femenino'),(7,'Trekking','Calzado para realizar caminatas y actividades outdoor y de montaña,','femenino'),(8,'Fulbol','Calzado para la practica de fútbol al aire libre e indoor','femenino');
/*!40000 ALTER TABLE `tipo_calzado` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuario`
--

DROP TABLE IF EXISTS `usuario`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuario` (
  `idusuario` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(70) NOT NULL,
  `profile_image` varchar(100) DEFAULT NULL,
  `tipo_usuario` varchar(10) NOT NULL,
  PRIMARY KEY (`idusuario`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuario`
--

LOCK TABLES `usuario` WRITE;
/*!40000 ALTER TABLE `usuario` DISABLE KEYS */;
INSERT INTO `usuario` VALUES (1,'juan','perez','juan@gmail.com','juan','asdkljflasdkj',''),(2,'jose','gomez','jose@gmail.com','jose','asdfjhaskdjjkklj','');
/*!40000 ALTER TABLE `usuario` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-30 12:37:31
