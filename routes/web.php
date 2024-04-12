<?php

use App\Http\Controllers\ActivitiesCalendarController;
use App\Http\Controllers\Api\CalendarApiController;
use App\Http\Controllers\Api\CoachingApiController;
use App\Http\Controllers\Api\NewsApiController;
use App\Http\Controllers\Api\ProceduresApiController;
use App\Http\Controllers\CoachController;
use App\Http\Controllers\NewsArticleController;
use App\Http\Controllers\ProceduresController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
})->middleware('guest');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resource('/news', NewsArticleController::class);
    Route::resource('/calendar', ActivitiesCalendarController::class);
    Route::resource('/coaches', CoachController::class);
    Route::resource('/procedures', ProceduresController::class);
});

Route::prefix('api')->middleware('api')->group(function () {
    Route::get('/news', [NewsApiController::class, 'getNews']);
    Route::get('/news/{id}', [NewsApiController::class, 'getArticle']);

    Route::get('/calendar', [CalendarApiController::class, 'getCalendar']);
    Route::get('/calendar/{id}', [CalendarApiController::class, 'getActivity']);

    Route::get('/coaches', [CoachingApiController::class, 'getCoaches']);
    Route::get('/coaches/{id}', [CoachingApiController::class, 'getCoach']);

    Route::get('/procedures', [ProceduresApiController::class, 'getProcedures']);
    Route::get('/procedures/{id}', [ProceduresApiController::class, 'getProcedure']);
});

require __DIR__ . '/auth.php';
