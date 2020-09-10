<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class BubbleSortController extends AbstractController
{
    /**
     * @Route("/bubble/sort", name="bubble_sort")
     */
    public function index()
    {
        return $this->render('bubble_sort/index.html.twig', [
            'controller_name' => 'BubbleSortController',
        ]);
    }
}
