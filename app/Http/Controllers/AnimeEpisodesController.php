<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AnimeEpisodesController extends Controller
{
    public function __invoke(Request $request, $name)
    {
        $response = Http::get('https://anilibria.top/api/v1/anime/releases/' . $name);

        return $response;
    }
}
