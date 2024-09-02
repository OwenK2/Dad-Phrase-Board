<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="tags" content="tts,phraseboard,keyboard,accessibility" />
    <meta name="description" content="An interactive and customizable keyboard/phraseboard that can be used to speak outloud for the user" />
    <meta name="author" content="Owen Kuhn" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="theme-color" content="#0A0A0A" media="(prefers-color-scheme: dark)"/>
    <meta name="theme-color" content="#FBF8F3" media="(prefers-color-scheme: light)"/>
    <title>Phraseboard</title>

    <link defer href="style.css" rel="stylesheet" />
    <script defer src="https://unpkg.com/predictionary/dist/predictionary.min.js"></script>
    <script defer src="phrase.js"></script>
    <script defer src="keyboard.js"></script>
    <script defer src="script.js"></script>
    <link defer rel="manifest" href="manifest.json">
    <link defer rel="shortcut icon" type="image/x-icon" href="res/favicon.webp" />
    <link defer rel="apple-touch-icon" href="res/favicon_maskable.webp">
</head>
<body>

    <div id="display">
        <span id="phrase"></span>
        <div onclick="phrase.clear()">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M8 5a.53.53 0 0 0-.43.22l-3.92 5.49c-.4.54-.41 1.27-.05 1.84l3.98 6.22c.1.14.25.23.42.23h11.36c.9 0 1.64-.73 1.64-1.64V6.64c0-.9-.73-1.64-1.64-1.64H8Zm1.65 3.15c.2-.2.5-.2.7 0l3.13 3.12 3.1-3.12a.5.5 0 0 1 .7.7l-3.1 3.13 3.17 3.17a.5.5 0 0 1-.7.7l-3.17-3.16-3.12 3.16a.5.5 0 0 1-.72-.7l3.14-3.17-3.13-3.13a.5.5 0 0 1 0-.7Z" clip-rule="evenodd"/></svg>
        </div>
    </div>
    <div id="sidebar">
        <div class="sidebar-item">
            <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="1.5" d="M12 4v16"/><path stroke-linecap="round" stroke-width="1.5" d="M16 7v10M8 7v10" opacity=".5"/><path stroke-linecap="round" stroke-width="1.5" d="M20 11v2M4 11v2"/></svg>
        </div>
        <div id="keyboardBtns"></div>
        <div class="sidebar-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.78.45c1.04 0 1.94.72 2.13 1.7l.09.44a2.99 2.99 0 0 0 3.9 2.19l.44-.15a2.2 2.2 0 0 1 2.58.94l.79 1.31c.52.88.33 1.98-.46 2.64l-.35.3a2.83 2.83 0 0 0 0 4.36l.35.3c.79.66.98 1.76.46 2.64l-.79 1.31a2.2 2.2 0 0 1-2.58.94l-.44-.15a2.99 2.99 0 0 0-3.9 2.19l-.09.43c-.2 1-1.09 1.71-2.13 1.71h-1.56a2.15 2.15 0 0 1-2.13-1.7L9 21.4a2.99 2.99 0 0 0-3.9-2.18l-.44.15a2.2 2.2 0 0 1-2.58-.94l-.79-1.31a2.06 2.06 0 0 1 .46-2.64l.35-.3a2.83 2.83 0 0 0 0-4.36l-.35-.3a2.06 2.06 0 0 1-.46-2.64l.79-1.31a2.2 2.2 0 0 1 2.58-.94l.44.15A2.99 2.99 0 0 0 9 2.6l.09-.45c.2-.98 1.09-1.7 2.13-1.7h1.56ZM12 15.3a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6Z" clip-rule="evenodd"/></svg>
        </div>
    </div>
    <div id="suggestions"></div>
    <div id="keyboards"></div>

    <!-- <div class="shade">
        <div class="popup">
            <div class="popup-head">
                <svg class="popup-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.75 3.33a1 1 0 0 0-1.42 0l-7.3 7.3-7.29-7.3a1 1 0 1 0-1.41 1.41l7.3 7.3-7.3 7.3a1 1 0 0 0 1.41 1.4l7.3-7.29 7.3 7.3a1 1 0 0 0 1.4-1.42l-7.29-7.3 7.3-7.29a1 1 0 0 0 0-1.41Z"/></svg>
                Header text
            </div>
            <div class="popup-body">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nisi ut ullam eos corporis! Eveniet repudiandae dicta eum provident magni repellendus error suscipit architecto! Enim deserunt quibusdam delectus quisquam adipisci.
            </div>
        </div>
    </div> -->
    
</body>
</html>