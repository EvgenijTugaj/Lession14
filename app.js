"use strict";

function DomElement(text, selector, style) {
    this.text = text;
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
        one.classList.add(this.selector.substring(1, this.selector.length));
    } else {
        one = document.createElement('p');
        one.id = this.selector.substring(1, this.selector.length);
    }
    one.textContent = this.text;
    one.style.cssText = `height: ${this.height}px; width: ${this.width}px; background-color: ${this.bg}; font-size: ${this.fontSize}px`;
    document.querySelector('body').prepend(one);

};

// let newOne = new DomElement('.one');
let newTwo = new DomElement('Просто текст 2', '.one', {
    height: 200,
    width: 200,
    bg: 'white',
    fontSize: 28
});

// newOne.create();
newTwo.create();