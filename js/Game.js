/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = ['Hope you got this', 'Rick and Morty', 'Treehouse', 'Star Wars', 'Supercalifragilisticexpialidocious'];
        this.activePhrase = null;
        this.phraseObj;
    }


    //hides start screen, getRandomPhase, set activePhrase calls addPhrasetoDisplay
    startGame() {
        document.getElementById('overlay').style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.missed = 0;
        this.phraseObj = new Phrase(this.activePhrase);
        this.phraseObj.addPhraseToDisplay();
    }

    getRandomPhrase() {
        const i = Math.floor(Math.random() * (this.phrases.length));
        return this.phrases[i];
    }

    //handles game logic, captcures clicks, disables letters, removes life, show letter, checkes gameover
    handleInteraction(button) {

        if (this.phraseObj.checkLetter(button.textContent)) {
            button.className = 'chosen';
            this.phraseObj.showMatchedLetter(button.textContent);
            if (this.checkForWin()) {
                this.gameOver(`Congratulations, you won! The phrase was: ${this.activePhrase}`);
            }
        } else {
            button.className = 'wrong';
            this.removeLife();
        }

    }

    //changes the heart picture, incrases missed and checks for gameover
    removeLife() {
        this.missed++;
        const tries = document.querySelectorAll('.tries');
        tries[0].className = 'noheart';
        tries[0].children[0].src = 'images/lostHeart.png';
        if (this.missed === 5) {
            this.gameOver(`Sorry, you lost! The phrase was: ${this.activePhrase}`);
        }
    }

    //checkes if all letters are revealed
    checkForWin() {
        const letterCollection = document.getElementById('phrase');
        if (letterCollection.innerHTML.search("hide") < 0) {
            return true;
        } else {
            return false;
        }

    }

    //resets the classes, displays the starter screen with the msg it got
    gameOver(message) {
        document.getElementById('overlay').style.display = '';
        document.getElementById('game-over-message').textContent = message;
        document.getElementById('phrase').firstElementChild.innerHTML = '';
        const wrongs = document.querySelectorAll('.wrong');
        for (let item of wrongs) {
            item.className = 'key';
        }
        const chosens = document.querySelectorAll('.chosen');
        for (let item of chosens) {
            item.className = 'key';
        }
        const hearts = document.querySelectorAll('.noheart');
        for (let i = 0; i < hearts.length; i++) {
            hearts[i].className = 'tries';
            hearts[i].children[0].src = 'images/liveHeart.png';
        }
    }
}