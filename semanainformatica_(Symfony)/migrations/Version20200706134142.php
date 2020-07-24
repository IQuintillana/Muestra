<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200706134142 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categoriaponencia (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categoriataller (id INT AUTO_INCREMENT NOT NULL, nombre VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE ponencia (id INT AUTO_INCREMENT NOT NULL, categoriaponencia_id_id INT DEFAULT NULL, titulopo VARCHAR(255) NOT NULL, likepo INT DEFAULT NULL, INDEX IDX_C842908BD84F2289 (categoriaponencia_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE taler (id INT AUTO_INCREMENT NOT NULL, categoriataller_id_id INT DEFAULT NULL, titulota VARCHAR(255) NOT NULL, liketa INT DEFAULT NULL, INDEX IDX_AEA69CC25AF7E186 (categoriataller_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE usuario (id INT AUTO_INCREMENT NOT NULL, user VARCHAR(255) NOT NULL, pass VARCHAR(255) NOT NULL, email VARCHAR(100) NOT NULL, rol VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE ponencia ADD CONSTRAINT FK_C842908BD84F2289 FOREIGN KEY (categoriaponencia_id_id) REFERENCES categoriaponencia (id)');
        $this->addSql('ALTER TABLE taler ADD CONSTRAINT FK_AEA69CC25AF7E186 FOREIGN KEY (categoriataller_id_id) REFERENCES categoriataller (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE ponencia DROP FOREIGN KEY FK_C842908BD84F2289');
        $this->addSql('ALTER TABLE taler DROP FOREIGN KEY FK_AEA69CC25AF7E186');
        $this->addSql('DROP TABLE categoriaponencia');
        $this->addSql('DROP TABLE categoriataller');
        $this->addSql('DROP TABLE ponencia');
        $this->addSql('DROP TABLE taler');
        $this->addSql('DROP TABLE usuario');
    }
}
