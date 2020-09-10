<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class QuickSortController extends AbstractController
{
    /**
     * @Route("/quick/sort", name="quick_sort")
     */
    public function index()
    {
        return $this->render('quick_sort/index.html.twig', [
            'controller_name' => 'QuickSortController',
        ]);
    }
}
