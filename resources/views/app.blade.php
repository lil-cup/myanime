<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/app.css') . '?' . config('app.resources_version') }}">
    <title>MyAnime</title>
</head>
<body>
<div id="app">
    <App></App>
</div>
</body>
<script src="{{ asset('js/app.js') . '?' . config('app.resources_version') }}"></script>
</html>
