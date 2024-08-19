<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AnimeEpisodesController extends Controller
{
    public function __invoke(Request $request, $name)
    {
        $url = config('app.anilibria_api_url') . '/anime/releases/' . $name;
        $response = Http::get($url)->json();
        return $response;
    }
}
