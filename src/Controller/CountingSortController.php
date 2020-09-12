<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class CountingSortController extends AbstractController
{
    /**
     * @Route("/counting/sort", name="counting_sort")
     */
    public function index()
    {
        return $this->render('counting_sort/index.html.twig', [
            'controller_name' => 'CountingSortController',
        ]);
    }
}
