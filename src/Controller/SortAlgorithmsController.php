<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SortAlgorithmsController extends AbstractController
{
    /**
     * @Route("/sort/algorithms", name="sort_algorithms")
     */
    public function index()
    {
        return $this->render('sort_algorithms/index.html.twig', [
            'controller_name' => 'SortAlgorithmsController',
        ]);
    }
}
