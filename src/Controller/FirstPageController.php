<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class FirstPageController extends AbstractController
{
    /**
     * @Route("/first/page", name="first_page")
     */
    public function index()
    {
        return $this->render('first_page/index.html.twig', [
            'controller_name' => 'FirstPageController',
        ]);
    }
}
