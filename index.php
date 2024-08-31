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
    <script defer src="script.js"></script>
    <link defer rel="manifest" href="manifest.json">
    <link defer rel="shortcut icon" type="image/x-icon" href="res/favicon.webp" />
    <link defer rel="apple-touch-icon" href="res/favicon_maskable.webp">
</head>
<body>
    
    <div id="toolbar">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="1.5" d="M12 4v16"/><path stroke-linecap="round" stroke-width="1.5" d="M16 7v10M8 7v10" opacity=".5"/><path stroke-linecap="round" stroke-width="1.5" d="M20 11v2M4 11v2"/></svg>
        <div id="themeToggle" title="Toggle dark theme"><div onclick="setTheme(!isDarkTheme)"></div></div>
    </div>
    
</body>
</html>