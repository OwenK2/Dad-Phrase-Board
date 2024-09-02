class Keyboard {
    constructor(name, icon, phrase, keys) {
        this.phrase = phrase
        this.name = name;
        this.keys = keys;
        this.parent = document.getElementById("keyboards");
        this.elem = document.createElement('div');
        this.elem.id = name;
        for(let row = 0; row < this.keys.length; ++row) {
            let rowElem = document.createElement('div');
            rowElem.className = 'keyboard-row';
            for(let col = 0; col < this.keys[row].length; ++col) {
                this.addKey(rowElem, this.keys[row][col]);
            }
            this.elem.appendChild(rowElem);
        }
        this.makeSidebarBtn(icon);
        if(this.parent.children.length == 0) {Keyboard.SwitchKeyboard(this)}
        this.parent.appendChild(this.elem);
    }

    addKey(rowElem, key) {
        // Create key object
        let keyData = typeof key == "string" ? {display: key, value: key} : key;
        if(!keyData.display) keyData.display = keyData.value;
        
        // Create key element
        let self = this;
        let keyElem = document.createElement('div');
        keyElem.className = 'keyboard-key';
        keyElem.dataset.value = keyData.value;
        keyElem.textContent = keyData.display;
        keyElem.onclick = () => self.phrase.typeStr(keyData.value);
        rowElem.appendChild(keyElem);
    }
    makeSidebarBtn(icon) {
        let self = this;
        this.sidebarBtn = document.createElement("div");
        this.sidebarBtn.className = "sidebar-item";
        this.sidebarBtn.innerHTML = icon;
        this.sidebarBtn.onclick = () => Keyboard.SwitchKeyboard(self);
        document.getElementById("keyboardBtns").appendChild(this.sidebarBtn);
    }
    static SwitchKeyboard(keyboard) {
        document.querySelectorAll("#keyboards > div.visible").forEach((e) => {
            e.classList.remove('visible');
        });
        document.querySelectorAll(".sidebar-item.active").forEach((e) => {
            e.classList.remove('active');
        });
        keyboard.elem.classList.add('visible');
        keyboard.sidebarBtn.classList.add('active');
    }
}