<?php

namespace App\Controllers;

class NewsController extends Controller {

  public function index() {
    $this->jsonResponse([
      'data' => []
    ]);
  }

}
