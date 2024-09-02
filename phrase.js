class Phrase {
    constructor(id) {
        this.id = id;
        this.elem = document.getElementById(id);
        this.suggestionElem = document.getElementById("suggestions");
        this.createPredictor("res/words_en.txt");
    }

    createPredictor(dict) {
        this.predictor = Predictionary.instance();
        this.predictionDebounceTime = 300;
        this.suggestions = [];
        this.maxPredictions = 10;
        fetch(dict).then((res) => res.text()).then((text) => {
            this.predictor.parseWords(text, {
                elementSeparator: '\n',
                rankSeparator: ' ',
                wordPosition: 2,
                rankPosition: 0,
                addToDictionary: "EN"
            });
        })
        .catch((e) => { console.error(e);alert("Failed to load prediction dictionary");});
    }
    
    typeStr(phrase) {
        this.elem.textContent += phrase;
        this.onChange();
    }

    onChange() {
        let self = this;
        this.predictor.learnFromInput(this.elem.textContent);
        clearTimeout(this.predictionDebounce);
        this.predictionDebounce = setTimeout(() => {
            self.refreshSuggestions();
        }, this.suggestions.length == 0 ? 0 : this.predictionDebounceTime);
    }

    clear() {
        this.elem.textContent = "";
        clearTimeout(this.predictionDebounce);
        this.refreshSuggestions();
    }

    refreshSuggestions() {
        let self = this;
        this.suggestions = this.elem.textContent == '' ? [] : this.predictor.predict(this.elem.textContent, {maxPredictions: this.maxPredictions});
        this.suggestionElem.innerHTML = '';
        this.suggestions.forEach((word) => {
            let elem = document.createElement("div");
            elem.textContent = word;
            elem.onclick = () => {
                self.elem.textContent = self.predictor.applyPrediction(self.elem.textContent, word, {dontLearn: false});
                self.onChange();
            };
            self.suggestionElem.appendChild(elem);
        });
    }
}