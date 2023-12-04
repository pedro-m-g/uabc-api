<?php

namespace UABC\Controllers;

class NewsController extends Controller {

  public function index() {
    $this->jsonResponse([
      'data' => []
    ]);
  }

}
