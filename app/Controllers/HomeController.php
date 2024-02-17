<?php

namespace App\Controllers;

use CodeIgniter\HTTP\ResponseInterface;

class HomeController extends BaseController
{
    public function index(): ResponseInterface
    {
        return $this->response->setStatusCode(200)->setJSON([
            'name' => 'uabc-api',
            'status' => 'ok'
        ]);
    }
}
