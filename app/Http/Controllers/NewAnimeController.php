<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class NewAnimeController extends Controller
{
    public function __invoke()
    {
        $response = Http::get('https://anilibria.top/api/v1/anime/releases/latest');

        $allAnime = array_slice($response->json(), 0, 3);

        return $allAnime;
    }
}
