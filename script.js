const voices = speechSynthesis.getVoices() ?? [];
const defaultVoice = voices[0];
const keyboardSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M8 5h8c2.83 0 4.24 0 5.12.88.88.88.88 2.3.88 5.12v2c0 2.83 0 4.24-.88 5.12-.88.88-2.3.88-5.12.88H8c-2.83 0-4.24 0-5.12-.88C2 17.24 2 15.82 2 13v-2c0-2.83 0-4.24.88-5.12C3.76 5 5.18 5 8 5Zm-2 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm3-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-.25 3c0 .41-.34.75-.75.75H7a.75.75 0 0 1 0-1.5h10c.41 0 .75.34.75.75Z" clip-rule="evenodd"/></svg>`;
const phraseSvg = `<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 512 512"><path d="M371.42 183.13c17.75 0 34.83 2.37 50.87 6.65-17.42-79.14-104.45-139.34-209.45-139.34C95.29 50.44 0 125.8 0 218.8c0 59.3 38.78 111.38 97.34 141.37l-33 73.8c62.08-6.9 122.95-23.22 169.42-38.27-17.91-21.93-28.03-48.24-28.03-76.27 0-75.16 74.33-136.3 165.69-136.3z" class="st0"/><path d="M512 319.43c0-61.43-62.95-111.21-140.59-111.21S230.82 258 230.82 319.43c0 46.92 36.74 87 88.68 103.35 28.26 10.97 88.28 31.93 150 38.79l-21.8-48.75c38.68-19.8 64.3-54.22 64.3-93.39z"/></svg>`;
let isDarkTheme = true;
let phrase, keyboards = [];

const defaultKeys = [
    ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
    [{display: "Space", value: ' '}],
    [
        {display: "Yes", value: "Yes "},
        {display: "IDK", value: "I don't know "},
        {display: "No", value: "No "},
        {display: ",", value: ", "},
        {display: ".", value: ". "},
        {display: "?", value: "? "},
        {display: "!", value: "! "}
    ]
];

window.addEventListener('load', function() {

    // Register service worker for PWA (app-like website)
    if('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js', {scope: '.'})
        .then(function (registration) {}, function (err) {
            console.error('PWA: ServiceWorker registration failed: ', err);
        });
    }

    // Handle dark/light theme
    let themeListener = window.matchMedia("(prefers-color-scheme: dark)");
    themeListener.addEventListener("change", e => setTheme(e.matches));
    setTheme(JSON.parse(localStorage.getItem('isDarkTheme')) ?? themeListener.matches ?? isDarkTheme);

    // Verify that speech synthesis is available
    if(!('speechSynthesis' in window)) {
        alert("Speech synthesis not supported :(");
    }

    // Create phrase display
    phrase = new Phrase("phrase");

    // Create keyboards
    keyboards.push(new Keyboard("keyboard", keyboardSvg, phrase, defaultKeys));
    keyboards.push(new Keyboard("phraseboard", phraseSvg, phrase, []));
});

function setTheme(isDark) {
    document.querySelector(':root').className = isDark ? '' : 'light';
    localStorage.setItem('isDarkTheme', isDark);
    isDarkTheme = isDark;
}

function speak(text, voice=null, rate=1.0, volume=1.0) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = voice;
    utterance.rate = rate;
    utterance.volume = volume;
    speechSynthesis.speak(utterance);
}
