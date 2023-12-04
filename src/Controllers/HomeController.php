<?php

namespace UABC\Controllers;

class HomeController extends Controller {

  public function healthcheck() {
    $this->jsonResponse([
      'status' => 'success'
    ]);
  }

}
