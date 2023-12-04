<?php

namespace UABC\Services\Routing;

class Router {

  private $routes = [];

  public function loadRoutesFromText($routesText) {
    $entries = explode(PHP_EOL, $routesText);
    foreach ($entries as $entry) {
      [$method, $path, $controller] = explode(' ', $entry);
      $this->routes["$method $path"] = $controller;
    }
  }

  public function findRoute($method, $path) {
    $routeKey = "$method $path";
    if (!array_key_exists($routeKey, $this->routes)) {
      throw new RouteNotFoundException($method, $path);
    }
    return $this->routes[$routeKey];
  }

  public function parseRoute($route, $separator = '@') {
    [$controllerClass, $controllerMethod] = explode($separator, $route);
    return [trim($controllerClass), trim($controllerMethod)];
  }

}
