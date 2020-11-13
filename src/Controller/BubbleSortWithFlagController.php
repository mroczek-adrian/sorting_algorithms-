<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class BubbleSortWithFlagController extends AbstractController
{
    /**
     * @Route("/bubble/sort/with/flag", name="bubble_sort_with_flag")
     */
    public function index()
    {
        return $this->render('bubble_sort_with_flag/index.html.twig', [
            'controller_name' => 'BubbleSortWithFlagController',
        ]);
    }
}
