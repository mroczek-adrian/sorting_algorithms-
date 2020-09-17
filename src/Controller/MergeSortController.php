<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class MergeSortController extends AbstractController
{
    /**
     * @Route("/merge/sort", name="merge_sort")
     */
    public function index()
    {
        return $this->render('merge_sort/index.html.twig', [
            'controller_name' => 'MergeSortController',
        ]);
    }
}
