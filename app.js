"use strict";

function DomElement(selector, style) {
    this.selector = selector;
    style = style || {};
    this.height = style.height;
    this.width = style.width;
    this.bg = style.bg;
    this.fontSize = style.fontSize;
}

DomElement.prototype.create = function () {
    let one;
    if (this.selector.substring(0, 1) === '.') {
        one = document.createElement('div');
        one.classList.add(this.selector.substring(1, this.selector.lenght));
    } else {
        one = document.createElement('p');
        one.id = this.selector.substring(1, this.selector.lenght);
    }
    console.log(this.height); //ЗНАЧЕНИЕ ПОКАЗЫВАЕТ
    // one.style.height = this.height; //НЕ РАБОТАЕТ
    // one.style.color = "black"; //РАБОТАЕТ (НЕ ПОНЯТНО)
    one.style.wight = "200px"; //НЕ РАБОТАЕТ (НЕ ПОНЯТНО)
    // one.style.width = this.width;
    // one.style.background-color = this.bg;
    // one.style.fontSize = this.fontSize;

    console.log(one);

};

// let newOne = new DomElement('.one');
let newTwo = new DomElement('#one', {
    height: 200,
    width: 200,
    bg: 'white',
    fontSize: 28
});

// newOne.create();
newTwo.create();