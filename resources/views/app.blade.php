<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="{{ asset('css/app.css') . '?' . config('app.resources_version') }}">
    <link rel="icon" href="/favicon.svg">
    <title>MyAnime</title>
</head>
<body>
<div id="app">
    <App></App>
</div>
</body>

<script>
    const ani_url = @json(config('app.anilibria_url'));
</script>
<script src="{{ asset('js/app.js') . '?' . config('app.resources_version') }}"></script>
</html>
