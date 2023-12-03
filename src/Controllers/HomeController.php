<?php

namespace UABC\Controllers;

class HomeController {

  public function healthcheck() {
    header('Content-Type: application/json');
    echo json_encode([
      'status' => 'success'
    ]);
  }

}
