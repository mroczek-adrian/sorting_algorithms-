<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class InsertionSortController extends AbstractController
{
    /**
     * @Route("/insertion/sort", name="insertion_sort")
     */
    public function index()
    {
        return $this->render('insertion_sort/index.html.twig', [
            'controller_name' => 'InsertionSortController',
        ]);
    }
}
