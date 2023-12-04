<?php

require_once __DIR__ ."/../vendor/autoload.php";

use UABC\Services\Routing\RouteNotFoundException;
use UABC\Services\Routing\Router;

$controllersNamespace = '\\UABC\\Controllers';

$router = new Router();
$router->loadRoutesFromText(file_get_contents('../routes.txt'));

try {
  $url = $_SERVER['REQUEST_URI'];

  $path = parse_url($url, PHP_URL_PATH);
  $method = $_SERVER['REQUEST_METHOD'];

  $route = $router->findRoute($method, $path);

  [$controllerClass, $controllerMethod] = $router->parseRoute($route);

  $qualifiedControllerClass = "$controllersNamespace\\$controllerClass";

  $controller = new $qualifiedControllerClass();
  $controller->$controllerMethod();
} catch (RouteNotFoundException $ex) {
  http_response_code(404);
}
