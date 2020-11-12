<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class InsertionHalfSortController extends AbstractController
{
    /**
     * @Route("/insertion/half/sort", name="insertion_half_sort")
     */
    public function index()
    {
        return $this->render('insertion_half_sort/index.html.twig', [
            'controller_name' => 'InsertionHalfSortController',
        ]);
    }
}
