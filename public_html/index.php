<?php

require_once __DIR__ ."/../vendor/autoload.php";

$url = $_SERVER['REQUEST_URI'];
$path = parse_url($url, PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

$routes = file_get_contents('../routes.txt');
$routeLines = explode(PHP_EOL, $routes);
$routesRegistry = [];
foreach ($routeLines as $line) {
  [$routeMethod, $routePath, $routeController] = explode(' ', $line);
  $routesRegistry["$routeMethod $routePath"] = $routeController;
}
$request = "$method $path";
if (!array_key_exists($request, $routesRegistry)) {
  http_response_code(404);
  return;
}

$route = $routesRegistry[$request];
[$controllerClass, $controllerMethod] = explode('@', $route);
$qualifiedControllerClass = "\\UABC\\Controllers\\$controllerClass";
$qualifiedControllerMethod = trim($controllerMethod);
$controller = new $qualifiedControllerClass();
$controller->$qualifiedControllerMethod();
