<?php

$url = $_SERVER['REQUEST_URI'];
$path = parse_url($url, PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

echo "[$method] $path";
