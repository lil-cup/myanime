<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class AnimeEpisodeController extends Controller
{
    public function __invoke(Request $request, $id)
    {
        $url = config('app.anilibria_api_url') . '/anime/releases/episodes/' . $id;
        $response = Http::get($url)->json();
        return $response;
    }
}
