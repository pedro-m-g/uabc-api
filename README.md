# UABC - Facultad de Ciencias

Backend del sistema de información de Facultad de Ciencias. El sistema permite administrar los siguientes
módulos:

-   [x] Noticias
-   [x] Calendario de Actividades
-   [x] Asesorías
-   [x] Trámites Escolares
-   [ ] Programas de Servicio Social
-   [ ] Modalidades de Aprendizaje y Prácticas Profesionales
-   [ ] Ofertas Laborales
-   [ ] Proyectos de Investigación
-   [ ] Proyectos Cimarrones

# Instalación

```sh
npm install
composer install
php artisan migrate
php artisan account:create
```

# Ejecución

Iniciar servidor de backend

```sh
php artisan serve
```

Iniciar servidor de frontend (en una terminal separada)

```sh
npm run dev
```

# Documentación

-   [Laravel](https://laravel.com/docs/11.x)
-   [React.js](https://18.react.dev/)
-   [Tailwind CSS](https://v3.tailwindcss.com/)
-   [Inertia.js](https://inertiajs.com/)
-   [Full Calendar](https://fullcalendar.io/docs#toc)
-   [React Markdown Editor](https://uiwjs.github.io/react-markdown-editor/)
-   [Axios](https://axios-http.com/docs/intro)
