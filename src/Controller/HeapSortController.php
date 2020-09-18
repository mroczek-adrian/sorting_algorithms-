<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class HeapSortController extends AbstractController
{
    /**
     * @Route("/heap/sort", name="heap_sort")
     */
    public function index()
    {
        return $this->render('heap_sort/index.html.twig', [
            'controller_name' => 'HeapSortController',
        ]);
    }
}
