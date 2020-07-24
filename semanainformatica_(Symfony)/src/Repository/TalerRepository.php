<?php

namespace App\Repository;

use App\Entity\Taler;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Taler|null find($id, $lockMode = null, $lockVersion = null)
 * @method Taler|null findOneBy(array $criteria, array $orderBy = null)
 * @method Taler[]    findAll()
 * @method Taler[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TalerRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Taler::class);
    }

    // /**
    //  * @return Taler[] Returns an array of Taler objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('t.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Taler
    {
        return $this->createQueryBuilder('t')
            ->andWhere('t.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
