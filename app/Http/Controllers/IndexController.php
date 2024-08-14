<?php

namespace App\Http\Controllers;


use Illuminate\Routing\Controller as Controller;

class IndexController extends Controller
{
    public function __invoke()
    {
        return view('app');
    }
}
