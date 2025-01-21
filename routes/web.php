<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Root route to display the welcome page with posts and login/register links
Route::get('/', function () {
    // Fetch posts using the PostController logic
    $posts = app(PostController::class)->index();

    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'authUserId' => auth()->id(),
        'posts' => $posts, // Pass posts to the frontend
    ]);
})->name('welcome');

Route::get('/posts/{post}', [PostController::class, 'show'])->name('posts.show');

// Dashboard route
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Grouped routes for profile management and posts creation restriction
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::get('/post/create', [PostController::class, 'create'])->name('post.create');
    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');

    Route::get('/posts/{post}/edit', [PostController::class, 'edit'])->name('posts.edit');
    Route::put('/posts/{post}', [PostController::class, 'update'])->name('posts.update');

    Route::delete('/posts/{post}', [PostController::class, 'destroy'])->name('posts.destroy');
});

// Authentication routes
require __DIR__ . '/auth.php';
