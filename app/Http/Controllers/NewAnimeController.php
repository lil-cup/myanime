<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;

class NewAnimeController extends Controller
{
    public function __invoke()
    {
        $response = Http::get('https://anilibria.top/api/v1/anime/releases/latest');

        $allAnime = array_slice($response->json(), 0, 3);
        foreach ($allAnime as &$anime) {
            if (isset($anime['poster']['src'])) {
                $originalUrl = 'https://anilibria.top' . $anime['poster']['src'];
                $imageData = file_get_contents($originalUrl);
                $tempFilePath = tempnam(sys_get_temp_dir(), 'img');
                file_put_contents($tempFilePath, $imageData);
                $mimeType = mime_content_type($tempFilePath);
                unlink($tempFilePath);

                $base64Data = base64_encode($imageData);
                $anime['poster']['src'] = 'data:' . $mimeType . ';base64,' . $base64Data;
            }
        }

        return $allAnime;
    }
}
