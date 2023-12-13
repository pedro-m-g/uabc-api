<?php

namespace App\Controllers;

class Controller {

  public function jsonResponse($data, $status = 200, $headers = []) {
    http_response_code($status);

    if (!array_key_exists('Content-Type', $headers)) {
      $headers['Content-Type'] = 'application/json';
    }
    foreach ($headers as $header => $value) {
      header("$header: $value");
    }

    echo json_encode($data);
  }

}
