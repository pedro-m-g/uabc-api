<?php

namespace App\Controllers;

class HomeController extends Controller {

  public function healthcheck() {
    $this->jsonResponse([
      'status' => 'success'
    ]);
  }

}
