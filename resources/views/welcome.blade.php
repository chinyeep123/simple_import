<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        @vite(['resources/js/app.js'])
        @laravelPWA
    </head>
    <body>
        <div id="app">
            <router-view></router-view>
        </div>
        {{-- <button id="install" hidden>Install</button> --}}
    </body>
    <script>
        // let installPrompt = null;
        // const installButton = document.querySelector("#install");

        // window.addEventListener("beforeinstallprompt", (event) => {
        //     event.preventDefault();
        //     installPrompt = event;
        //     installButton.removeAttribute("hidden");
        // });
        // installButton.addEventListener("click", async () => {
        //     if (!installPrompt) {
        //         return;
        //     }
        //     const result = await installPrompt.prompt();
        //     console.log(`Install prompt was: ${result.outcome}`);
        //     installPrompt = null;
        //     installButton.setAttribute("hidden", "");
        // });
    </script>
</html>
