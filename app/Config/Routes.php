<?php

use CodeIgniter\Router\RouteCollection;

/**
 * @var RouteCollection $routes
 */
$routes->get('/', 'HomeController::index');
$routes->get('/news', 'NewsController::index');
$routes->post('/news', 'NewsController::create');
$routes->put('/news/(:segment)', 'NewsController::update/$1');
$routes->delete('/news/(:segment)', 'NewsController::delete/$1');
