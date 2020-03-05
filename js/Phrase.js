/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
    }


    //adds placeholder letters to the screen from the phrase
    addPhraseToDisplay() {
        const parent = document.getElementById('phrase').firstElementChild;
        for (let i = 0; i < this.phrase.length; i++) {
            let text;
            const liElement = document.createElement('LI');
            if (this.phrase[i] === ' ') {
                liElement.className = 'space';
                text = document.createTextNode(' ');
                liElement.appendChild(text);
            } else {
                liElement.className = 'hide letter ' + this.phrase[i];
                text = document.createTextNode(this.phrase[i]);
            }
            liElement.appendChild(text);
            parent.appendChild(liElement);
        }

    }

    //Checkes the selected letter against the phrase, returns boolean
    checkLetter(letter) {
        let status = false;
        for (let i = 0; i < this.phrase.length; i++) {
            if (letter === this.phrase[i].toLowerCase()) {
                status = true;
            }
        }
        return status;
    }

    //reveling the letter if it's on the board
    showMatchedLetter(letter) {
        const letterCollection = document.getElementById('phrase').firstElementChild.children;
        for (let i = 0; i < letterCollection.length; i++) {
            if (letterCollection[i].textContent.toLowerCase() === letter) {
                letterCollection[i].className = 'show letter ' + letter;
            }
        }
    }


}