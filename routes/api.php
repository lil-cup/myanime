<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/anime/new', \App\Http\Controllers\NewAnimeController::class);

Route::get('/anime/{name}/episodes', \App\Http\Controllers\AnimeEpisodesController::class);

Route::get('/anime/episode/{id}', \App\Http\Controllers\AnimeEpisodeController::class);

