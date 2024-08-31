const voices = speechSynthesis.getVoices() ?? [];
const defaultVoice = voices[0];
let isDarkTheme = true;

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
