<?php

use App\Http\Controllers\ActivitiesCalendarController;
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

require __DIR__ . '/auth.php';
