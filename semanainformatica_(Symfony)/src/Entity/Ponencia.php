<?php

namespace App\Entity;

use App\Repository\PonenciaRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PonenciaRepository::class)
 */
class Ponencia
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
    private $titulopo;

    /**
     * @ORM\ManyToOne(targetEntity=Categoriaponencia::class)
     * @ORM\JoinColumn(nullable=true)
     */
    private $categoriaponenciaId;

    /**
     * @ORM\Column(type="integer", nullable=true, nullable=true)
     */
    private $likepo;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitulopo(): ?string
    {
        return $this->titulopo;
    }

    public function setTitulopo(string $titulopo): self
    {
        $this->titulopo = $titulopo;

        return $this;
    }

    public function getCategoriaponenciaId(): ?Categoriaponencia
    {
        return $this->categoriaponenciaId;
    }

    public function setCategoriaponenciaId(?Categoriaponencia $categoriaponenciaId): self
    {
        $this->categoriaponenciaId = $categoriaponenciaId;

        return $this;
    }

    public function getLikepo(): ?int
    {
        return $this->likepo;
    }

    public function setLikepo(int $likepo): self
    {
        $this->likepo = $likepo;

        return $this;
    }
}
