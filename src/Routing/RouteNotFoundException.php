<?php

namespace App\Routing;

class RouteNotFoundException extends \Exception {

  private $method;
  private $path;

  public function __construct($method, $path) {
    parent::__construct("Route not found: [$method] $path");
    $this->method = $method;
    $this->path = $path;
  }

  public function getMethod() {
    return $this->method;
  }

  public function getPath() {
    return $this->path;
  }

}
