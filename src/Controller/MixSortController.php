<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MixSortController extends AbstractController
{
    /**
     * @Route("/mix/sort", name="mix_sort")
     */
    public function index()
    {
        return $this->render('mix_sort/index.html.twig', [
            'controller_name' => 'MixSortController',
        ]);
    }
}
