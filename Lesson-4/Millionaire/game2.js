'use strict'

let game = {
    name: null,
    score: 0,
    nextQuestionIndex: 0,

    /**
     * Вся игра описана здесь 
     */
    run() {
        if (!this.isQuestionExists()) {
            alert(`Игра Окончена! ${this.name} Ваш счет ${this.score}`);
            this.nextQuestionIndex = 0;
            this.score = 0;
            if (confirm("Хотите сыграть еще раз?")) {
                this.run();
            }
            return;
        }
        let result = leader.askQuestion(questions[this.nextQuestionIndex]);
        if (result) {
            this.score++;
        }
        this.nextQuestionIndex++;
        this.run();

    },

    isQuestionExists() {
        return questions[this.nextQuestionIndex] !== undefined;
    },

    // Метод выполняется при открытии страницы
    init() {
        this.name = prompt("Привет! Как тебя зовут!?");
        if (confirm(`\n\n Привет ${this.name}! Ты готов поиграть?\n\nЕсли да, то жми 'ENTER' \n\n И ПОЕХАЛИИ!\n    `)) {
            this.run();
        } else {
            alert("Очень Жаль!! Пока!");
        };
    },
};


game.init();