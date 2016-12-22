# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: raspberrypi.fritz.box (MySQL 5.5.53-0+deb8u1)
# Datenbank: hackme
# Erstellt am: 2016-12-22 10:11:40 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Export von Tabelle customers
# ------------------------------------------------------------

DROP TABLE IF EXISTS `customers`;

CREATE TABLE `customers` (
  `id` mediumint(8) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(13) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(16) DEFAULT 'CUSTOMER',
  `email` varchar(255) DEFAULT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `zipcode` varchar(10) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `creditcardcmp` varchar(255) DEFAULT NULL,
  `creditcardpan` varchar(255) DEFAULT NULL,
  `creditcardcvv` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `creditcardcmp_creditcardpan_creditcardcvv` (`creditcardcmp`,`creditcardpan`,`creditcardcvv`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES;

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(1,'1603120997299','RCC80KGB3JJ','CUSTOMER','mattis@orcitincidunt.com','Raven','Monroe','Poland','Spaniard\'s Bay','186842','Ap #992-1500 Pellentesque St.','MasterCard','3468 305397 41168','967');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(2,'1609061699299','XWK97MAW3BC','CUSTOMER','dolor.dapibus.gravida@nibhAliquamornare.org','Urielle','Wyatt','Micronesia','Ambala Sadar','681368','Ap #550-1479 Vestibulum Ave','Discover','4485149063678','195');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(3,'1670041470399','TLX75RXP6YH','CUSTOMER','Praesent.interdum.ligula@Nuncac.ca','Alyssa','Buckner','Saint Kitts and Nevis','Price','620690','P.O. Box 332, 4632 Duis St.','American Express','4024007115039','149');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(4,'1650061399599','URG56YOO6YJ','CUSTOMER','libero.Donec@idmagnaet.org','Karen','Cherry','Turks and Caicos Islands','Rhisnes','5717','P.O. Box 738, 9737 Integer Av.','American Express','6457460534302311','684');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(5,'1682090859299','PIH38TGO2AD','CUSTOMER','tristique@Phasellus.org','Kieran','Shannon','Senegal','Tongerlo','99477','P.O. Box 802, 6959 Egestas St.','Discover','520 04305 83788 316','463');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(6,'1659060886299','NCL44PXA4BW','CUSTOMER','quis.accumsan@necmaurisblandit.net','Zephania','Salazar','American Samoa','Zwolle','521945','5438 Integer St.','American Express','492929 040796 7444','687');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(7,'1605061762999','BEF27DFV3HY','CUSTOMER','ornare@erat.net','Kirestin','Davidson','Moldova','Beaumont','58883','Ap #744-4126 Dolor Avenue','Visa','4929 379 33 3574','622');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(8,'1610072159799','TLK72ZKT1IL','CUSTOMER','orci@Etiam.ca','Clinton','Hoffman','Costa Rica','Weelde','526773','Ap #793-2934 Blandit Road','Visa','5307966013969630','926');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(9,'1612082191099','JFC20QVU6UO','CUSTOMER','quis@nequetellus.org','Amery','Brennan','Poland','Queilén','37908','588-6679 Ligula. Street','Visa','601179 7419752584','964');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(10,'1698092441299','KKK02FSW2BS','CUSTOMER','Praesent.eu.dui@hendreritneque.org','Clinton','Gordon','Venezuela','Montbéliard','4514','195-2953 Enim. Road','Discover','347353653815105','931');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(11,'1632081547899','JKV33KOH8KD','CUSTOMER','interdum@orci.edu','Aurora','Miranda','Saint Barthélemy','Rocourt','7906','P.O. Box 287, 4403 Suspendisse Street','MasterCard','647061 2887191989','319');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(12,'1631052703799','BXE90OAR9EC','CUSTOMER','Cras@ametanteVivamus.ca','Barrett','Fernandez','Ethiopia','Bathurst','92893-206','847-8390 Blandit Rd.','Visa','549 47970 07551 313','284');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(13,'1655040717099','CDH49PAB1GZ','CUSTOMER','nulla.In.tincidunt@portaelita.co.uk','Jordan','Haynes','Saint Barthélemy','Birkenhead','L2R 9A8','1994 Egestas. Street','MasterCard','531673 9932490163','287');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(14,'1690020664799','SBN12UKJ6CE','CUSTOMER','sapien.cursus@lacinia.org','Thane','Benjamin','Ireland','Torres del Paine','554757','754-8041 Aenean St.','MasterCard','601 16721 49391 401','640');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(15,'1631090321099','IZM15LNJ2VC','CUSTOMER','cursus.in.hendrerit@Integervulputate.org','Grady','Moody','Saint Martin','Warwick','40234','P.O. Box 622, 3806 Felis St.','American Express','4929289688190','628');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(16,'1605102475799','PRK26ZEX3FM','CUSTOMER','bibendum.ullamcorper.Duis@placerat.co.uk','Dai','Hewitt','Burkina Faso','Nemi','68-416','Ap #100-3476 Nulla Ave','Visa','3469 998577 47188','803');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(17,'1622032547999','BWE23WVZ3SR','CUSTOMER','habitant.morbi.tristique@Maurisvestibulumneque.net','Desirae','Wilder','Sao Tome and Principe','Ingelheim','11409','7930 Mauris Rd.','Visa','373081861785359','671');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(18,'1635101024199','ZPB98BMI8RE','CUSTOMER','tellus.justo.sit@Donecsollicitudin.com','Piper','Lott','Anguilla','Maransart','8149','9413 Neque. Road','American Express','526518 633006 3393','493');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(19,'1643022549699','XTR45KFD1WX','CUSTOMER','dui.quis.accumsan@mollislectus.co.uk','Walker','Hayes','Mauritania','Rosenheim','52745-130','2749 Vitae St.','Discover','647 96351 41898 538','822');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(20,'1682041221799','JGZ01RMB7MZ','CUSTOMER','Aenean@tellusidnunc.org','Katelyn','Levine','Dominica','Oyen','41544','749-8555 Metus Avenue','Visa','3789 455030 76044','180');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(21,'1658052044199','XRN26RSO7RL','CUSTOMER','Aliquam.ornare.libero@ultricesposuerecubilia.co.uk','Jemima','Callahan','Saudi Arabia','Bonavista','55148','Ap #589-5946 Fusce Rd.','Visa','3790 617694 26003','206');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(22,'1639042553999','UWT12LKB5RP','CUSTOMER','nisi@placerat.edu','Shannon','Kemp','Reunion','Woutersbrakel','14407','737-3337 Duis Rd.','MasterCard','4929 029 01 7841','972');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(23,'1681012245799','NFC67AFB4WZ','CUSTOMER','cursus.Nunc@ornare.net','Kessie','Medina','Cook Islands','Frankenthal','13538','4208 Arcu. Avenue','MasterCard','371292560319158','829');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(24,'1621071519599','QTP91LZN8MS','CUSTOMER','imperdiet@tempusmauriserat.com','Hermione','Mccoy','Hong Kong','Calder','NI3X 5AG','P.O. Box 835, 2818 Vulputate, Ave','American Express','649172 784658 1651','476');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(25,'1624022719899','EHQ78FMA3CK','CUSTOMER','Pellentesque.ut.ipsum@senectusetnetus.ca','Jillian','Cole','Lebanon','Lourdes','E26 3CC','P.O. Box 584, 3046 Quisque Ave','American Express','491 69021 87641 578','798');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(26,'1656060210199','XHJ21WSG9UZ','CUSTOMER','ornare.elit.elit@Nuncsollicitudin.org','Lael','Chase','Åland Islands','Serskamp','7207EL','580-7607 Malesuada Avenue','Discover','601173 7521997032','785');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(27,'1607050915299','YHL84RJR2LO','CUSTOMER','montes.nascetur.ridiculus@ornarefacilisis.net','Zahir','Huffman','Finland','Lanklaar','19950','900-3168 Arcu Av.','American Express','647 41695 54795 788','550');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(28,'1688051089199','IEK08IRM7PD','CUSTOMER','Maecenas.mi.felis@estac.ca','Brenda','Gilmore','Czech Republic','Sulzano','25391','P.O. Box 169, 610 Phasellus Rd.','Discover','6498133034830757','119');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(29,'1611052964099','DFP44EDO0TN','CUSTOMER','metus.Aenean.sed@laciniaorci.com','Valentine','Cooke','Dominica','Warszawa','2861','881-4972 Consequat Rd.','Visa','6444 3666 3135 1406','701');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(30,'1607102741699','BGJ47JIN4UZ','CUSTOMER','rhoncus.id.mollis@Proinvel.ca','Jonas','Huffman','Trinidad and Tobago','Marystown','742830','881-5505 Magna. St.','American Express','547113 8125229937','218');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(31,'1613062252899','UMK02JNN0GM','CUSTOMER','nulla@luctusCurabitur.ca','Devin','Keith','Trinidad and Tobago','Ghislarengo','78567','372-9462 Cras Rd.','Discover','3453 182063 69530','541');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(32,'1681022894699','WJH82FRS2LA','CUSTOMER','pharetra.nibh.Aliquam@Donecegestas.net','Rajah','Dennis','Yemen','Bever Bievene','V4R 2M4','Ap #302-7530 Nunc Rd.','American Express','6545 1350 3858 9761','135');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(33,'1671060337799','ZEL78OBB9CT','CUSTOMER','posuere@utipsum.co.uk','Chaney','Cooley','Thailand','Feltre','46337','Ap #301-8560 Sed Road','Visa','4698 5717 1142 8978','809');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(34,'1681080989099','KQF30KKU0SA','CUSTOMER','scelerisque.mollis@atfringillapurus.edu','Nina','Waller','Australia','Croydon','488270','Ap #785-2344 At Rd.','MasterCard','6496882307664614','923');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(35,'1662020428899','FYL02RED7TG','CUSTOMER','sem@afelisullamcorper.co.uk','Lenore','Boyle','Jersey','Waterloo','20017-531','706-8992 Convallis Av.','MasterCard','5361 7307 3387 3081','320');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(36,'1643060161399','SDM19ZDE1JH','CUSTOMER','ut.cursus@nonvestibulum.org','McKenzie','Bolton','Lebanon','Colchane','05-437','P.O. Box 724, 634 Gravida Av.','Visa','3473 901221 93086','136');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(37,'1649102693299','FBL59FEY5TA','CUSTOMER','tempus.non@ornareFusce.ca','Ashton','Williams','United Arab Emirates','Fratta Todina','6112SZ','P.O. Box 129, 3932 Quam Avenue','MasterCard','6011783163606986','150');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(38,'1667032129899','XEG81DMV6QH','CUSTOMER','et@Sed.ca','Rigel','Hutchinson','American Samoa','Chittoor','990018','Ap #573-5598 In St.','Visa','644 85986 53954 602','795');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(39,'1630110325299','YPY51YUG6FZ','CUSTOMER','ultricies@euismod.edu','Tatum','Daniels','Bolivia','San Martino in Badia/St. Martin in Thurn','58936','1839 Posuere St.','MasterCard','376055937586600','773');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(40,'1675082415099','LFJ30WFP2AL','CUSTOMER','eros@laoreetipsum.net','Ria','Cote','Hungary','Juazeiro do Norte','3966','6621 Ante Road','American Express','547035 073494 7855','337');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(41,'1670101352199','AFA34FMC9WK','CUSTOMER','nunc@elementumloremut.com','Mannix','Adkins','Senegal','Beerst','799114','473-9720 Aliquam Av.','Visa','3417 530079 87425','237');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(42,'1629030737699','IPW04FRF7IG','CUSTOMER','lacus.Cras.interdum@sapiencursusin.ca','Nash','Myers','Trinidad and Tobago','Saint-Hilarion','4208','360-250 Libero. St.','MasterCard','4716 204 79 7044','992');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(43,'1613102410099','VVL73RFE9IL','CUSTOMER','Etiam@pellentesqueafacilisis.ca','Oprah','Keith','Egypt','Fumal','9864','P.O. Box 881, 3368 Orci St.','MasterCard','659936 215861 2265','281');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(44,'1650022904099','AHS14XYH4VI','CUSTOMER','metus.In.lorem@erat.org','Mira','Tucker','Georgia','Pellezzano','24285','234-8864 Dictum Street','Visa','644 51945 81803 633','546');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(45,'1612070559499','DYS13PID3TG','CUSTOMER','consectetuer.mauris@vitae.com','Curran','Hurley','Montserrat','Clovenfords','156787','Ap #236-206 Dui. St.','American Express','4929221981448','395');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(46,'1666082096099','AHJ73CUN4BC','CUSTOMER','nulla@quisarcu.com','Colby','Thompson','Papua New Guinea','Bois-de-Villers','647521','P.O. Box 941, 7976 Sed, St.','Visa','3411 410610 17539','388');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(47,'1672023038199','CGE72ESN6TS','CUSTOMER','nec@ultricesaauctor.edu','Kim','Pate','Libya','Tulita','Y9H 4L8','136 Sit St.','Visa','4716418081573','740');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(48,'1669050787799','DNJ72ANU9EF','CUSTOMER','ullamcorper.viverra@neque.net','Noelle','Calhoun','Dominica','Pergola','1195','238-2229 Eu Rd.','American Express','645661 3461713717','321');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(49,'1694071356199','ZSP82VZU7SF','CUSTOMER','amet@a.net','Quemby','Ortiz','Madagascar','Dendermonde','55183','951 Netus Rd.','MasterCard','5448473308160967','648');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(50,'1693092258699','BOT47XTR8TW','CUSTOMER','ultricies@sedhendrerit.net','Joan','Molina','Lebanon','Tullibody','40556','Ap #727-673 Ut St.','MasterCard','4716 7503 5146 4620','511');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(51,'1669053044899','WHL20ZDK9HJ','CUSTOMER','mi@quispedePraesent.ca','Chelsea','Horton','Slovenia','Monteleone di Spoleto','400400','P.O. Box 314, 9337 Vitae Avenue','American Express','4716 4506 1444 9597','481');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(52,'1679051368599','BRB16XNT5AS','CUSTOMER','nec.luctus.felis@sedconsequatauctor.edu','Ivan','Wright','Mauritius','Borgomaro','214533','2142 Purus St.','American Express','532129 1669131381','838');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(53,'1648102074999','BHE49SXB9HP','CUSTOMER','facilisis.Suspendisse.commodo@sit.com','Selma','Cantrell','Kiribati','Norrköping','74893','710 Mauris Rd.','MasterCard','510176 728065 6571','998');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(54,'1625032457999','OTK62YHJ1DV','CUSTOMER','massa.rutrum@consectetuer.ca','Shea','Sears','Gibraltar','Tillicoultry','85991','P.O. Box 529, 630 Semper St.','Visa','492956 160198 9156','306');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(55,'1674112145999','MCB70FOG7WU','CUSTOMER','urna.justo@tempor.com','Rama','Conrad','Fiji','Prince Albert','1680','179-611 Nec Road','MasterCard','491 69351 36418 896','720');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(56,'1643101373899','WGB76HDD2YA','CUSTOMER','nisi.a@Sed.ca','Adam','Christian','Belarus','Taunton','9828','249-486 At, Avenue','American Express','4556581880889893','491');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(57,'1638041749799','UER57PGM4UZ','CUSTOMER','Sed@uteros.ca','Fleur','Ruiz','Belarus','Clarksville','90-397','P.O. Box 508, 717 Tincidunt St.','Visa','657225 4305334359','366');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(58,'1611071848599','HBV14NVG9VW','CUSTOMER','a@Donecporttitortellus.org','Emi','Reynolds','Bonaire, Sint Eustatius and Saba','Frigento','82659','Ap #837-3775 Dictum Ave','Visa','4556957710772','799');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(59,'1641031808599','KPL33LFQ5IW','CUSTOMER','litora.torquent.per@eu.edu','Carla','Mccray','Bangladesh','Leipzig','4835','438-5062 Quis Ave','American Express','4024 0071 2323 5219','249');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(60,'1659060731499','FHL75ZSC7PP','CUSTOMER','Sed.nec@dolortempus.edu','Rachel','Hart','Panama','Irricana','3004','P.O. Box 169, 3168 Est. Ave','MasterCard','471 61393 09396 672','418');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(61,'1673042784199','DCL15ZSL5RQ','CUSTOMER','eget@pedeCum.net','Pascale','Camacho','Tuvalu','Henderson','00458','P.O. Box 502, 8902 Purus, Rd.','American Express','525026 371704 5777','801');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(62,'1660092450099','VSY31QPJ2DF','CUSTOMER','aliquet@Nunc.org','Fuller','Barrett','Greenland','San Rosendo','R2A 3E7','P.O. Box 476, 6287 Nec St.','Discover','471665 4684177430','718');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(63,'1684022211599','DNG77MLT8UT','CUSTOMER','quis@convallisconvallisdolor.org','Zena','Peck','Singapore','Villers-la-Loue','50600','Ap #904-3311 Dictum Rd.','MasterCard','4929253742437','182');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(64,'1636021953999','TWG06GCZ9LT','CUSTOMER','viverra.Donec.tempus@lobortismauris.com','Reed','Hood','Luxembourg','Aserrí','46744','Ap #799-2167 Lacus. Street','American Express','644023 845387 9794','240');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(65,'1629122523299','RRY10YNA0MT','CUSTOMER','Nullam@semperpretium.ca','Noelani','Huffman','Palestine, State of','Candidoni','52861','814-9981 Et, Rd.','MasterCard','4590994581961','392');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(66,'1610091957199','VCB44IDQ2YK','CUSTOMER','at.velit@Suspendissealiquetmolestie.ca','Velma','Mccarty','Kenya','Lincoln','59283','Ap #623-6245 Adipiscing. Avenue','MasterCard','453916 2047595707','686');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(67,'1674071304699','DFD35IJP3ZH','CUSTOMER','ultrices.a.auctor@justo.net','Ivory','Mays','India','Rutigliano','2468','Ap #505-9613 Praesent Av.','Discover','453 22257 37200 230','674');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(68,'1635013045799','XBZ05FFG2VD','CUSTOMER','netus@sedconsequatauctor.com','Althea','Solis','Latvia','San Mauro Cilento','4974','Ap #605-1155 Elit Road','Discover','372477801468323','818');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(69,'1643090858499','UMY25XFG7IH','CUSTOMER','eu.tellus.Phasellus@Nullamscelerisqueneque.edu','Francesca','Mills','Niue','Malahide','99766','Ap #661-5593 Ut, Rd.','Visa','3487 559380 17712','784');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(70,'1665022125299','LPD07SZZ6EP','CUSTOMER','dui@interdum.com','Jasmine','Hess','Iraq','Minitonas','39977','665-5846 Non, Rd.','Discover','649420 976559 4293','609');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(71,'1690121222799','URC48TLT3WG','CUSTOMER','in.dolor.Fusce@Curabiturut.org','Hashim','Glover','Saint Barthélemy','Wolfsburg','47424','Ap #804-4400 Dignissim. Rd.','American Express','341642650515114','687');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(72,'1611052419699','IGJ73YVG4UA','CUSTOMER','ullamcorper.nisl@aliquetvel.net','Lionel','Snider','Lebanon','Concepción','57235','9620 Fermentum Avenue','Discover','471671 339382 0100','993');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(73,'1665010162399','UPC89ULI2KT','CUSTOMER','Duis.at.lacus@Etiambibendumfermentum.com','Emily','Delacruz','Latvia','Pontedera','40709','2819 Tempus Street','Discover','645 55041 33310 423','197');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(74,'1685091702599','UHV31RPM7ZH','CUSTOMER','adipiscing.non@necmollisvitae.co.uk','Robert','Phillips','Honduras','Söke','2958','284-6402 Cubilia Road','Visa','644 13394 65878 904','748');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(75,'1621030657399','XQN90SMN6UC','CUSTOMER','convallis@loremluctusut.co.uk','Roary','Vance','Tonga','Cerro Navia','56444','Ap #180-554 Non Av.','Visa','6563787707246789','497');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(76,'1642012858599','FFK54FGX2TP','CUSTOMER','Curabitur.massa.Vestibulum@penatibus.org','Angelica','Watts','Suriname','Tailles','91553','Ap #723-6682 Sodales St.','Visa','4556129440944','942');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(77,'1646080330199','MOD26MIS2OL','CUSTOMER','luctus.vulputate@risusDonec.com','Risa','Porter','Sint Maarten','La Baie','V5F 9QH','Ap #638-730 Adipiscing Av.','Visa','6472198097890576','897');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(78,'1664090328299','BDM59RPW4PV','CUSTOMER','rutrum.lorem.ac@eros.edu','Ora','Armstrong','Barbados','Erdemli','752064','P.O. Box 579, 3683 Vitae Rd.','Visa','4024007144450','411');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(79,'1612021690699','TTI85XGW6DH','CUSTOMER','dignissim.pharetra.Nam@nequeet.co.uk','Oren','Ingram','Marshall Islands','Red Deer','1966','P.O. Box 275, 1236 Lectus Rd.','MasterCard','5207 7378 7868 7315','141');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(80,'1614022090399','CGX24VLT3SU','CUSTOMER','Duis@posuere.ca','Rhona','Monroe','Virgin Islands, British','Pisa','122311','690-2738 Ipsum Street','Visa','6512 7001 4127 7452','623');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(81,'1603100282299','SJD52CHC0LX','CUSTOMER','Donec.fringilla@montesnascetur.com','Pascale','Hampton','Tuvalu','Zedelgem','56-282','P.O. Box 330, 7623 Pede Avenue','MasterCard','4662009799870680','236');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(82,'1698013031899','OEG94GMQ1SY','CUSTOMER','Curabitur.ut@ut.net','Evangeline','Whitaker','Iran','Castelmezzano','73627','P.O. Box 674, 7314 Ultrices Rd.','Visa','646 20889 88661 289','521');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(83,'1656011348399','OVJ74DHC8JL','CUSTOMER','lacinia@gravida.org','Ulric','Schroeder','Saint Barthélemy','Koningshooikt','64399','831-1582 Augue St.','Discover','521 24790 96675 409','880');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(84,'1685051115299','YXM03BES3CW','CUSTOMER','tellus@massa.edu','Susan','Quinn','Macedonia','Bremen','47379','P.O. Box 356, 3690 Egestas. Rd.','Visa','5377836812561844','252');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(85,'1633032843699','CEN23WRB5VK','CUSTOMER','penatibus@turpisAliquam.com','Beau','Ruiz','India','Armento','2825','P.O. Box 865, 233 Nunc Avenue','American Express','6452 8007 8489 9588','813');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(86,'1683081312599','CCE78UCD0TD','CUSTOMER','tortor.Nunc@accumsan.org','Elmo','Lewis','Belarus','Orléans','5616QS','4409 Diam Street','MasterCard','654491 1109863314','480');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(87,'1670031994899','SMP52ZQE2DZ','CUSTOMER','egestas.lacinia.Sed@nec.org','Hermione','Eaton','Albania','Río Verde','71-999','Ap #495-5034 Urna, Rd.','Visa','4024007101317724','923');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(88,'1665022687999','FVX58HRO5AW','CUSTOMER','molestie.pharetra@lacusEtiambibendum.org','Kuame','Olson','Slovenia','Vieste','04339','162-914 Pharetra. St.','MasterCard','5391098902509348','884');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(89,'1635081119299','VDA09HQL2CL','CUSTOMER','primis.in@ipsumporta.ca','Cally','Madden','Tajikistan','Spaniard\'s Bay','853924','Ap #258-8495 Ligula. Rd.','Visa','3786 496224 33736','875');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(90,'1644041314199','HZZ99UIL8SH','CUSTOMER','Aenean@duiinsodales.com','Orlando','Alston','Timor-Leste','Caxias do Sul','3967','Ap #433-2034 Nullam Avenue','American Express','4485044004744','996');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(91,'1634041655399','QXY04ALB9AV','CUSTOMER','nulla@aliquet.com','Jael','Estes','Fiji','Banff','B3 7JT','145-6543 Orci Rd.','American Express','5169253307593591','953');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(92,'1613070259399','VPS17IZW5MG','CUSTOMER','consectetuer.adipiscing.elit@necdiamDuis.org','Diana','Hansen','Botswana','Loreto','9627','682 Porttitor Street','MasterCard','341852232054298','591');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(93,'1673031014099','CIK28KUA2QW','CUSTOMER','Vivamus.sit.amet@dictumcursus.ca','Urielle','Carlson','Bouvet Island','Stockerau','94791','6659 Elit, Ave','MasterCard','375832820802422','886');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(94,'1691101503099','IZB32WFT3UL','CUSTOMER','ac.metus.vitae@enimEtiam.org','Nero','Rocha','Papua New Guinea','Rockford','21850','890-5220 Dapibus Rd.','MasterCard','4539510837126','157');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(95,'1695082761999','QKD67RVA7VG','CUSTOMER','lacus@sociisnatoquepenatibus.co.uk','Rigel','Wooten','Croatia','Bankura','0746TA','Ap #495-5369 Magna Road','MasterCard','4720033796429522','159');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(96,'1659090554299','PZV35TMH3GM','CUSTOMER','sem.elit@lectuspede.org','Nell','Becker','South Georgia and The South Sandwich Islands','Berbroek','7259','P.O. Box 268, 8815 Risus. Road','Visa','374145467932977','742');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(97,'1673051199699','WZR83UFZ2XI','CUSTOMER','Nulla@Phasellusliberomauris.co.uk','Olympia','Stanton','Austria','Chattanooga','93135','Ap #874-6806 Duis Av.','Visa','6472 1146 9047 6960','372');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(98,'1671051268599','VBG70NMY5BN','CUSTOMER','mi.Duis@ligulaconsectetuer.ca','Aline','Lester','Belarus','Shivapuri','158200','322-5722 Ac Avenue','American Express','649 91336 49795 196','416');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(99,'1618082981699','TCY10JXP1FP','CUSTOMER','Integer@interdumenim.com','Mikayla','Drake','Bhutan','Gentinnes','E2A 9Z9','7515 Quisque Road','American Express','559011 615922 4517','162');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(100,'1672020610599','BHB65XRS5NA','CUSTOMER','pharetra.nibh@apurusDuis.com','Deborah','Ramos','Qatar','Casole d\'Elsa','992130','P.O. Box 105, 2547 Purus. Ave','MasterCard','377128115749578','994');

INSERT INTO `customers` (`id`, `username`, `password`, `role`, `email`, `firstname`, `lastname`, `country`, `city`, `zipcode`, `street`, `creditcardcmp`, `creditcardpan`, `creditcardcvv`)
VALUES
	(101,'admin','*392B2AC8642DBA4DD6477A52D1803810DCACD219','ADMINISTRATOR','luke@deathstar.example.com','Luke','Skywalker','Tatooine','Mos Eisley','1138','42, Dusty Road, Mos Eisley Cantina',NULL,NULL,NULL);

/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
