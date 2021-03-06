<?php

namespace App\Repository;

use App\Entity\WynikAlgUczelnie;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method WynikAlgUczelnie|null find($id, $lockMode = null, $lockVersion = null)
 * @method WynikAlgUczelnie|null findOneBy(array $criteria, array $orderBy = null)
 * @method WynikAlgUczelnie[]    findAll()
 * @method WynikAlgUczelnie[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class WynikAlgUczelnieRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, WynikAlgUczelnie::class);
    }

    // /**
    //  * @return WynikAlgUczelnie[] Returns an array of WynikAlgUczelnie objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('w.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?WynikAlgUczelnie
    {
        return $this->createQueryBuilder('w')
            ->andWhere('w.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
