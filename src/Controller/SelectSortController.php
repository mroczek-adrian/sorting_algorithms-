<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class SelectSortController extends AbstractController
{
    /**
     * @Route("/select/sort", name="select_sort")
     */
    public function index()
    {
        return $this->render('select_sort/index.html.twig', [
            'controller_name' => 'SelectSortController',
        ]);
    }
}
