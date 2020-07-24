<?php

namespace App\Entity;

use App\Repository\TalerRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TalerRepository::class)
 */
class Taler
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $titulota;

    /**
     * @ORM\ManyToOne(targetEntity=Categoriataller::class)
     * @ORM\JoinColumn(nullable=true)
     */
    private $categoriatallerId;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $liketa;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitulota(): ?string
    {
        return $this->titulota;
    }

    public function setTitulota(string $titulota): self
    {
        $this->titulota = $titulota;

        return $this;
    }

    public function getCategoriatallerId(): ?Categoriataller
    {
        return $this->categoriatallerId;
    }

    public function setCategoriatallerId(?Categoriataller $categoriatallerId): self
    {
        $this->categoriatallerId = $categoriatallerId;

        return $this;
    }

    public function getLiketa(): ?int
    {
        return $this->liketa;
    }

    public function setLiketa(int $liketa): self
    {
        $this->liketa = $liketa;

        return $this;
    }
}
