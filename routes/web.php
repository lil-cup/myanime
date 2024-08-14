<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Http;


//Route::get('/', function () {
//    $response = Http::get('https://anilibria.top/api/v1/anime/releases/latest');
//    dd(  array_slice($response->json(), 0, 6));
//
//});

Route::get('/{page}', \App\Http\Controllers\IndexController::class)->where('page', '^(?!api).*$');
