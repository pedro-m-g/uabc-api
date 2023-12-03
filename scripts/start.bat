@echo off

cd /D "%~dp0"
php -S localhost:8000 -t ../public_html
