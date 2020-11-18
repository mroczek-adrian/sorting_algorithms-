<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ShellSortController extends AbstractController
{
    /**
     * @Route("/shell/sort", name="shell_sort")
     */
    public function index()
    {
        return $this->render('shell_sort/index.html.twig', [
            'controller_name' => 'ShellSortController',
        ]);
    }
}
